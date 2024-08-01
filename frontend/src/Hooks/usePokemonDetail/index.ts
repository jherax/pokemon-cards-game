/* eslint-disable curly */
import {useContext, useEffect, useState} from 'react';

import GlobalContext from '../../Providers/GlobalContext';
import getPokemonDetailMemo from './service';
import {transformCard} from './transformCard';

const usePokemonDetail = (cardId: string) => {
  const {globalState, setGlobalState} = useContext(GlobalContext);
  const [cardDetail, setCardDetail] = useState<PokeCardDetail>();
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    const {cardsById, cardsByType, localTypes} = globalState;

    if (!resolved) {
      getPokemonDetailMemo(cardId)
        .then(dataCard => {
          const card = transformCard(dataCard, localTypes);
          setResolved(true);
          if (!card) return;

          setCardDetail(card);
          if (!cardsById[cardId]) {
            setGlobalState({
              localTypes,
              cardsByType,
              cardsById: {
                ...cardsById,
                [cardId]: dataCard,
              },
            });
          }
        })
        .catch(error => {
          setResolved(true);
          console.error(error);
        });
    }
  }, [cardId, resolved, globalState, setGlobalState]);

  return {card: cardDetail as PokeCardDetail, resolved};
};

export default usePokemonDetail;
