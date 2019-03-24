import { fetchImage } from '../services/ImageApi';

export const GET_IMAGE = 'GET_IMAGE';
export const getImage = () => ({
  type: GET_IMAGE,
  payload: fetchImage()
});
