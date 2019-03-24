import { selectImage } from './imageSelector';

describe('tests our selector', () => {
  it('gets our imagereducer url', () => {
    const state = {
      imageReducer: {
        url: 'n02102973_3461.jpg'
      }
    };
    expect(selectImage(state)).toEqual('n02102973_3461.jpg');

  });
});
