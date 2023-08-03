import { CITIES } from '../../const/const';

export function CitiesNav(): React.JSX.Element {
  return (
    <ul className="locations__list tabs__list">

      {CITIES.map((city) =>
        (
          <li key={city} className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>{city}</span>
            </a>
          </li>
        ))}
      {/* <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>Paris</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>Cologne</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>Brussels</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item tabs__item--active">
          <span>Amsterdam</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>Hamburg</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>Dusseldorf</span>
        </a>
      </li> */}
    </ul>
  );
}

