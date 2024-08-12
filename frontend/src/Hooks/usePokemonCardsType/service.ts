import {pokemonService} from '../../services/axios.pokemontcg-v2';
import {memoize} from '../../utils/memoize';

type PokeCardsData = ApiResponse<ICard>;

// Memoize HTTP request having same parameters
const getPokemonCardsTypeMemo = memoize(
  async (types: string, pageSize: number, page: number) => {
    const params = {q: `types:${types}`, pageSize, page};
    /** @see https://docs.pokemontcg.io/api-reference/cards/search-cards */
    const {data} = await pokemonService.get<PokeCardsData>('/cards', {params});
    console.info('Memoized request to /cards', {types, page});
    return data.data || [];
  },
);

export default getPokemonCardsTypeMemo;
