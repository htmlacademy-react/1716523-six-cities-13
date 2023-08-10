import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, Offer, State } from '../types';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../const/const';
import { loadOffers, setOffersDataLoadingStatus } from './action';


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
