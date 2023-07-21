
import PlaceCard from '../card/card';
import { OffersType } from '../../types/types';
import { useState } from 'react';

type OfferListProps = OffersType;

export function OffersList({ offers }: OfferListProps): React.JSX.Element {

  const [activeCard, setActiveCard] = useState<string | null>(null);

  console.log(offers, 'sss');
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  );
}
