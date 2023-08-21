import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthData, DetailedOffer, Offer, Review, State, UserData, Comment } from '../types';
import { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const/const';
import { clearUserData, loadDetailedOffer, loadFavorites, loadNearByOffers, loadOffers, loadReviews, postComment, redirectToRoute, requireAuthorization, setError, setOffersDataLoadingStatus, setUserData } from './action';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('LOAD_OFFERS',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(ApiRoute.GetOffers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  });

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('LOAD_FAVORITES',
  async (_arg, {dispatch, extra: api }) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Favorites);
    dispatch(loadFavorites(data));
  }
);

export const fetchDetailedOffer = createAsyncThunk<void, DetailedOffer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('LOAD_DETAILED_OFFER',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<DetailedOffer>(`${ApiRoute.GetOffers}/${offerId}`);
    dispatch(loadDetailedOffer(data));
  }
);

export const fetchNearbyOffers = createAsyncThunk<void, DetailedOffer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('LOAD_NEARBY_OFFERS',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${ApiRoute.GetOffers}/${offerId}/nearby`);
    dispatch(loadNearByOffers(data));
  }
);

export const fetchReviews = createAsyncThunk<void, DetailedOffer['id'], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('LOAD_REVIEWS',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${ApiRoute.Comments}/${offerId}`);
    dispatch(loadReviews(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>('REQUIRE_AUTHORIZATION',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const {data} = await api.get<UserData>(ApiRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
      dispatch(fetchFavoritesAction());
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }

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
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
    dispatch(redirectToRoute(AppRoute.Root));
    dispatch(fetchFavoritesAction());
  }
);

export const postUserComment = createAsyncThunk<void, Comment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'POST_COMMENT',
  async ({comment, id, rating}, {dispatch, extra: api}) => {

    const {data} = await api.post<Comment>(`${ApiRoute.Comments}/${id as string}`, {comment, rating});
    dispatch(postComment(data));

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
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(clearUserData());
  }
);

export const clearErrorAction = createAsyncThunk(
  'CLEAR_ERROR',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  }
);
