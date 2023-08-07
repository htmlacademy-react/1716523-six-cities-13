import dayjs from 'dayjs';

import { Offer, RatingObj } from '../types/types';

export function ratingCount(rating: number):RatingObj {
  return {
    width: `${(Math.round(rating) * 20).toString()}%`
  };
}

export function dateFomat(date: string) {
  return dayjs(date).format('MMMM YYYY');
}

export function getAvailableOffers(allOffers: Offer[], currentCity: string) {
  return allOffers.filter((offer) => offer.city.name === currentCity);
}

export function getSortedOffers(availableOffers: Offer[], sortType: string) {
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
