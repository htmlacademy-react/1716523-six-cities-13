import React from 'react';
import ReactDOM from 'react-dom/client';
import MainApp from './components/main-app/app';
// import { detailedOffers } from './mock/detailed-offers';
// import { reviews } from './mock/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './store/api-action';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <MainApp />
    </Provider>
  </React.StrictMode>
);
