import {useCallback, useContext, useEffect, useMemo} from 'react';

import GlobalContext from '../../Providers/GlobalContext';
import getCardsByName from './service';

const usePokemonCardsName = (pokeName: string) => {
  const {globalState, setGlobalState} = useContext(GlobalContext);

  // checks if the set by matching name exists, if not, initialize it
  const cardsByName: PokeCardsByName = useMemo(() => {
    const cardsName = globalState.cardsByName || {};
    return cardsName.matchName === pokeName
      ? cardsName
      : {
          matchName: pokeName,
          title: globalState.localTypes.Unknown,
          cards: cardsName.cards || [],
          page: 1,
          pageSize: 10,
          isFinal: false,
          isLoading: true,
          lastPageFetched: 0,
        };
  }, [globalState, pokeName]);

  useEffect(() => {
    const {matchName, cards, page, pageSize, lastPageFetched} = cardsByName;

    // fetch the current page
    if (page !== lastPageFetched) {
      getCardsByName(matchName, pageSize, page)
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

          const updatedPokeCards = hasNewCards
            ? [...cards, ...dataCards]
            : cards;

          setGlobalState({
            cardsById: updatedCardsById,
            cardsByName: {
              ...cardsByName,
              cards: updatedPokeCards,
              isFinal: !results || results < pageSize,
              lastPageFetched: page,
              isLoading: false,
            },
          });
        })
        .catch(console.error);
    }
  }, [cardsByName, globalState, setGlobalState]);

  // triggers the next page to fetch
  const loadNextPage = useCallback(() => {
    setGlobalState({
      cardsByName: {
        ...cardsByName,
        page: cardsByName.page + 1,
        isLoading: true,
      },
    });
  }, [cardsByName, setGlobalState]);

  return {...cardsByName, loadNextPage};
};

export default usePokemonCardsName;
