import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';

import NavigationBar from './Components/Navigation/NavigationBar';
import Error404 from './Pages/Error404';
import PokemonCard from './Pages/PokemonCard';
import PokemonCardsName from './Pages/PokemonCardsName';
import PokemonCardsType from './Pages/PokemonCardsType';
import PokemonTypes from './Pages/PokemonTypes';

/**
 * @see https://www.dhiwise.com/post/the-power-of-createbrowserrouter-optimizing-your-react-app
 */
function AppLayout() {
  return (
    <div>
      <NavigationBar />
      <Outlet /> {/* Nested routes render here */}
    </div>
  );
}

/**
 * @see https://reactrouter.com/en/main/route/route
 */
const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<AppLayout />} errorElement={<Error404 />}>
      <Route path='' element={<PokemonTypes />} />
      <Route path='/name/:name' element={<PokemonCardsName />} />
      <Route path='/:type' element={<PokemonCardsType />} />
      <Route path='/:type/:id' element={<PokemonCard />} />
      <Route path='/error404' element={<Error404 />} />
    </Route>,
  ),
);

export default AppRouter;
