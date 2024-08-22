import {v4 as uuidv4} from 'uuid';

const savePokemonCard = async (card: ICard) => {
  // TODO: call backend service
  card.id = uuidv4();
  return Promise.resolve(card);
};

export default savePokemonCard;
