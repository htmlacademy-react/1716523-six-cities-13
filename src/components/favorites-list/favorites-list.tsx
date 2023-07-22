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


  // return (
  //   <ul className="favorites__list">
  //     <li className="favorites__locations-items">
  //       <div className="favorites__locations locations locations--current">
  //         <div className="locations__item">
  //           <a className="locations__item-link" href="#">
  //             <span>Amsterdam</span>
  //           </a>
  //         </div>
  //       </div>
  //       <div className="favorites__places">
  //         <article className="favorites__card place-card">
  //           <div className="place-card__mark">
  //             <span>Premium</span>
  //           </div>
  //           <div className="favorites__image-wrapper place-card__image-wrapper">
  //             <a href="#">
  //               <img
  //                 className="place-card__image"
  //                 src="img/apartment-small-03.jpg"
  //                 width={150}
  //                 height={110}
  //                 alt="Place image"
  //               />
  //             </a>
  //           </div>
  //           <div className="favorites__card-info place-card__info">
  //             <div className="place-card__price-wrapper">
  //               <div className="place-card__price">
  //                 <b className="place-card__price-value">€180</b>
  //                 <span className="place-card__price-text">
  //                   /&nbsp;night
  //                 </span>
  //               </div>
  //               <button
  //                 className="place-card__bookmark-button place-card__bookmark-button--active button"
  //                 type="button"
  //               >
  //                 <svg
  //                   className="place-card__bookmark-icon"
  //                   width={18}
  //                   height={19}
  //                 >
  //                   <use xlinkHref="#icon-bookmark" />
  //                 </svg>
  //                 <span className="visually-hidden">In bookmarks</span>
  //               </button>
  //             </div>
  //             <div className="place-card__rating rating">
  //               <div className="place-card__stars rating__stars">
  //                 <span style={{ width: '100%' }} />
  //                 <span className="visually-hidden">Rating</span>
  //               </div>
  //             </div>
  //             <h2 className="place-card__name">
  //               <a href="#">Nice, cozy, warm big bed apartment</a>
  //             </h2>
  //             <p className="place-card__type">Apartment</p>
  //           </div>
  //         </article>
  //         <article className="favorites__card place-card">
  //           <div className="favorites__image-wrapper place-card__image-wrapper">
  //             <a href="#">
  //               <img
  //                 className="place-card__image"
  //                 src="img/room-small.jpg"
  //                 width={150}
  //                 height={110}
  //                 alt="Place image"
  //               />
  //             </a>
  //           </div>
  //           <div className="favorites__card-info place-card__info">
  //             <div className="place-card__price-wrapper">
  //               <div className="place-card__price">
  //                 <b className="place-card__price-value">€80</b>
  //                 <span className="place-card__price-text">
  //                   /&nbsp;night
  //                 </span>
  //               </div>
  //               <button
  //                 className="place-card__bookmark-button place-card__bookmark-button--active button"
  //                 type="button"
  //               >
  //                 <svg
  //                   className="place-card__bookmark-icon"
  //                   width={18}
  //                   height={19}
  //                 >
  //                   <use xlinkHref="#icon-bookmark" />
  //                 </svg>
  //                 <span className="visually-hidden">In bookmarks</span>
  //               </button>
  //             </div>
  //             <div className="place-card__rating rating">
  //               <div className="place-card__stars rating__stars">
  //                 <span style={{ width: '80%' }} />
  //                 <span className="visually-hidden">Rating</span>
  //               </div>
  //             </div>
  //             <h2 className="place-card__name">
  //               <a href="#">Wood and stone place</a>
  //             </h2>
  //             <p className="place-card__type">Private room</p>
  //           </div>
  //         </article>
  //       </div>
  //     </li>
  //   </ul>
  // );
}

export default FavoritesList;
