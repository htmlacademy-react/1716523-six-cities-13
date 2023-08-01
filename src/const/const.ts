export const RentalOffersCount = {
  count : 312,
};

export enum AppRoute {
  Root = '/',
  Offers = '/offers/:id',
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
  room: 'Privare Room',
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
