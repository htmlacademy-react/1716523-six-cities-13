
import { Link } from 'react-router-dom';
import { Offer } from '../../types/types';
import { ratingCount } from '../../utils/utils';
import { BookMarkButtonClasses, BookMarkPlaceCardSize, HOUSE_TYPE } from '../../const/const';
import { FavoriteButton } from '../favorite-button/favorite-button';


type PlaceCardProps ={
  offer: Offer;
  activeCard: string | null;
  setActiveCard: (id: string | null) => void;
  cardClass: string;
}

function PlaceCard({offer, activeCard, setActiveCard, cardClass}: PlaceCardProps) : React.JSX.Element {

  const handleMouseEnter = () => {
    setActiveCard(offer.id);
  };

  const handleMouseLeave = () => (
    setActiveCard(null)
  );

  return(
    <article className={`${cardClass}__card place-card ${activeCard === offer.id ? 'place-card--active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}

      <div className={`${cardClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offers/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <FavoriteButton
            id={offer.id}
            isFavorite={offer.isFavorite}
            bookMarkClass={BookMarkButtonClasses.placeCard}
            bookMarkSize={BookMarkPlaceCardSize}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingCount(offer.rating)} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {offer.title}
          </a>
        </h2>
        <p className="place-card__type">{HOUSE_TYPE[offer.type]}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
