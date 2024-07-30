import {useMemo, useState} from 'react';
import {RouterProvider} from 'react-router-dom';

import AppRouter from './AppRouter';
import GlobalContext from './Providers/GlobalContext';
import {initialGlobalState} from './Providers/initialGlobalState';

function AppContext() {
  const [globalState, setGlobalState] =
    useState<GobalState>(initialGlobalState);

  /**
   * @see https://www.freecodecamp.org/news/how-to-work-with-usememo-in-react/
   */
  const globalContext = useMemo<AppGlobalContext>(() => {
    return {
      globalState,
      setGlobalState: (state: Partial<GobalState>) => {
        setGlobalState({...globalState, ...state});
      },
    };
  }, [globalState]);

  return (
    <GlobalContext.Provider value={globalContext}>
      <RouterProvider router={AppRouter} />
    </GlobalContext.Provider>
  );
}

export default AppContext;
