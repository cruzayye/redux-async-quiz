import { GET_IMAGE } from '../actions/ImageAction';

const initialState = {
  url: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case GET_IMAGE:
      return { ...state,
        url: payload.message
      };
    default: return state;
  }
}
