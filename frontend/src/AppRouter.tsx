import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';

import PokemonCards from './Pages/PokemonCards';
import PokemonTypes from './Pages/PokemonTypes';

/**
 * @see https://reactrouter.com/en/main/route/route
 */
const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Outlet />} errorElement={<p>Error 404</p>}>
      <Route path='' element={<PokemonTypes />} />
      <Route path='/:type' element={<PokemonCards />} />
      <Route path='/:type/:id' element={<p>Card</p>} />
      <Route path='/error404' element={<p>Error 404</p>} />
    </Route>,
  ),
);

export default AppRouter;
