import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthData, DetailedOffer, HandleButtonFavoriteClickProps, Offer, Review, State, UserData } from '../types';
import { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute } from '../const/const';
import { dropToken, saveToken } from '../services/token';
import { redirectToRoute } from './action';
import { setUserData } from './user-process/user-process';
import { resetFavorites, toggleFavoriteStatus } from './data-process/data-process';


export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('offers/fetchOffers',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoute.GetOffers);
    return data;
  });

export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('LOAD_FAVORITES',
  async (_arg, { extra: api }) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Favorites);
    return data;
  }
);

export const changeFavoriteStatus = createAsyncThunk<DetailedOffer, HandleButtonFavoriteClickProps, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('offers/changeFavoriteStatus',
  async ({id, isFavorite}, {dispatch, extra: api}) => {
    const {data} = await api.post<DetailedOffer>(`${ApiRoute.Favorites}/${id}/${isFavorite ? 1 : 0}`);
    dispatch(toggleFavoriteStatus({id, isFavorite}));
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
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('REQUIRE_AUTHORIZATION',
  async (_arg, {dispatch, extra: api }) => {
    const {data} = await api.get<UserData>(ApiRoute.Login);
    dispatch(setUserData(data));
    dispatch(fetchFavoritesAction());
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
      dispatch(fetchOffersAction());
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
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(fetchOffersAction());
    dispatch(resetFavorites());
  }
);

