import { NameSpace } from '../../const/const';
import { getCity, getErrorMessage, getSortType } from './selectors';

describe('AppProcess selectors', () => {

  const state = {
    [NameSpace.App]: {
      city: 'Paris',
      sortType: 'Popular',
      error: null,
    }
  };
  it('should return city from state', () => {
    const {city} = state[NameSpace.App];
    const result = getCity(state);
    expect(result).toBe(city);
  });

  it('should return sort type from state', () => {
    const { sortType } = state[NameSpace.App];
    const result = getSortType(state);
    expect(result).toBe(sortType);
  });

  it('should return error from state', () => {
    const { error } = state[NameSpace.App];
    const result = getErrorMessage(state);
    expect(result).toBe(error);
  });

});
