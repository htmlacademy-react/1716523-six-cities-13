import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, requireAuthorization, sortOffers } from './action';
import { offers } from '../mock/offers';
import { Offer } from '../types';
import { getAvailableOffers } from '../utils/utils';
import { AuthorizationStatus } from '../const/const';

type InitialState = {
  city: string;
  offers: Offer[];
  sortType: string;
  authorizationStatus: string | undefined;
}

const initialState: InitialState = {
  city: 'Amsterdam',
  offers: offers,
  sortType: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
