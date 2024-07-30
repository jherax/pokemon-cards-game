import {pokemonService} from '../../services/axios.pokemon-tcg';
import {memoize} from '../../utils/memoize';

type PokeTypesData = {types: string[]};

// Memoize HTTP request having same parameters
const getPokemonTypesMemo = memoize(async () => {
  const {data} = await pokemonService.get<PokeTypesData>('/types');
  console.info('Memoized request to /types');
  return data.types || [];
});

export default getPokemonTypesMemo;
