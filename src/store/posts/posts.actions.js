import Http from '../../Http';
import { loderFinish, loderInit } from '../loader/loader.actions';

export const GET_POSTS = 'GET_POSTS';
export const GET_IMAGES = 'GET_IMAGES';

const getPostsByUserId = (id) => {
  return (dispatch) => {
    dispatch(loderInit());
    return Http.get(`/posts?userId=${id}`)
      .then((res) => {
        return dispatch({
          type: GET_POSTS,
          posts: res.data,
        });
      })
      .then(() => {
        dispatch(loderFinish());
      })
      .catch((erro) => {
        console.log(erro, 'lllll');
      });
  };
};

export { getPostsByUserId };
