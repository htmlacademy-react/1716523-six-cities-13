import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { memo } from 'react';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/selectors';
import { getFavorites } from '../../store/data-process/selectors';

function NavigationList(): React.JSX.Element {

  const dispatch = useAppDispatch();
  const {email} = useAppSelector(getUserData);
  const authStatus = useAppSelector(getAuthorizationStatus);
  const favoritesQuantity = useAppSelector(getFavorites);
  const userData = useAppSelector(getUserData);

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to="/favorites"
        >
          <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${userData.avatarUrl})`}}></div>
          <span className="header__user-name user__name">
            {email}
          </span>
          <span className="header__favorite-count">{favoritesQuantity.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        {authStatus === 'AUTH' ?
          <Link
            className="header__nav-link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
            to="/"
          >
            <span className="header__signout">Sign out</span>
          </Link> :
          <Link
            className="header__nav-link"
            to="/login"
          >
            <span className="header__signout">Sign in</span>
          </Link>}
      </li>
    </ul>
  );
}

export default memo(NavigationList);
