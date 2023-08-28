import MainPage from '../../pages/main-page/main-page';
import OffersPage from '../../pages/offer-page/offer-page';
import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, CARD_CLASS, OFFERS_LIST_CLASS } from '../../const/const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFound from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import LoadingScreen from '../../pages/loading/loading';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getLoadingStatus, getOffers } from '../../store/data-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';


function MainApp(): React.JSX.Element {

  const offers = useAppSelector(getOffers);
  const isOffersDataLoading = useAppSelector(getLoadingStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }
  return (

    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainPage
                offers={offers}
                cardClass={CARD_CLASS.main}
                offerListClass={OFFERS_LIST_CLASS.mainPage}
              />
            }
          />
          <Route
            path={AppRoute.Offers}
            element={
              <OffersPage
                cardClass={CARD_CLASS.nearBy}
                offerListClass={OFFERS_LIST_CLASS.offerPage}
              />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={
              <LoginPage />
            }
          />
          <Route
            path='*'
            element={<NotFound />}
          />

        </Routes>

      </ HistoryRouter>
    </HelmetProvider>
  );

}

export default MainApp;
