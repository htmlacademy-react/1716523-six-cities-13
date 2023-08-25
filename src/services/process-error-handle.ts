import { TIMEOUT_SHOW_ERROR } from '../const/const';
import { store } from '../store';
import { clearError, setError } from '../store/app-process/app-process';
// import { setError } from '../store/action';
// import { clearErrorAction } from '../store/api-action';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  setTimeout(() => {
    store.dispatch(clearError({message: null}));
  }, TIMEOUT_SHOW_ERROR);
};
