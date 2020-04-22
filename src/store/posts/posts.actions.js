import Http from '../../Http';

export const GET_POSTS = 'GET_POSTS';
export const GET_IMAGES = 'GET_IMAGES';

const getPostsByUserId = (id) => {
  return (dispatch) => {
    return Http.get(`/posts?userId=${id}`)
      .then((res) => {
        return dispatch({
          type: GET_POSTS,
          posts: res.data,
        });
      })
      .catch((erro) => {
        console.log(erro, 'lllll');
      });
  };
};

export { getPostsByUserId };
