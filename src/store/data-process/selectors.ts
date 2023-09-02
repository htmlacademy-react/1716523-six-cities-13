import { NameSpace } from '../../const/const';
import { DetailedOffer, Offer, Review, State } from '../../types';


export const getOffers = (state: Pick <State, NameSpace.Data>): Offer[] =>
  state[NameSpace.Data].offers;

export const getLoadingStatus = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].loadingStatus;

export const getDetailedOffer = (state: Pick <State, NameSpace.Data>): DetailedOffer | null =>
  state[NameSpace.Data].detailedOffer;

export const getNearByOffers = (state: Pick <State, NameSpace.Data>): Offer[] =>
  state[NameSpace.Data].nearByOffers;

export const getReviews = (state: Pick <State, NameSpace.Data>): Review[] =>
  state[NameSpace.Data].reviews;

export const getFavorites = (state: Pick <State, NameSpace.Data>): Offer[] =>
  state[NameSpace.Data].favorites;

export const getFavoritesLoadingStatus = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isFavoritesLoading;

export const getFavoritesPostingStatus = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isFavoritesPosting;

export const getDetailedOfferLoadingStatus = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isDetailedOfferLoading;

export const getReviewsLoadingStatus = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isReviewsLoading;

export const getNearbyOffersLoadingStatus = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isNearbyOffersLoading;

export const getFormComment = (state: Pick <State, NameSpace.Data>): string | undefined =>
  state[NameSpace.Data].commentFormData.comment;

export const getFormRating = (state: Pick <State, NameSpace.Data>): number | undefined =>
  state[NameSpace.Data].commentFormData.rating;

export const getCommentPostingStatus = (state: Pick <State, NameSpace.Data>): boolean =>
  state[NameSpace.Data].isCommentPosting;

