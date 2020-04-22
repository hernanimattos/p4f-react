import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPostsByUserId } from '../store/posts/posts.actions';
import { getPhotos } from '../store/photos/photos.actions';
import { getUsers, getUserSelected } from '../store/users/users.actions';
import Layout from '../layout/Layout';
import Users from '../containers/Users/Users';
import Router from '../router/Router';
import UserCard from '../components/UserCard/UserCard';
import Loader from '../components/Loader/Loader';

import './Home.css';

const HomePage = (props) => {
  const { user, getUserSelected, location, loader, getPhotos } = props || {};
  const { state, params } = location || {};

  const { photoid } = params || {};
  const { id } = user || {};

  useEffect(() => {
    if (state) {
      getUserSelected(state);
    }

    if (photoid) {
      getPhotos(photoid);
    }
  }, [state, getUserSelected, photoid]);

  return (
    <Layout>
      <Loader show={loader} />
      <aside className="side-nav">
        <Users {...props} />
      </aside>
      <section className="main-content__dinamic">
        <nav className="navigation-content">
          <ul>
            <li>
              <Link
                to={{
                  pathname: `/posts/user/${state || id}`,
                }}>
                Posts
              </Link>
            </li>
            <li>
              <Link
                to={{
                  pathname: `/fotos/user/${state || id}`,
                  params: {
                    photoid: `${state || id}`,
                  },
                }}>
                fotos
              </Link>
            </li>
          </ul>
          {user && <UserCard name={user.name} address={user.address} primary />}
          <Router {...props} />
        </nav>
      </section>
    </Layout>
  );
};

const mapStateProps = (state) => {
  const { usersReducer, postsReducer, loaderReducer, photosReducer } = state;
  return {
    posts: postsReducer.posts,
    users: usersReducer.users,
    user: usersReducer.user,
    loader: loaderReducer.loader,
    photos: photosReducer.photos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersAction: () => dispatch(getUsers()),
    getPostsByUserId: (id) => dispatch(getPostsByUserId(id)),
    getUserSelected: (id) => dispatch(getUserSelected(id)),
    getPhotos: (id) => dispatch(getPhotos(id)),
  };
};

HomePage.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      suite: PropTypes.string,
      city: PropTypes.string,
      zipcode: PropTypes.string,
    }),
  }),
  getUserSelected: PropTypes.func,
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
};

export default connect(mapStateProps, mapDispatchToProps)(withRouter(HomePage));
