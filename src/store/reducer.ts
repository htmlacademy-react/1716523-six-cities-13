import { createReducer } from '@reduxjs/toolkit';
import { changeCity, sortOffers } from './action';
import { offers } from '../mock/offers';
import { Offer } from '../types';

type InitialState = {
  city: string;
  offers: Offer[];
  sortType: string;
}

function getAvailableOffers(allOffers: Offer[], currentCity: string) {
  return allOffers.filter((offer) => offer.city.name === currentCity);
}

function getSortedOffers(availableOffers: Offer[], sortType: string) {
  switch(sortType) {
    case 'Popular':
      return availableOffers;
    case 'Price: low to high':
      return availableOffers.sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return availableOffers.sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return availableOffers.sort((a, b) => b.rating - a.rating);
    default:
      return availableOffers;
  }
}

const initialState: InitialState = {
  city: 'Amsterdam',
  offers: getAvailableOffers(offers, 'Amsterdam'),
  sortType: 'Popular'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.offers = getAvailableOffers(offers, state.city);
      // state.sortType = initialState.sortType;
    })
    .addCase(sortOffers, (state, action) => {
      state.offers = getSortedOffers(state.offers, action.payload);
      state.sortType = action.payload;
    });
});

export {reducer};
