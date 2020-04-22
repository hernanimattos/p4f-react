import { GET_USERS, GET_USER_BY_ID } from './users.actions';

const initialState = {
  users: [],
  user: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        user: action.user,
      };
    default:
      return { ...state };
  }
};

export default usersReducer;
