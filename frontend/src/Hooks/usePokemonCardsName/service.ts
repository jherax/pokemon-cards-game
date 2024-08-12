import {pokemonService} from '../../services/axios.pokemontcg-v2';
import {memoize} from '../../utils/memoize';

type PokeCardsData = ApiResponse<ICard>;

// Memoize HTTP request having same parameters
const getPokemonCardsNameMemo = memoize(
  async (name: string, pageSize: number, page: number) => {
    const params = {q: `name:${name}*`, pageSize, page};
    /** @see https://docs.pokemontcg.io/api-reference/cards/search-cards */
    const {data} = await pokemonService.get<PokeCardsData>('/cards', {params});
    console.info('Memoized request to /cards', {name, page});
    return data.data || [];
  },
);

export default getPokemonCardsNameMemo;
