
export enum AppRoute {
  Root = '/',
  Offers = '/offer/:id',
  Favorites = '/favorites',
  Login = '/login',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Titles {
  MainTitle = '6 cities',
  OffersTitle = '6 cities: offer',
  FavoritesTitle = '6 cities: favorites',
  LoginTitle = '6 cities: authorization'
}

export const HOUSE_TYPE = {
  room: 'Private Room',
  apartment: 'Apartment',
  house: 'House',
  hotel: 'Hotel',
};

export const URL_MARKER_DEFAULT = 'markup/img/pin.svg';

export const URL_MARKER_CURRENT = 'markup/img/pin-active.svg';

export const CARD_CLASS = {
  main: 'cities',
  nearBy: 'near-places',
};

export const OFFERS_LIST_CLASS = {
  mainPage: 'cities__places-list',
  offerPage: 'near-places__list',
};

export const SORT_TYPES: string[] = ['Popular', 'Price: high to low', 'Price: low to high', 'Top rated first'];

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export enum ApiRoute {
  GetOffers = '/six-cities/offers',
  Login = '/six-cities/login',
  Logout = '/six-cities/logout',
  Favorites = '/six-cities/favorite',
  Comments = '/six-cities/comments',
}

export enum NameSpace {
  Data = 'DATA',
  App = 'APP',
  Offer = 'OFFER',
  User = 'USER',
}

export enum FavoriteStatus {
  AddToFavorite = 1,
  DeleteFromFavorite = 0
}

export enum BookMarkButtonClasses {
  placeCard = 'place-card',
  detailedOfferCard = 'offer',
}

export enum BookMarkPlaceCardSize {
  width = 18,
  height = 19,
}

export enum BookMarkOfferSize {
  width = 31,
  height = 33,
}

export enum FormCharactersLimit {
  MinCharactersCount = 50,
  MaxCharactersCount = 300,
}

export const TIMEOUT_SHOW_ERROR = 2000;

export const MAX_REVIEWS_COUNT = 10;

export const PHOTOES_IN_OFFER_LIMIT = 6;

export const NEARBY_OFFERS_TO_SHOW_LIMIT = 3;
