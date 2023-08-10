import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, sortOffers } from './action';
import { Offer } from '../types';
import { AuthorizationStatus } from '../const/const';

type InitialState = {
  city: string;
  offers: Offer[];
  sortType: string;
  authorizationStatus: string | undefined;
  error: string | null;
  loadingStatus: boolean;
}

const initialState: InitialState = {
  city: 'Amsterdam',
  offers: [],
  sortType: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  loadingStatus: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.loadingStatus = action.payload;
    });
});

export {reducer};
