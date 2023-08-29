import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import type { RootReducerType } from '../root-reducer';


export const redirect: Middleware<unknown, RootReducerType> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'REDIRECT_TO_ROUTE') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
