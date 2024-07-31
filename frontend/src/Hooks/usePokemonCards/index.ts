import {useCallback, useContext, useEffect, useMemo, useState} from 'react';

import GlobalContext from '../../Providers/GlobalContext';
import getPokemonCardsMemo from './service';

const usePokemonCards = (typeId: PokeTypesName) => {
  const {globalState, setGlobalState} = useContext(GlobalContext);
  const [lastPageFetched, setLastPageFetched] = useState(0);

  const cardsByType: PokeCardsByType = useMemo(() => {
    let cards = {...globalState.cardsByType[typeId]};
    if (!cards.id) {
      cards = {
        id: typeId,
        title: globalState.localTypes[typeId] || {},
        cards: [],
        page: 1,
        pageSize: 10, // max: 1000
        isFinal: false,
      };
    }
    return cards;
  }, [globalState, typeId]);

  useEffect(() => {
    const {id, cards, page, pageSize} = cardsByType;

    // fetch the current page
    if (page !== lastPageFetched) {
      getPokemonCardsMemo(id, pageSize, page)
        .then(dataCards => {
          let namedCards: Record<string, PokeCard> = {};

          namedCards = dataCards.reduce((hashtabe, card) => {
            // adds only cards not present in globalState
            if (!globalState.cardsById[card.id]) {
              hashtabe[card.id] = card;
            }
            return hashtabe;
          }, namedCards);

          // prevents adding duplicate cards
          const hasNewCards = Object.keys(namedCards).length > 0;

          const updatedCardsById = hasNewCards
            ? {...globalState.cardsById, ...namedCards}
            : globalState.cardsById;

          const updatedPokeCards = hasNewCards
            ? [...cards, ...dataCards]
            : cards;

          // update last page fetched
          setLastPageFetched(page);
          setGlobalState({
            localTypes: globalState.localTypes,
            cardsById: updatedCardsById,
            cardsByType: {
              ...globalState.cardsByType,
              [id]: {
                ...cardsByType,
                cards: updatedPokeCards,
                isFinal: !dataCards.length,
              },
            },
          });
        })
        .catch(console.error);
    }
  }, [lastPageFetched, cardsByType, globalState, setGlobalState]);

  // Callback that set next page to fetch
  const loadNextPage = useCallback(() => {
    setGlobalState({
      localTypes: globalState.localTypes,
      cardsById: globalState.cardsById,
      cardsByType: {
        ...globalState.cardsByType,
        [cardsByType.id]: {
          ...cardsByType,
          page: cardsByType.page + 1,
        },
      },
    });
  }, [cardsByType, globalState, setGlobalState]);

  return {...cardsByType, loadNextPage};
};

export default usePokemonCards;
