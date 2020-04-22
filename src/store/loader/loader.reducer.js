import { LODER_INIT, LODER_FINISH } from './loader.actions';

const initialState = {
  loader: '',
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LODER_INIT:
      return {
        ...state,
        loader: action.loader,
      };

    case LODER_FINISH:
      return {
        ...state,
        loader: action.loader,
      };
    default:
      return { ...state };
  }
};

export default loaderReducer;
