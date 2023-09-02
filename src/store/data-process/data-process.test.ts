
import { Offer } from '../../types';
import { fetchOffersAction } from '../api-action';
import { dataProcess, resetFavorites, setFormComment, setFormRating, toggleFavoriteStatus } from './data-process';

const mockOffer: Offer = {
  id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
  title: 'Beautiful & luxurious studio at great location',
  type: 'apartment',
  price: 120,
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }},
  location: {
    latitude: 52.35514938496378,
    longitude: 4.673877537499948,
    zoom: 8
  },
  isFavorite: false,
  isPremium: false,
  rating: 4,
  previewImage: 'https://url-to-image/image.png'
};

describe('data process slice', () => {
  const expectedState = {
    offers: [mockOffer],
    favorites: [],
    detailedOffer: null,
    nearByOffers: [],
    reviews: [],
    loadingStatus: false,
    isDetailedOfferLoading: false,
    isNearbyOffersLoading: false,
    isReviewsLoading: false,
    isFavoritesLoading: false,
    isFavoritesPosting: false,
    commentFormData: {
      comment: '',
      rating: 0,
    },
    isCommentPosting: false,
  };
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = dataProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
  it('should change offer isFavorite in state', () => {
    const result = dataProcess.reducer(expectedState, toggleFavoriteStatus({id: '6af6f711-c28d-4121-82cd-e0b462a27f00', isFavorite: false}));
    expect(result.offers[0]).toStrictEqual(expectedState.offers[0]);
  });
  it('should make favorites array in state empty', () => {
    const result = dataProcess.reducer(expectedState, resetFavorites);
    expect(result.favorites).toEqual([]);
  });
  it('should set comment in state', () => {
    const result = dataProcess.reducer(expectedState, setFormComment(''));
    expect(result.commentFormData.comment).toBe(expectedState.commentFormData.comment);
  });
  it('should set rating in state', () => {
    const result = dataProcess.reducer(expectedState, setFormRating(0));
    expect(result.commentFormData.rating).toBe(expectedState.commentFormData.rating);
  });
  it('should fetch offers action and set loading status', () => {
    const result = dataProcess.reducer(expectedState, fetchOffersAction.pending);
    expect(result.loadingStatus).toEqual(!expectedState.loadingStatus);
  });
});
