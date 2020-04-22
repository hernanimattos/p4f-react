import React, { Fragment } from 'react';

const Thumb = (props) => {
  const { imgSrc } = props;
  return (
    <Fragment>
      <figure className="foto-item">
        <img src={imgSrc} />
      </figure>
    </Fragment>
  );
};

export default Thumb;
