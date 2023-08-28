import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const/const';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { UserData } from '../../types';

type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData;
}

const initialUserData: UserData = {
  name: '',
  email: '',
  token: '',
  avatarUrl: '',
  isPro: false,
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: initialUserData,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.userData = initialState.userData;
      });
  },
});

export const { setUserData } = userProcess.actions;
