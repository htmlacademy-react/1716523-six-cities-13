// import { FavoriteStatus } from "../../const/const"
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { changeFavoriteStatus, fetchFavoritesAction } from '../../store/api-action';
// import { toggleFavoriteStatus } from '../../store/data-process/data-process';
// import { getDetailedOffer } from '../../store/data-process/selectors';
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

  // const offer = useAppSelector(getDetailedOffer);

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
    // dispatch(toggleFavoriteStatus(id, isFavorite ? 1 : 0));
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
