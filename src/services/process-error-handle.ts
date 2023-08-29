import { TIMEOUT_SHOW_ERROR } from '../const/const';
import { store } from '../store';
import { clearError, setError } from '../store/app-process/app-process';


export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  setTimeout(() => {
    store.dispatch(clearError({
      message: null,
      delay: 0
    }));
  }, TIMEOUT_SHOW_ERROR);
};
