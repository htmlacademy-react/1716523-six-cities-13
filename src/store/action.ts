import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('CHANGE_CITY', (value: string) => ({
  payload: value,
}));

export const sortOffers = createAction('SORT_OFFERS', (sortType: string) => ({
  payload: sortType
}));
