import dayjs from 'dayjs';

import { RatingObj } from '../types/types';

export function ratingCount(rating: number):RatingObj {
  return {
    width: `${(Math.round(rating) * 20).toString()}%`
  };
}

export function dateFomat(date: string) {
  return dayjs(date).format('MMMM YYYY');
}
