import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const/const';


const DEFAULT_CITY = 'Paris';

type AppProcess = {
  city: string;
  sortType: string;
  error: string | null;
}

const initialState: AppProcess = {
  city: DEFAULT_CITY,
  sortType: 'Popular',
  error: null,
};

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
      state.sortType = initialState.sortType;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    sortOffers: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    clearError: (state, action: PayloadAction<{message: string | null; delay: number}>) => {
      state.error = action.payload.message;
    },
  },
});


export const {changeCity, setError, sortOffers, clearError} = appProcess.actions;
