import React, { Fragment } from 'react';
import Slide from '../../containers/Slide';

const component = (comp) => {
  const componentToRender = {
    Slide: Slide,
  };

  return (props) => componentToRender[comp](props);
};

const DinamicComponent = (props) => {
  const { name } = props.params;

  return <Fragment>{component(name)(props)}</Fragment>;
};

export default DinamicComponent;
