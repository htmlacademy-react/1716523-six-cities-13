import { createReducer } from '@reduxjs/toolkit';
// import { offers } from '../mock/offers';
import { changeCity } from './action';
import { offers } from '../mock/offers';
import { Offer } from '../types';

type InitialState = {
  city: string;
  offers: Offer[];
}

function getAvailableOffers(allOffers: Offer[], currentCity: string) {
  return allOffers.filter((offer) => offer.city.name === currentCity);
}

const initialState: InitialState = {
  city: 'Amsterdam',
  offers: getAvailableOffers(offers, 'Amsterdam'),
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.offers = getAvailableOffers(offers, state.city);
    });
});

export {reducer};
