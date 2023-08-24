import { AuthorizationStatus, NameSpace } from '../../const/const';
import { State, UserData } from '../../types';


export const getUserData = (state: State): UserData =>
  state[NameSpace.User].userData;

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
