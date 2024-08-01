import {pokemonService} from '../../services/axios.pokemon-tcg';
import {memoize} from '../../utils/memoize';

type PokeCardData = {card: PokeCard};

// Memoize HTTP request having same parameters
const getPokemonDetailMemo = memoize(async (cardId: string) => {
  const {data} = await pokemonService.get<PokeCardData>(`/cards/${cardId}`);
  console.info(`Memoized request to /cards/${cardId}`);
  return data.card;
});

export default getPokemonDetailMemo;
