

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
