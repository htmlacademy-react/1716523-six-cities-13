import { OffersType } from '../../types';
import FavoritesCard from '../favorites-card/favorites-card';

function FavoritesList({ offers }: OffersType): React.JSX.Element {

  const favoriteCities = new Set<string>();
  offers.map(({ city: { name } }) => favoriteCities.add(name));

  return (
    <ul className="favorites__list">
      {Array.from(favoriteCities).map((cityName) => (
        <li key={cityName} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offers.filter((offer) => offer.city.name === cityName).map((offer) => (
              <FavoritesCard
                offer={offer}
                key={offer.id}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
