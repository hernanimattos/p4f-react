import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Posts from '../containers/Posts/Posts';
import Slide from '../containers/Slide/Slide';
import { Route, Switch } from 'react-router-dom';

const MainRouter = (props) => {
  const { getUsersAction } = props || {};

  useEffect(() => {
    getUsersAction();
  }, []);

  return (
    <Switch>
      <Route exact path={'/'} component={() => <Posts {...props} />} />
      <Route path={'/posts/user/:id'} component={() => <Posts {...props} />} />
      <Route path={'/fotos'} component={() => <Slide {...props} />} />
    </Switch>
  );
};

export default MainRouter;
