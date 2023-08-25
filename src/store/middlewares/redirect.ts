import { Middleware, PayloadAction } from '@reduxjs/toolkit';
// import { reducer } from '../reducer';
import browserHistory from '../../browser-history';
import type { RootReducerType } from '../root-reducer';


// type Reducer = ReturnType<RootReducerType>;

export const redirect: Middleware<unknown, RootReducerType> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'REDIRECT_TO_ROUTE') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
