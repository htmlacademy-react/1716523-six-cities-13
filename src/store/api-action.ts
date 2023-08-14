import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AuthData, Offer, State, UserData } from '../types';
import { AxiosInstance } from 'axios';
import { ApiRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const/const';
import { loadOffers, redirectToRoute, requireAuthorization, setError, setOffersDataLoadingStatus, setUserData } from './action';
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
    const {data: {token}} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
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
