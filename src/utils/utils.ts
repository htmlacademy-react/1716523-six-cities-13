import dayjs from 'dayjs';

import { Offer, RatingObj, Review } from '../types/types';
import { MAX_REVIEWS_COUNT } from '../const/const';

export const getRatingCount = (rating: number):RatingObj => ({ width: `${(Math.round(rating) * 20).toString()}%` });

export const getFormattedDate = (date: string) => dayjs(date).format('MMMM YYYY');

export const getAvailableOffers = (allOffers: Offer[], currentCity: string) => allOffers.filter((offer) => offer.city.name === currentCity);

export const getSortedOffers = (availableOffers: Offer[], sortType: string) => {
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
};

export const getSortedReviews = (allReviews: Review[]): Review[] => (
  [...allReviews].sort((a: Review, b: Review) => new Date(b.date).valueOf() - new Date(a.date).valueOf()).slice(0, MAX_REVIEWS_COUNT)
);
