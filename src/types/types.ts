export type Offer =
  {
    id: string;
    title: string;
    type: string;
    price: number;
    city: {
      name: string;
      location: LocationType;
    };
    location: LocationType;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
  };

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
