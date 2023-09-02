import { appProcess, changeCity, sortOffers } from './app-process';

describe('appProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      city: 'Paris',
      sortType: 'Popular',
      error: null,
    };
    const result = appProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      city: 'Paris',
      sortType: 'Popular',
      error: null,
    };
    const result = appProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should change city and make sort type Popular with ChangeCity Action', () => {
    const expectedState = {
      city: 'Amsterdam',
      sortType: 'Popular',
      error: null,
    };
    const result = appProcess.reducer(undefined, changeCity('Amsterdam'));
    expect(result).toEqual(expectedState);
  });

  it('should change sort type with SortOffers action', () => {
    const expectedState = {
      city: 'Paris',
      sortType: 'Price: high to low',
      error: null,
    };
    const result = appProcess.reducer(undefined, sortOffers('Price: high to low'));
    expect(result).toEqual(expectedState);
  });
});
