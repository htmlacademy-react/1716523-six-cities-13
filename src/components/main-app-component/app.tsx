import MainPage from '../../pages/main-page/main-page';
import OffersPage from '../../pages/offers-page/offers-page';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFound from '../../pages/not-found-page/not-found-page';


type MainAppProps = {
  count: number;
}

function MainApp({ count }: MainAppProps): JSX.Element {
  return (
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
          element={<FavoritesPage />}
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
  );

}

export default MainApp;
