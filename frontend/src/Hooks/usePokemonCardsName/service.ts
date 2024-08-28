import {backendService} from '../../services/axios.backend-api';
import {pokemonService} from '../../services/axios.pokemontcg-v2';
import {memoize} from '../../utils/memoize';

type PokeCardsData = ApiResponse<ICard>;

// Memoize HTTP request having same parameters
const pokemonApiRequestMemo = memoize(
  async (name: string, pageSize: number, page: number) => {
    const params = {q: `name:${name}*`, pageSize, page};
    /** @see https://docs.pokemontcg.io/api-reference/cards/search-cards */
    const {data} = await pokemonService.get<PokeCardsData>('/cards', {params});
    console.info('Memoized request to /cards', {name, page});
    return data.data || [];
  },
);

async function backendApiRequest(name: string, pageSize: number, page: number) {
  const params = {pageSize, page};
  return backendService
    .get<PokeCardsData>(`/cards/name/${name}`, {params})
    .then(({data}) => data.data || [])
    .catch(error => {
      console.error(error);
      return [];
    });
}

async function getCardsByName(name: string, pageSize: number, page: number) {
  const [backendCards, pokemonCards] = await Promise.all([
    backendApiRequest(name, pageSize, page),
    pokemonApiRequestMemo(name, pageSize, page),
  ]);

  return [...backendCards, ...pokemonCards];
}

export default getCardsByName;
