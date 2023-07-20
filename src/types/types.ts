type Offer =
  {
    id: string;
    title: string;
    type: string;
    price: number;
    city: {
      name: string;
      location: locationType;
    };
    location: locationType;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    previewImage: string;
  };

  type locationType = {
      latitude: number;
      longitude: number;
      zoom: number;
  }

export type OffersType = Offer[];
