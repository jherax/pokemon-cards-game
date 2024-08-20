/* eslint-disable curly */
import {useCallback, useContext} from 'react';

import GlobalContext from '../../Providers/GlobalContext';
import fieldPrefix from '../../utils/fieldPrefix';
import savePokemonCard from './service';

const usePokemonUpdate = () => {
  const {globalState, setGlobalState} = useContext(GlobalContext);
  const XCHAR = '×';

  const updateContext = useCallback(
    (card: ICard) => {
      const {cardsById, cardsByType, cardsByName} = globalState;
      const addTypes = {} as GobalState['cardsByType'];
      let cardsName = {} as GobalState['cardsByName'];
      // if a search was made by pokemon name
      if (card.name.toLowerCase().startsWith(cardsByName?.matchName)) {
        cardsName = {...cardsByName, cards: [card, ...cardsByName.cards]};
      }
      setGlobalState({
        cardsById: {
          ...cardsById,
          [card.id]: card,
        },
        cardsByName: cardsName,
        cardsByType: {
          ...cardsByType,
          ...card.types.reduce((cardTypes, t) => {
            const cardType = cardsByType[t] || {};
            const prevCards = cardType.cards || [];
            cardTypes[t] = {
              ...cardType,
              cards: [card, ...prevCards],
            };
            return cardTypes;
          }, addTypes),
        },
      });
      return card;
    },
    [globalState, setGlobalState],
  );

  const updateCard = useCallback(
    async (card: ICard, fields: Record<string, string>) => {
      const {ATTACK, WEAKNESS, RESISTANCE} = fieldPrefix;
      for (const key in fields) {
        if (key === 'hp') {
          card.hp = fields[key];
        } else if (key.startsWith(ATTACK)) {
          const attack = key.replace(ATTACK, '');
          const item = card.attacks?.find(a => a.name === attack);
          if (item) item.damage = fields[key];
        } else if (key.startsWith(WEAKNESS)) {
          const weakness = key.replace(WEAKNESS, '');
          const item = card.weaknesses?.find(w => w.type === weakness);
          if (item) item.value = fields[key].replace('x', XCHAR);
        } else if (key.startsWith(RESISTANCE)) {
          const resistance = key.replace(RESISTANCE, '');
          const item = card.resistances?.find(r => r.type === resistance);
          if (item) item.value = fields[key].replace('x', XCHAR);
        }
      }

      const updatedCard = await savePokemonCard(card);
      updateContext(updatedCard);
      return updatedCard;
    },
    [updateContext],
  );

  return {updateCard};
};

export default usePokemonUpdate;
