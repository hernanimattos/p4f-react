import React, { Fragment, useState, useEffect } from 'react';
import './Photos.css';

import Thumb from '../../components/Thumb/Thumb';

const Slide = (props) => {
  const { photos, location } = props || {};
  const { params } = location || {};
  const { photoid } = params || {};
  const [photoActiveUrl, setPhotoActiveUrl] = useState(null);

  useEffect(() => {
    if (photoid && photos.length > 0) {
      thumbActive(parseInt(photoid));
    }
  }, [photoid, photos]);

  const thumbActive = (id) => {
    const fotoActive = photos.find((photo) => photo.id === id);
    setPhotoActiveUrl(fotoActive.url);
  };

  return (
    <Fragment>
      <div className="fotos-container">
        <div className="foto-container__active">
          <Thumb {...props} imgSrc={photoActiveUrl} />
        </div>
        <div className="thumb-control">
          <span id="thumb-control__left">left</span>
          <span id="thumb-control__right">Right</span>
        </div>
        <div className="fotos-container__thumb">
          {photos &&
            photos.map((thumb) => (
              <Thumb
                {...props}
                imgSrc={thumb.thumbnailUrl}
                key={thumb.id}
                click={() => thumbActive(thumb.id)}
              />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Slide;
