import reducer from './imageReducer';
import { GET_IMAGE } from '../actions/ImageAction';

jest.mock('../services/ImageApi.js');

describe('reducer test', () => {
  it('can update state', () => {
    const state = {
      url: ''
    };
    const newState = reducer(state, {
      type: GET_IMAGE,
      payload: {
        message: 'url'
      } 
    });
    expect(newState).toEqual({
      url: 'url'
    });
  });
});
