import {v4 as uuidv4} from 'uuid';

const savePokemonCard = async (card: ICard) => {
  card.id = uuidv4();
  return Promise.resolve(card);
};

export default savePokemonCard;
