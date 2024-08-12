import {pokemonService} from '../../services/axios.pokemontcg-v2';
import {memoize} from '../../utils/memoize';

type PokeCardData = {data: ICard};

// Memoize HTTP request having same parameters
const getPokemonDetailMemo = memoize(async (cardId: string) => {
  const {data} = await pokemonService.get<PokeCardData>(`/cards/${cardId}`);
  console.info(`Memoized request to /cards/${cardId}`);
  return data.data;
});

export default getPokemonDetailMemo;
