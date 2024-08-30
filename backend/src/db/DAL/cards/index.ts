import {saveCard} from './create';
import {deleteCard} from './delete';
import {getCardsByName, getCardsByType} from './retrieve';

const cardsModule = {
  saveCard,
  getCardsByName,
  getCardsByType,
  deleteCard,
};

export default cardsModule;
