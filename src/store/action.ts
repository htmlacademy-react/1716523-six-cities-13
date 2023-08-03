import { createAction } from '@reduxjs/toolkit';

export const changeCity = createAction('CHANGE_CITY', (value: string) => ({
  payload: value,
}));
