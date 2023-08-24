import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthData, DetailedOffer, Offer, Review, State, UserData } from '../types';
import { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute, FavoriteStatus } from '../const/const';
// import { setError} from './action';
import { dropToken, saveToken } from '../services/token';
// import { store } from '.';
import { redirectToRoute } from './action';
import { setUserData } from './user-process/user-process';


export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('offers/fetchOffers',
  async (_arg, { extra: api}) => {
    // dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(ApiRoute.GetOffers);
    // dispatch(setOffersDataLoadingStatus(false));
    // dispatch(loadOffers(data));
    return data;
  });

export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('LOAD_FAVORITES',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Favorites);
    // dispatch(loadFavorites(data));
    return data;
  }
);

export const changeFavoriteStatus = createAsyncThunk<DetailedOffer, DetailedOffer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('offers/changeFavoriteStatus',
  async ({offerId}, {extra: api}) => {
    const data = await api.post<DetailedOffer>(`${ApiRoute.Favorites}/${offerId}/${FavoriteStatus.AddToFavorite}`)
    return data;
  }
);

export const fetchDetailedOffer = createAsyncThunk<DetailedOffer, DetailedOffer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('offers/fetchDetailedOffer',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<DetailedOffer>(`${ApiRoute.GetOffers}/${offerId}`);
    // dispatch(loadDetailedOffer(data));
    return data;
  }
);

export const fetchNearbyOffers = createAsyncThunk<Offer[], DetailedOffer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('offers/fetchNearbyOffers',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<Offer[]>(`${ApiRoute.GetOffers}/${offerId}/nearby`);
    // dispatch(loadNearByOffers(data));
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Review[], DetailedOffer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('LOAD_REVIEWS',
  async (offerId, { extra: api}) => {
    const {data} = await api.get<Review[]>(`${ApiRoute.Comments}/${offerId}`);
    // dispatch(loadReviews(data));
    return data;
  }
);

// export const checkAuthAction = createAsyncThunk<void, undefined, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>('REQUIRE_AUTHORIZATION',
//   async (_arg, { dispatch, extra: api }) => {
//     try {
//       const {data} = await api.get<UserData>(ApiRoute.Login);
//       dispatch(requireAuthorization(AuthorizationStatus.Auth));
//       dispatch(setUserData(data));
//       dispatch(fetchFavoritesAction());
//     } catch {
//       dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
//     }

//   });

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('REQUIRE_AUTHORIZATION',
  async (_arg, {dispatch, extra: api }) => {
    const {data} = await api.get<UserData>(ApiRoute.Login);
    dispatch(setUserData(data));
    return data;
  });

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>(
    'LOGIN',
    async ({login: email, password}, {dispatch, extra: api}) => {
      const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});
      saveToken(data.token);
      dispatch(setUserData(data));
      dispatch(redirectToRoute(AppRoute.Root));
      dispatch(fetchFavoritesAction());
    }
  );


export const postUserComment = createAsyncThunk<Review, Partial<Review>, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'POST_COMMENT',
  async ({comment, id, rating}, { extra: api}) => {

    const {data} = await api.post<Review>(`${ApiRoute.Comments}/${id as string}`, {comment, rating});
    return data;
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'LOGOUT',
  async (_arg, { extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
  }
);

// export const clearErrorAction = createAsyncThunk(
//   'CLEAR_ERROR',
//   () => {
//     // setTimeout(
//     //   () => store.dispatch(setError(null)),
//     //   TIMEOUT_SHOW_ERROR,
//     // );
//   }
// );
