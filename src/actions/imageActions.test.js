import { GET_IMAGE, fetchImage } from './ImageAction';

jest.mock('../services/ImageApi.js', () => ({
  getImage: () => Promise.resolve()
}));

describe('image action', () => {
  it('can create a getImage action', () => {
    const action = fetchImage();

    expect(action).toEqual({
      type: GET_IMAGE,
      payload: expect.any(Promise)
    });
  });
});
