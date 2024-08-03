import {useCallback, useContext, useEffect, useMemo, useState} from 'react';

import GlobalContext from '../../Providers/GlobalContext';
import getPokemonCardsNameMemo from './service';

const usePokemonCardsName = (pokeName: string) => {
  const {globalState, setGlobalState} = useContext(GlobalContext);
  const [lastPageFetched, setLastPageFetched] = useState(0);

  const cardsByName: PokeCardsByName = useMemo(() => {
    return globalState.cardsByName?.matchName
      ? globalState.cardsByName
      : {
          matchName: pokeName,
          title: {} as never,
          cards: [],
          page: 1,
          pageSize: 10,
          isFinal: false,
        };
  }, [globalState.cardsByName, pokeName]);

  useEffect(() => {
    const {matchName, cards, page, pageSize} = cardsByName;

    // fetch the current page
    if (page !== lastPageFetched) {
      getPokemonCardsNameMemo(matchName, pageSize, page)
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
            cardsByName: {
              ...cardsByName,
              cards: updatedPokeCards,
              title: globalState.localTypes.Unknown,
              isFinal: !results || results < pageSize,
              isLoading: false,
            },
          });
        })
        .catch(console.error);
    }
  }, [cardsByName, lastPageFetched, globalState, setGlobalState]);

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
