import {pokemonService} from '../../services/axios.pokemontcg-v2';
import {memoize} from '../../utils/memoize';
import {randomInt} from '../../utils/randomizer';

type CardIdsData = {
  data: Array<{id: string}>;
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
};

type CardsData = {
  data: ICard[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
};

// Memoize HTTP request having same parameters
const getCardsCountByTypeMemo = memoize(async (type: string) => {
  const params = {q: `types:${type}`, pageSize: 1, page: 1, select: 'id'};
  /** @see https://docs.pokemontcg.io/api-reference/cards/search-cards */
  const {data} = await pokemonService.get<CardIdsData>('/cards', {params});
  console.info('Memoized request to /cards', {types: type});
  return data.totalCount;
});

const getRandomCardId = async (types: string[]) => {
  const randomType = randomInt(0, types.length - 1);
  const pokeType = types[randomType];
  const totalCount = await getCardsCountByTypeMemo(pokeType);

  const pageSize = 10;
  const pages = Math.floor(totalCount / pageSize);
  // gets a random index of the pokemon cards by type
  const randomIndex = randomInt(1, totalCount);
  // this is the page where the random index is located
  const page = Math.ceil((pages * randomIndex) / totalCount);

  /** @see https://docs.pokemontcg.io/api-reference/cards/search-cards */
  const params = {q: `types:${pokeType}`, pageSize, page};
  const {data} = await pokemonService.get<CardsData>('/cards', {params});
  const cards = data.data;

  // this is the index of the card in the current page,
  // if the index is negative, it means that the card is the last one.
  const targetIndex = (randomIndex % pageSize) - 1;
  return targetIndex < 0 ? cards[cards.length - 1] : cards[targetIndex];
};

export default getRandomCardId;
