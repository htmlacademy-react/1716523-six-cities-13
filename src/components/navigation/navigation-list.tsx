import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-action';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

function NavigationList(): React.JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to="/"
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">
            Oliver.conner@gmail.com
          </span>
          <span className="header__favorite-count">3</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
          to="/"
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default NavigationList;
