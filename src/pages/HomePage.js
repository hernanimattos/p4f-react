import React, { useEffect } from 'react';
import { getPostsByUserId } from '../store/posts/posts.actions';
import { getUsers, getUserSelected } from '../store/users/users.actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../layout/Layout';
import Users from '../containers/Users/Users';
import Router from '../router/Router';
import UserCard from '../components/UserCard/UserCard';
import Loader from '../components/Loader/Loader';

import { Link, withRouter } from 'react-router-dom';

import './Home.css';

const HomePage = (props) => {
  const { user, getUserSelected, location, loader } = props || {};
  const { state } = location;
  const { id } = user || {};

  console.log(loader);

  useEffect(() => {
    if (state) {
      getUserSelected(state);
    }
  }, [state, getUserSelected]);

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
              <Link to="/fotos"> fotos</Link>
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
  console.log(state);
  const { usersReducer, postsReducer, loaderReducer } = state;
  return {
    posts: postsReducer.posts,
    users: usersReducer.users,
    user: usersReducer.user,
    loader: loaderReducer.loader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersAction: () => dispatch(getUsers()),
    getPostsByUserId: (id) => dispatch(getPostsByUserId(id)),
    getUserSelected: (id) => dispatch(getUserSelected(id)),
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
