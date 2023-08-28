import { Link } from 'react-router-dom';
import { CITIES } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { changeCity } from '../../store/app-process/app-process';
import { memo } from 'react';
import { getCity } from '../../store/app-process/selectors';

const CitiesNav = (): React.JSX.Element => {

  const dispatch = useAppDispatch();

  const currentCity = useAppSelector(getCity);

  return (
    <ul className="locations__list tabs__list">

      {CITIES.map((city) =>
        (
          <li key={city} className="locations__item"
            onClick={() => dispatch(changeCity(city))}
          >
            <Link to="/" className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`} >
              <span>{city}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default memo(CitiesNav);
