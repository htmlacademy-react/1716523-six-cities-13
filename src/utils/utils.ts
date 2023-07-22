import { RatingObj } from '../types/types';

export function ratingCount(rating: number):RatingObj {
  return {
    width: `${(Math.round(rating) * 20).toString()}%`
  };
}
