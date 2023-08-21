import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';

function NavigationList(): React.JSX.Element {

  const dispatch = useAppDispatch();
  const {email} = useAppSelector((state) => state.userData);
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const favoritesQuantity = useAppSelector((state) => state.favorites.length);

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to="/favorites"
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">
            {email}
          </span>
          <span className="header__favorite-count">{favoritesQuantity}</span>
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

export default NavigationList;
