
import { Offer } from '../../types';
import PlaceCard from '../card/card';


type OfferListProps = {
  offers: Offer[];
  updateActiveCard: (id: string | null) => void;
  cardClass: string;
  offerListClass: string;
}

export function OffersList({ offers, updateActiveCard, cardClass, offerListClass }: OfferListProps): React.JSX.Element {

  const handleMouseEnter = (id: string) => {
    updateActiveCard(id);
  };

  const handleMouseLeave = () => (
    updateActiveCard(null)
  );

  return (
    <div className={`${offerListClass} places__list tabs__content`}>
      {offers.map((offer) => (
        <div
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={() => handleMouseLeave()}
          key={offer.id}
        >
          <PlaceCard
            offer={offer}
            cardClass={cardClass}
          />
        </div>
      ))}
    </div>
  );
}
