import {backendService} from '../../services/axios.backend-api';
import {pokemonService} from '../../services/axios.pokemontcg-v2';
import {memoize} from '../../utils/memoize';

type PokeCardsData = ApiResponse<ICard>;

// Memoize HTTP request having same parameters
const pokemonApiRequestMemo = memoize(
  async (types: string, pageSize: number, page: number) => {
    const params = {q: `types:${types}`, pageSize, page};
    /** @see https://docs.pokemontcg.io/api-reference/cards/search-cards */
    const {data} = await pokemonService.get<PokeCardsData>('/cards', {params});
    console.info('Memoized request to /cards', {types, page});
    return data.data || [];
  },
);

async function backendApiRequest(type: string, pageSize: number, page: number) {
  const params = {pageSize, page};
  return backendService
    .get<PokeCardsData>(`/cards/type/${type}`, {params})
    .then(({data}) => data.data || [])
    .catch(error => {
      console.error(error);
      return [] as ICard[];
    });
}

async function getCardsByType(type: string, pageSize: number, page: number) {
  const [backendCards, pokemonCards] = await Promise.all([
    backendApiRequest(type, pageSize, page),
    pokemonApiRequestMemo(type, pageSize, page),
  ]);

  return [...backendCards, ...pokemonCards];
}

export default getCardsByType;
