import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { DetailedOffer, Offer, Review } from '../../types';
import { NameSpace } from '../../const/const';
import { changeFavoriteStatus, fetchDetailedOffer, fetchFavoritesAction, fetchNearbyOffers, fetchOffersAction, fetchReviews, postUserComment } from '../api-action';

type CommentFormData = {
  comment: string | undefined;
  rating: number | undefined;
}

type DataProcess = {
  favorites: Offer[];
  detailedOffer: DetailedOffer | null;
  nearByOffers: Offer[];
  reviews: Review[];
  offers: Offer[];
  loadingStatus: boolean;
  isDetailedOfferLoading: boolean;
  isNearbyOffersLoading: boolean;
  isReviewsLoading: boolean;
  isFavoritesLoading: boolean;
  commentFormData: CommentFormData;
}

const initialState: DataProcess = {
  offers: [],
  favorites: [],
  detailedOffer: null,
  nearByOffers: [],
  reviews: [],
  loadingStatus: false,
  isDetailedOfferLoading: false,
  isNearbyOffersLoading: false,
  isReviewsLoading: false,
  isFavoritesLoading: false,
  commentFormData: {
    comment: '',
    rating: 0,
  }
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    toggleFavoriteStatus: (state, action: PayloadAction<{id: string; isFavorite: boolean}>) => {
      state.offers.forEach((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = action.payload.isFavorite;
        }
      });
      state.nearByOffers.forEach((offer) => {
        if (offer.id === action.payload.id) {
          offer.isFavorite = action.payload.isFavorite;
        }
      });
    },
    resetFavorites: (state) => {
      state.favorites = [];
    },
    setFormComment: (state, action: PayloadAction<string | undefined>) => {
      state.commentFormData.comment = action.payload;
    },
    setFormRating: (state, action: PayloadAction<number | undefined>) => {
      state.commentFormData.rating = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.loadingStatus = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.loadingStatus = false;
        state.offers = action.payload;
      })
      .addCase(fetchDetailedOffer.pending, (state) => {
        state.isDetailedOfferLoading = true;
      })
      .addCase(fetchDetailedOffer.fulfilled, (state, action) => {
        state.isDetailedOfferLoading = false;
        state.detailedOffer = action.payload;
      })
      .addCase(fetchDetailedOffer.rejected, (state) => {
        state.isDetailedOfferLoading = false;
      })
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.isNearbyOffersLoading = true;
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.isNearbyOffersLoading = false;
        state.nearByOffers = action.payload;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.isReviewsLoading = true;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isReviewsLoading = false;
      })
      .addCase(postUserComment.fulfilled, (state, action) => {
        state.reviews = [...state.reviews, action.payload];
        state.commentFormData.comment = '';
        state.commentFormData.rating = 0;
      })
      .addCase(postUserComment.rejected, (state, action) => {
        state.commentFormData.comment = action.meta.arg.comment;
        state.commentFormData.rating = action.meta.arg.rating;
      })
      .addCase(changeFavoriteStatus.fulfilled, (state, action) => {
        if (state.detailedOffer) {
          state.detailedOffer.isFavorite = action.payload.isFavorite;
        }
      });
  }
});

export const {toggleFavoriteStatus, resetFavorites, setFormComment, setFormRating} = dataProcess.actions;
