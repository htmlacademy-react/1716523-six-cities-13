
import { OffersType } from '../../types';
import PlaceCard from '../card/card';

import { useState } from 'react';

type OfferListProps = OffersType;

export function OffersList({offers}: OfferListProps): React.JSX.Element {

  const [activeCard, setActiveCard] = useState<string | null>(null);

  const cities = new Set<string>();

  offers.map((offer) => cities.add(offer.city.name));

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
