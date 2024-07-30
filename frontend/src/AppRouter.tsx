import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';

import Error404 from './Pages/Error404';
import PokemonCard from './Pages/PokemonCard';
import PokemonCards from './Pages/PokemonCards';
import PokemonTypes from './Pages/PokemonTypes';

/**
 * @see https://reactrouter.com/en/main/route/route
 */
const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Outlet />} errorElement={<Error404 />}>
      <Route path='' element={<PokemonTypes />} />
      <Route path='/:type' element={<PokemonCards />} />
      <Route path='/:type/:id' element={<PokemonCard />} />
      <Route path='/error404' element={<Error404 />} />
    </Route>,
  ),
);

export default AppRouter;
