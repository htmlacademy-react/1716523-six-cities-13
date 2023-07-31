import MainPage from '../../pages/main-page/main-page';
import OffersPage from '../../pages/offer-page/offer-page';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, CARD_CLASS } from '../../const/const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import NotFound from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { DetailedOffer, Offer, Review } from '../../types/types';


type MainAppProps = {
  offers: Offer[];
  detailedOffers: DetailedOffer[];
  reviews: Review[];
};

function MainApp({offers, detailedOffers, reviews}: MainAppProps): React.JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainPage
                offers={offers}
                cardClass={CARD_CLASS.main}
              />
            }
          />
          <Route
            path={AppRoute.Offers}
            element={<OffersPage detailedOffers={detailedOffers} reviews={reviews} offers={offers} cardClass={CARD_CLASS.nearBy}/>}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <FavoritesPage
                  offers={offers}
                />
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
