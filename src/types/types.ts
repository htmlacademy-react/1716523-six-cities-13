export type Offer =
  {
    id: string;
    title: string;
    type: OfferHouseType;
    price: number;
    city: City;
    location: LocationType;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
  };

export type City = {
    name: string;
    location: LocationType;
  }

  type LocationType = {
      latitude: number;
      longitude: number;
      zoom: number;
  }

export type OffersType = {
  offers: Offer[];
}

export type RatingObj = {
  width: string;
}

export type OfferHouseType = 'room' | 'apartment' | 'house' | 'hotel';
