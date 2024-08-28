import {v4 as uuidv4} from 'uuid';

import {backendService} from '../../services/axios.backend-api';

type PokeCardData = {data: {id: string}};

const savePokemonCard = async (card: ICard) => {
  // As the pokemon-tcg api may change,
  // and the backend service has a schema validator,
  // we need to send the card as JSON in order to
  // pass the validation.
  const body = {card: JSON.stringify(card)};
  return backendService
    .post<PokeCardData>('/cards/create', body)
    .then(({data}) => {
      card.id = data.data.id;
      return card;
    })
    .catch(error => {
      console.error(error);
      console.info('Falling back to memory');
      card.id = uuidv4();
      return card;
    });
};

export default savePokemonCard;
