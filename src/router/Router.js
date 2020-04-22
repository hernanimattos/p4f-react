import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Posts from '../containers/Posts/Posts';
import Slide from '../containers/Slide/Slide';
import { Route, Switch } from 'react-router-dom';

const MainRouter = (props) => {
  const { getUsersAction } = props || {};

  useEffect(() => {
    getUsersAction();
  }, [getUsersAction]);

  return (
    <Switch>
      <Route exact path={'/'} component={() => <Posts {...props} />} />
      <Route path={'/posts/user/:id'} component={() => <Posts {...props} />} />
      <Route path={'/fotos'} component={() => <Slide {...props} />} />
    </Switch>
  );
};

MainRouter.propTypes = {
  getUsersAction: PropTypes.func,
};

export default MainRouter;
