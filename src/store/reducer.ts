import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, sortOffers } from './action';
import { offers } from '../mock/offers';
import { Offer } from '../types';
import { getAvailableOffers } from '../utils/utils';

type InitialState = {
  city: string;
  offers: Offer[];
  sortType: string;
}

const initialState: InitialState = {
  city: 'Amsterdam',
  offers: offers,
  sortType: 'Popular'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.offers = getAvailableOffers(offers, state.city);
      state.sortType = initialState.sortType;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
