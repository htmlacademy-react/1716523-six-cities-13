import MainPage from '../../pages/main-page/main-page';
import OffersPage from '../../pages/offers-page/offers-page';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFound from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';


type MainAppProps = {
  count: number;
}

function MainApp({ count }: MainAppProps): React.JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage count={count} />}
          />
          <Route
            path={AppRoute.Offers}
            element={<OffersPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />

        </Routes>

      </BrowserRouter>
    </HelmetProvider>
  );

}

export default MainApp;
