import { createReducer } from '@reduxjs/toolkit';
// import { offers } from '../mock/offers';
import { changeCity } from './action';

const initialState = {
  city: '',
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {reducer};
