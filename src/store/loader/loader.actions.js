export const LODER_INIT = 'LODER_INIT';
export const LODER_FINISH = 'LODER_FINISH';

const loderInit = () => {
  return (dispatch) => {
    return dispatch({
      type: LODER_INIT,
      loader: true,
    });
  };
};
const loderFinish = () => {
  return (dispatch) => {
    return dispatch({
      type: LODER_FINISH,
      loader: false,
    });
  };
};

export { loderFinish, loderInit };
