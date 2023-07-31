import React from 'react';
import ReactDOM from 'react-dom/client';

import MainApp from './components/main-app/app';
import { offers } from './mock/offers';
import { detailedOffers } from './mock/detailed-offers';
import { reviews } from './mock/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MainApp
      offers={offers}
      detailedOffers={detailedOffers}
      reviews={reviews}
    />
  </React.StrictMode>
);
