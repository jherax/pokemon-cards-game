import {useContext, useEffect, useRef, useState} from 'react';

import GlobalContext from '../../Providers/GlobalContext';
import getPokemonTypesMemo from './service';

const usePokemonTypes = () => {
  const {globalState} = useContext(GlobalContext);
  const [pokeTypes, setPokeTypes] = useState<PokemonTypesList>([]);

  // used a reference to "localTypes" to avoid passing it
  // as a dependency to useEffect, because it doesn't change
  const refLocalTypes = useRef(globalState.localTypes);

  useEffect(() => {
    getPokemonTypesMemo()
      .then(dataTypes => {
        const localTypes = refLocalTypes.current;
        const types: PokemonTypesList = dataTypes.map(type => ({
          ...(localTypes[type as PokemonTypes] || localTypes.Unknown),
          name: type,
        }));

        setPokeTypes(types);
      })
      .catch(console.error);
  }, [setPokeTypes]);

  // returns the hook data
  return {pokeTypes};
};

export default usePokemonTypes;

type PokemonTypesList = Array<{
  name: string;
  img: string;
  bg: string;
}>;
