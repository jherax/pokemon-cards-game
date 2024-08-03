import {useCallback, useContext, useEffect, useMemo, useState} from 'react';

import GlobalContext from '../../Providers/GlobalContext';
import getPokemonCardsTypeMemo from './service';

const usePokemonCardsType = (typeId: PokeTypesName) => {
  const {globalState, setGlobalState} = useContext(GlobalContext);
  const [lastPageFetched, setLastPageFetched] = useState(0);

  // checks if the set by type exists, if not, initialize it
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
      getPokemonCardsTypeMemo(id, pageSize, page)
        .then(dataCards => {
          let newCardsById: Record<string, PokeCard> = {};

          newCardsById = dataCards.reduce((pokeCards, card) => {
            // adds only cards not present in globalState
            if (!globalState.cardsById[card.id]) {
              pokeCards[card.id] = card;
            }
            return pokeCards;
          }, newCardsById);

          // prevents adding duplicate cards
          const hasNewCards = Object.keys(newCardsById).length > 0;
          const results = dataCards.length;

          const updatedCardsById = hasNewCards
            ? {...globalState.cardsById, ...newCardsById}
            : globalState.cardsById;

          const updatedPokeCards = hasNewCards
            ? [...cards, ...dataCards]
            : cards;

          // update last page fetched
          setLastPageFetched(page);
          setGlobalState({
            cardsById: updatedCardsById,
            cardsByType: {
              ...globalState.cardsByType,
              [id as PokeTypesName]: {
                ...cardsByType,
                cards: updatedPokeCards,
                isFinal: !results || results < pageSize,
                isLoading: false,
              },
            },
          });
        })
        .catch(console.error);
    }
  }, [cardsByType, lastPageFetched, globalState, setGlobalState]);

  // triggers the next page to fetch
  const loadNextPage = useCallback(() => {
    setGlobalState({
      cardsByType: {
        ...globalState.cardsByType,
        [cardsByType.id]: {
          ...cardsByType,
          page: cardsByType.page + 1,
          isLoading: true,
        },
      },
    });
  }, [cardsByType, globalState, setGlobalState]);

  return {...cardsByType, loadNextPage};
};

export default usePokemonCardsType;
