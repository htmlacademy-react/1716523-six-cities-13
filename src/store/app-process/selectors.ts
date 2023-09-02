import { NameSpace } from '../../const/const';
import { State } from '../../types';


export const getCity = (state: Pick<State, NameSpace.App>): string =>
  state[NameSpace.App].city;

export const getSortType = (state: Pick<State, NameSpace.App>): string =>
  state[NameSpace.App].sortType;

export const getErrorMessage = (state: Pick<State, NameSpace.App>): string | null =>
  state[NameSpace.App].error;
