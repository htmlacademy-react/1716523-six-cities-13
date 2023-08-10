import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types';

export const changeCity = createAction('CHANGE_CITY', (value: string) => ({
  payload: value,
}));

export const sortOffers = createAction('SORT_OFFERS', (sortType: string) => ({
  payload: sortType
}));

export const loadOffers = createAction<Offer[]>('LOAD_OFFERS');

export const requireAuthorization = createAction('REQUIRE_AUTHORIZATION');

