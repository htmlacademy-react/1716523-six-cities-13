// import { createReducer } from '@reduxjs/toolkit';
// import { setError } from './action';
// import { DetailedOffer, Offer, Review, UserData } from '../types';
// // import { AuthorizationStatus } from '../const/const';

// type InitialState = {
//   city: string;
//   offers: Offer[];
//   sortType: string;
//   // authorizationStatus: AuthorizationStatus;
//   error: string | null;
//   loadingStatus: boolean;
//   userData: UserData;
//   favorites: Offer[];
//   detailedOffer: DetailedOffer | null;
//   nearByOffers: Offer[];
//   reviews: Review[];
// }

// const initialUserData: UserData = {
//   name: '',
//   email: '',
//   token: '',
//   avatarUrl: '',
//   isPro: false,
// };

// const initialState: InitialState = {
//   city: 'Paris',
//   offers: [],
//   sortType: 'Popular',
//   // authorizationStatus: AuthorizationStatus.Unknown,
//   error: null,
//   loadingStatus: false,
//   userData: initialUserData,
//   favorites: [],
//   detailedOffer: null,
//   nearByOffers: [],
//   reviews: [],
// };

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(changeCity, (state, action) => {
//       state.city = action.payload;
//       state.sortType = initialState.sortType;
//     })
//     .addCase(sortOffers, (state, action) => {
//       state.sortType = action.payload;
//     })
//     .addCase(loadOffers, (state, action) => {
//       state.offers = action.payload;
//     })
//     .addCase(loadFavorites, (state, action) => {
//       state.favorites = action.payload;
//     })
//     // .addCase(requireAuthorization, (state, action) => {
//     //   state.authorizationStatus = action.payload;
//     // })
//     .addCase(setUserData, (state, action) => {
//       state.userData = action.payload;
//     })
//     .addCase(setError, (state, action) => {
//       state.error = action.payload;
//     })
//     .addCase(setOffersDataLoadingStatus, (state, action) => {
//       state.loadingStatus = action.payload;
//     })
//     .addCase(clearUserData, (state) => {
//       state.userData = initialUserData;
//     })
//     .addCase(loadDetailedOffer, (state, action) => {
//       state.detailedOffer = action.payload;
//     })
//     .addCase(loadNearByOffers, (state, action) => {
//       state.nearByOffers = action.payload;
//     })
//     .addCase(loadReviews, (state, action) => {
//       state.reviews = action.payload;
//     })
//     .addCase(postComment, (state, action) => {
//       state.reviews = [...state.reviews, action.payload];
//     });
// });

// export {reducer};
