import React from 'react';
import ReactDOM from 'react-dom/client';

import MainApp from './components/main-app/app';
import {RentalOffersCount} from './const/const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MainApp
      count = {RentalOffersCount.count}
    />
  </React.StrictMode>
);
