import { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';

const MainPage = lazy(() => import('./components/MainPage/MainPage'));
const Page404 = lazy(() => import('./components/Page404/Page404'));

const generateRoute = (route) => (
  <Route
    key={route.path}
    path={route.path}
    element={route.element
      ? (
        <Suspense fallback={<div />}>
          {route.element}
        </Suspense>
      )
      : (<Outlet />)}
  >
    {route.child && generateRoute(route.child)}
  </Route>
);

const routes = [
  {
    path: '404',
    element: <Page404 />,
  },
];

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={(
              <Suspense fallback={<div />}>
                <MainPage />
              </Suspense>
            )}
          />
          {routes.map((route) => (
            generateRoute(route)
          ))}
          <Route path="*" element={<Navigate replace to="404" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
