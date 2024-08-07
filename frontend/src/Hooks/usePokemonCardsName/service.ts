import {AxiosRequestConfig} from 'axios';

import {pokemonService} from '../../services/axios.pokemontcg-v1';
import {memoize} from '../../utils/memoize';

type PokeCardsData = {cards: PokeCard[]};

// Memoize HTTP request having same parameters
const getPokemonCardsNameMemo = memoize(
  async (name: string, pageSize: number, page: number) => {
    const config: AxiosRequestConfig = {params: {name, pageSize, page}};
    const {data} = await pokemonService.get<PokeCardsData>('/cards', config);
    console.info('Memoized request to /cards', {name, page});
    return data.cards || [];
  },
);

export default getPokemonCardsNameMemo;
