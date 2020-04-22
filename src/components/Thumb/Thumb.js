import React, { Fragment } from 'react';

const Thumb = (props) => {
  const { imgSrc, click } = props || {};

  return (
    <Fragment>
      <figure className="foto-item" onClick={click}>
        <img src={imgSrc} />
      </figure>
    </Fragment>
  );
};

export default Thumb;
