import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, requireAuthorization, setError, setOffersDataLoadingStatus, setUserData, sortOffers } from './action';
import { Offer, UserData } from '../types';
import { AuthorizationStatus } from '../const/const';

type InitialState = {
  city: string;
  offers: Offer[];
  sortType: string;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  loadingStatus: boolean;
  userData: UserData | null;
}

const initialState: InitialState = {
  city: 'Amsterdam',
  offers: [],
  sortType: 'Popular',
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  loadingStatus: false,
  userData: null,
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
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.loadingStatus = action.payload;
    });
});

export {reducer};
