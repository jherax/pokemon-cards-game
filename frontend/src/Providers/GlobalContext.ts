import {createContext} from 'react';

const GlobalContext = createContext<AppGlobalContext>(
  null as unknown as AppGlobalContext,
);

export default GlobalContext;
