import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Posts from '../containers/Posts/Posts';
import Photos from '../containers/Photos/Photos';
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
      <Route path={'/fotos/user/:id'} component={() => <Photos {...props} />} />
      <Route component={() => <div>Conteúdo não encontrado</div>} />
    </Switch>
  );
};

MainRouter.propTypes = {
  getUsersAction: PropTypes.func,
};

export default MainRouter;
