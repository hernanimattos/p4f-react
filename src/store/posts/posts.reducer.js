import { GET_POSTS } from './posts.actions';

const initialState = {
  posts: [],
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return { ...state };
  }
};

export default postReducer;
