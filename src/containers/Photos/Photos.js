import React, { Fragment } from 'react';

import Thumb from '../../components/Thumb/Thumb';

const Slide = (props) => {
  const { photos } = props || {};

  return (
    <Fragment>
      {photos && photos.map((thumb) => <Thumb {...props} key={thumb.id} />)}
    </Fragment>
  );
};

export default Slide;
