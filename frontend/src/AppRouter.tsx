import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';

/**
 * @see https://reactrouter.com/en/main/route/route
 */
const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Outlet />} errorElement={<p>Error 404</p>}>
      <Route path='' element={<p>Types</p>} />
      <Route path='/:type' element={<p>Cards</p>} />
      <Route path='/:type/:id' element={<p>Card</p>} />
      <Route path='/error404' element={<p>Error 404</p>} />
    </Route>,
  ),
);

export default AppRouter;
