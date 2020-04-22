import Http from '../../Http';
import { getPostsByUserId } from '../posts/posts.actions';
import { loderInit, loderFinish } from '../loader/loader.actions';

export const GET_PHOTHOS_BY_ID = 'GET_PHOTHOS_BY_ID';
export const GET_PHOTO = 'GET_PHOTO';

const getPhotos = (id) => {
  return (dispatch, getState) => {
    dispatch(loderInit());

    const { photosReducer } = getState() || {};
    const { photos = [] } = photosReducer || [];

    if (photos.length > 0 && photos[0].albumId == parseInt(id, 10)) {
      dispatch(loderFinish());
      return dispatch({
        type: GET_PHOTHOS_BY_ID,
        photos,
      });
    }

    return Http.get(`/photos?albumId=${id}`)
      .then((res) => {
        return dispatch({
          type: GET_PHOTHOS_BY_ID,
          photos: res.data,
        });
      })
      .then(() => {
        dispatch(loderFinish());
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
};

const getPhoto = (id) => {
  return (dispatch, getState) => {
    const { imagesReducer } = getState();
    const { photos } = imagesReducer;

    const photoSelected = photos.find((photo) => photo.id === parseInt(id, 10));

    dispatch(getPostsByUserId(id));
    dispatch({
      type: GET_PHOTO,
      image: photoSelected || photos[0],
    });
  };
};

export { getPhotos, getPhoto };
