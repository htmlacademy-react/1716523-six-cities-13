
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { changeFavoriteStatus, fetchFavoritesAction } from '../../store/api-action';
import { AppRoute } from '../../const/const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

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

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleFavoriteButtonClick = () => {
    if (authorizationStatus !== 'AUTH') {
      navigate(AppRoute.Login);
    } else {
      dispatch(changeFavoriteStatus({id, isFavorite: !isFavorite}));
      dispatch(fetchFavoritesAction());
    }

  };
  return (
    <button
      className={`${bookMarkClass}__bookmark-button ${isFavorite ? `${bookMarkClass}__bookmark-button--active` : '' } button`}
      type="button" onClick={handleFavoriteButtonClick}
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
