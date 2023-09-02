import { NameSpace } from '../../const/const';
import { Offer } from '../../types';
import { getCommentPostingStatus, getDetailedOffer, getDetailedOfferLoadingStatus, getFavorites, getFavoritesLoadingStatus, getFavoritesPostingStatus, getFormComment, getFormRating, getLoadingStatus, getNearByOffers, getNearbyOffersLoadingStatus, getOffers, getReviews, getReviewsLoadingStatus } from './selectors';

const mockOffers: Offer[] = [
  {
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
  },
];

describe('data process selectors', () => {
  const state = {
    [NameSpace.Data]: {
      offers: mockOffers,
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
    }
  };
  it('should return offers array from state', () => {
    const { offers } = state[NameSpace.Data];
    const result = getOffers(state);
    expect(result).toEqual(offers);
  });
  it('should return loading status from state', () => {
    const { loadingStatus } = state[NameSpace.Data];
    const result = getLoadingStatus(state);
    expect(result).toBe(loadingStatus);
  });
  it('should return detailed offer from state', () => {
    const { detailedOffer } = state[NameSpace.Data];
    const result = getDetailedOffer(state);
    expect(result).toEqual(detailedOffer);
  });
  it('should return nearby offers from state', () => {
    const { nearByOffers } = state[NameSpace.Data];
    const result = getNearByOffers(state);
    expect(result).toEqual(nearByOffers);
  });
  it('should return reviews from state', () => {
    const { reviews } = state[NameSpace.Data];
    const result = getReviews(state);
    expect(result).toEqual(reviews);
  });
  it('should return favorites from state', () => {
    const { favorites } = state[NameSpace.Data];
    const result = getFavorites(state);
    expect(result).toEqual(favorites);
  });
  it('should return favorites loading status from state', () => {
    const { isFavoritesLoading } = state[NameSpace.Data];
    const result = getFavoritesLoadingStatus(state);
    expect(result).toEqual(isFavoritesLoading);
  });
  it('should return favorites posting status from state', () => {
    const { isFavoritesPosting } = state[NameSpace.Data];
    const result = getFavoritesPostingStatus(state);
    expect(result).toEqual(isFavoritesPosting);
  });
  it('should return detailed offer loadaing status from state', () => {
    const { isDetailedOfferLoading } = state[NameSpace.Data];
    const result = getDetailedOfferLoadingStatus(state);
    expect(result).toEqual(isDetailedOfferLoading);
  });
  it('should return reviews loading status from state', () => {
    const { isReviewsLoading } = state[NameSpace.Data];
    const result = getReviewsLoadingStatus(state);
    expect(result).toEqual(isReviewsLoading);
  });
  it('should return nearby offers loading status from state', () => {
    const { isNearbyOffersLoading } = state[NameSpace.Data];
    const result = getNearbyOffersLoadingStatus(state);
    expect(result).toEqual(isNearbyOffersLoading);
  });
  it('should return form comment from state', () => {
    const { commentFormData } = state[NameSpace.Data];
    const result = getFormComment(state);
    expect(result).toEqual(commentFormData.comment);
  });
  it('should return form raiting from state', () => {
    const { commentFormData } = state[NameSpace.Data];
    const result = getFormRating(state);
    expect(result).toEqual(commentFormData.rating);
  });
  it('should return form comments posting status from state', () => {
    const { isCommentPosting } = state[NameSpace.Data];
    const result = getCommentPostingStatus(state);
    expect(result).toEqual(isCommentPosting);
  });
});
