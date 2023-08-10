import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './components/main-app/app';
import { detailedOffers } from './mock/detailed-offers';
import { reviews } from './mock/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import { fetchOffersAction } from './store/api-action';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainApp
        detailedOffers={detailedOffers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
