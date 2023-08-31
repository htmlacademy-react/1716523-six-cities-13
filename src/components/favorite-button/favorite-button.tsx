
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { changeFavoriteStatus } from '../../store/api-action';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getFavoritesLoadingStatus, getFavoritesPostingStatus } from '../../store/data-process/selectors';

type FavoriteButtonProps = {
  id: string;
  isFavorite: boolean;
  bookMarkClass: string;
  bookMarkSize: {
    width: number;
    height: number;
  };
}

export const FavoriteButton = ({id, isFavorite, bookMarkClass, bookMarkSize}: FavoriteButtonProps): React.JSX.Element => {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const isFavoritesLoading = useAppSelector(getFavoritesLoadingStatus);

  const isFavoritesPosting = useAppSelector(getFavoritesPostingStatus);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const isFavoriteButtonDisabled = () => {
    if (isFavoritesLoading || isFavoritesPosting) {
      return true;
    } else {
      return false;
    }
  };

  const handleFavoriteButtonClick = () => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
    } else {
      dispatch(changeFavoriteStatus({id, isFavorite: !isFavorite}));
    }
  };

  return (
    <button
      className={`${bookMarkClass}__bookmark-button ${isFavorite ? `${bookMarkClass}__bookmark-button--active` : '' } button`}
      type="button" onClick={handleFavoriteButtonClick} disabled={isFavoriteButtonDisabled()}
    >
      <svg
        className={`${bookMarkClass}__bookmark-icon`}
        width={bookMarkSize.width}
        height={bookMarkSize.height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};
