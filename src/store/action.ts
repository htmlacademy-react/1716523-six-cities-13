import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types';
import { AppRoute, AuthorizationStatus } from '../const/const';

export const changeCity = createAction('CHANGE_CITY', (value: string) => ({
  payload: value,
}));

export const sortOffers = createAction('SORT_OFFERS', (sortType: string) => ({
  payload: sortType
}));

export const loadOffers = createAction<Offer[]>('LOAD_OFFERS');

export const requireAuthorization = createAction<AuthorizationStatus>('REQUIRE_AUTHORIZATION');

export const setError = createAction<string | null>('SET_ERROR');

export const setOffersDataLoadingStatus = createAction<boolean>('SET_OFFERS_DATA_LOADING');

export const login = createAction<void>('LOGIN');

export const logout = createAction<void>('LOGOUT');

export const redirectToRoute = createAction<AppRoute>('REDIRECT_TO_ROUTE');

