import {useCallback, useContext} from 'react';

import GlobalContext from '../../Providers/GlobalContext';
import deletePokemonCard from './service';

function usePokemonDelete() {
  const {globalState, setGlobalState} = useContext(GlobalContext);

  const updateContext = useCallback(
    (card: ICard) => {
      const cardId = card.id;
      const {cardsById, cardsByType, cardsByName} = globalState;

      const newCardsById = {...cardsById};
      delete newCardsById[cardId];

      const newCardsByName = {...cardsByName};
      newCardsByName.cards = newCardsByName.cards?.filter(
        card => card.id !== cardId,
      );

      const addTypes = {} as GobalState['cardsByType'];
      const newCardsByType = {
        ...cardsByType,
        ...card.types.reduce((cardTypes, t) => {
          const cardType = cardsByType[t] || {};
          cardTypes[t] = {
            ...cardType,
            cards: cardType.cards?.filter(c => c.id !== cardId),
          };
          return cardTypes;
        }, addTypes),
      };

      setGlobalState({
        cardsById: newCardsById,
        cardsByName: newCardsByName,
        cardsByType: newCardsByType,
      });
    },
    [globalState, setGlobalState],
  );

  const deleteCard = useCallback(
    async (card: ICard) => {
      await deletePokemonCard(card.id);
      updateContext(card);
      return card;
    },
    [updateContext],
  );

  return {deleteCard};
}

export default usePokemonDelete;
