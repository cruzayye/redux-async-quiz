import { createAction } from 'promise-middleware-redux';
import { fetchImage } from '../services/ImageApi';

export const [
  getImage,
  GET_IMAGE,
  GET_IMAGE_PENDING,
  GET_IMAGE_FULFILLED,
  GET_IMAGE_ERROR
] = createAction('GET_NOES', fetchImage);

// export const GET_IMAGE = 'GET_IMAGE';
// export const getImage = () => ({
//   type: GET_IMAGE,
//   payload: fetchImage()
// });
