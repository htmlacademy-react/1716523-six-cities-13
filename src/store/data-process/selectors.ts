import { NameSpace } from '../../const/const';
import { DetailedOffer, Offer, Review, State } from '../../types';


export const getOffers = (state: State): Offer[] =>
  state[NameSpace.Data].offers;

export const getLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].loadingStatus;

export const getDetailedOffer = (state: State): DetailedOffer | null =>
  state[NameSpace.Data].detailedOffer;

export const getNearByOffers = (state: State): Offer[] =>
  state[NameSpace.Data].nearByOffers;

export const getReviews = (state: State): Review[] =>
  state[NameSpace.Data].reviews;

export const getFavorites = (state: State): Offer[] =>
  state[NameSpace.Data].favorites;

export const getFavoritesLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].isFavoritesLoading;

export const getDetailedOfferLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].isDetailedOfferLoading;

export const getReviewsLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].isReviewsLoading;

export const getNearbyOffersLoadingStatus = (state: State): boolean =>
  state[NameSpace.Data].isNearbyOffersLoading;
