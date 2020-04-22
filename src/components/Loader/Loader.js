import React, { Fragment } from 'react';
import './Loader.css';

const Loader = (props) => {
  const { show } = props || {};

  return (
    <Fragment>
      <div className={show ? 'loader show' : 'loader'}>
        <img
          src="https://raw.githubusercontent.com/hernanimattos/p4f-vue/master/src/assets/load.gif"
          alt=""
        />
      </div>
    </Fragment>
  );
};

export default Loader;
