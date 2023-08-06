import { Link } from 'react-router-dom';
import { CITIES } from '../../const/const';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { changeCity } from '../../store/action';

export function CitiesNav(): React.JSX.Element {

  const dispatch = useAppDispatch();

  const currentCity = useAppSelector((state) => state.city);

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
}

