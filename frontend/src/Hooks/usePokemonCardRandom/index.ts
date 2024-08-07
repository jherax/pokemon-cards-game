import {useCallback, useContext, useRef, useState} from 'react';

import GlobalContext from '../../Providers/GlobalContext';
import getRandomCardId from './service';

const usePokemonCardRandom = () => {
  const {globalState} = useContext(GlobalContext);
  const [randomCard, setRandomCard] = useState<ICard>();
  const [resolved, setResolved] = useState(false);

  // used a reference to "localTypes" to avoid passing it
  // as a dependency to useEffect, because it doesn't change
  const refLocalTypes = useRef(globalState.localTypes);
  const refPokeTypes = useRef(
    Object.keys(refLocalTypes.current).filter(t => t !== 'Unknown'),
  );

  const getRandomCard = useCallback(() => {
    setResolved(false);

    getRandomCardId(refPokeTypes.current)
      .then(card => setRandomCard(card))
      .catch(console.error)
      .finally(() => setResolved(true));
  }, []);

  return {resolved, randomCard, getRandomCard};
};

export default usePokemonCardRandom;
