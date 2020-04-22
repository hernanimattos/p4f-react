import postsReducer from './posts/posts.reducer';
import usersReducer from './users/users.reducer';
import loaderReducer from './loader/loader.reducer';
import photosReducer from './photos/photos.reducer';

import { getPostsByUserId } from './posts/posts.actions';
import { getUsers } from './users/users.actions';

export const reducers = {
  postsReducer,
  usersReducer,
  loaderReducer,
  photosReducer,
};

export const actions = { getPostsByUserId, getUsers };
