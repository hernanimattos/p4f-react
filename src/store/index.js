import postsReducer from './posts/posts.reducer';
import usersReducer from './users/users.reducer';

import { getPostsByUserId } from './posts/posts.actions';
import { getUsers } from './users/users.actions';

export const reducers = { postsReducer, usersReducer };

export const actions = { getPostsByUserId, getUsers };