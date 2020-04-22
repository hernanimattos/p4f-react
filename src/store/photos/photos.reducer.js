import { GET_PHOTHOS_BY_ID, GET_PHOTO } from './photos.actions';

const initialState = {
  photos: [],
  photo: {},
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTHOS_BY_ID:
      return {
        ...state,
        photos: action.photos,
      };
    case GET_PHOTO:
      return {
        ...state,
        photo: action.photo,
      };
    default:
      return { ...state };
  }
};

export default photosReducer;
