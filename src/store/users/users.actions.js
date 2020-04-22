import Http from '../../Http';
import { getPostsByUserId } from '../posts/posts.actions';
import { loderInit, loderFinish } from '../loader/loader.actions';

export const GET_USERS = 'GET_USERS';
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const GET_POSTS = 'GET_POSTS';

const getUsers = () => {
  return (dispatch) => {
    dispatch(loderInit());
    return Http.get('/users')
      .then((res) => {
        dispatch(loderInit());
        return dispatch({
          type: GET_USERS,
          users: res.data,
        });
      })
      .then((res) => {
        return dispatch({
          type: GET_USER_BY_ID,
          user: res.users[0],
        });
      })
      .then((res) => {
        dispatch(getPostsByUserId(res.user.id));
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
};

const getUserSelected = (id) => {
  return (dispatch, getState) => {
    const { usersReducer } = getState();
    const { users } = usersReducer;

    const userSelected = users.find((user) => user.id === parseInt(id, 10));

    dispatch(getPostsByUserId(id));
    dispatch({
      type: GET_USER_BY_ID,
      user: userSelected || users[0],
    });
  };
};

export { getUsers, getUserSelected };
