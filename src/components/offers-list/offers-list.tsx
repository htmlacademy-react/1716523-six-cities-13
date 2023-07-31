
import { Offer } from '../../types';
import PlaceCard from '../card/card';

// type OfferListProps = OffersType;

type OfferListProps = {
  offers: Offer[];
  activeCard: string | null;
  setActiveCard: React.Dispatch<React.SetStateAction<string | null>>;
  cardClass: string;
}

export function OffersList({offers, activeCard, setActiveCard, cardClass}: OfferListProps): React.JSX.Element {

  const cities = new Set<string>();

  offers.map((offer) => cities.add(offer.city.name));

  return (
    <div className={`${cardClass}__places-list places__list tabs__content`}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          cardClass={cardClass}
        />
      ))}
    </div>
  );
}
