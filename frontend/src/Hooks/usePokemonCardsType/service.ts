import {AxiosRequestConfig} from 'axios';

import {pokemonService} from '../../services/axios.pokemon-tcg';
import {memoize} from '../../utils/memoize';

type PokeCardsData = {cards: PokeCard[]};

// Memoize HTTP request having same parameters
const getPokemonCardsTypeMemo = memoize(
  async (types: string, pageSize: number, page: number) => {
    const config: AxiosRequestConfig = {params: {types, pageSize, page}};
    const {data} = await pokemonService.get<PokeCardsData>('/cards', config);
    console.info('Memoized request to /cards', {types, page});
    return data.cards || [];
  },
);

export default getPokemonCardsTypeMemo;
