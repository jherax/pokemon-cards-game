import {saveCard} from './create';
import {getCardsByName, getCardsByType} from './retrieve';

const cardsModule = {
  saveCard,
  getCardsByName,
  getCardsByType,
};

export default cardsModule;
