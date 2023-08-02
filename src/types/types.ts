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

export type DetailedOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
}

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type OfferHouseType = 'room' | 'apartment' | 'house' | 'hotel';
