import {pokemonService} from '../../services/axios.pokemontcg-v2';
import {memoize} from '../../utils/memoize';

type PokeTypesData = {data: string[]};

// Memoize HTTP request having same parameters
const getPokemonTypesMemo = memoize(async () => {
  const {data} = await pokemonService.get<PokeTypesData>('/types');
  console.info('Memoized request to /types');
  return data.data || [];
});

export default getPokemonTypesMemo;
