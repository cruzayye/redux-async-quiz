import {
  getImage,
  GET_IMAGE,
  GET_IMAGE_PENDING,
  GET_IMAGE_FULFILLED,
  GET_IMAGE_ERROR 
} from './ImageAction';

jest.mock('../services/ImageApi.js', () => ({
  fetchImage: () => Promise.resolve()
}));

describe('image action', () => {
  it('can create a getImage action', () => {
    const action = getImage();

    expect(action).toEqual({
      type: GET_IMAGE,
      pendingType: GET_IMAGE_PENDING,
      fulfilledType: GET_IMAGE_FULFILLED,
      rejectedType: GET_IMAGE_ERROR,
      payload: expect.any(Promise)
      

    });
  });
});
