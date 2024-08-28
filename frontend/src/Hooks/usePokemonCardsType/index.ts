import {useCallback, useContext, useEffect, useMemo} from 'react';

import GlobalContext from '../../Providers/GlobalContext';
import getCardsByType from './service';

const usePokemonCardsType = (typeId: PokemonTypes) => {
  const {globalState, setGlobalState} = useContext(GlobalContext);

  // checks if the set by type exists, if not, initialize it
  const cardsByType: PokeCardsByType = useMemo(() => {
    const cardsType = globalState.cardsByType[typeId] || {};
    return cardsType.id
      ? cardsType
      : {
          id: typeId,
          title: globalState.localTypes[typeId] || {},
          cards: cardsType.cards || [],
          page: 1,
          pageSize: 10,
          isFinal: false,
          lastPageFetched: 0,
        };
  }, [globalState, typeId]);

  useEffect(() => {
    const {id: typeId, cards, page, pageSize, lastPageFetched} = cardsByType;

    // fetch the current page
    if (page !== lastPageFetched) {
      getCardsByType(typeId, pageSize, page)
        .then(dataCards => {
          let newCardsById: Record<string, ICard> = {};

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

          const uniqueCards = [...cards, ...dataCards].reduce(
            (map: Map<string, ICard>, item: ICard) => {
              return map.set(item.id, item);
            },
            new Map<string, ICard>(),
          );

          setGlobalState({
            cardsById: updatedCardsById,
            cardsByType: {
              ...globalState.cardsByType,
              [typeId]: {
                ...cardsByType,
                cards: Array.from(uniqueCards.values()),
                isFinal: !results || results < pageSize,
                lastPageFetched: page,
                isLoading: false,
              },
            },
          });
        })
        .catch(console.error);
    }
  }, [cardsByType, globalState, setGlobalState]);

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
