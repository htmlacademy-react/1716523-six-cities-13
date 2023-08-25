
import { Offer } from '../../types';
import PlaceCard from '../card/card';


type OfferListProps = {
  offers: Offer[];
  activeCard: string | null;
  updateActiveCard: (id: string | null) => void;
  cardClass: string;
  offerListClass: string;
}

export function OffersList({offers, activeCard, updateActiveCard, cardClass, offerListClass}: OfferListProps): React.JSX.Element {

  const cities = new Set<string>();

  offers.map((offer) => cities.add(offer.city.name));

  return (
    <div className={`${offerListClass} places__list tabs__content`}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          activeCard={activeCard}
          setActiveCard={updateActiveCard}
          cardClass={cardClass}
        />
      ))}
    </div>
  );
}
