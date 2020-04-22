import React, { useEffect, useReducer } from 'react';
import { getPostsByUserId } from '../store/posts/posts.actions';
import { getUsers, getUserSelected } from '../store/users/users.actions';
import { connect } from 'react-redux';
import Layout from '../layout/Layout';
import Users from '../containers/Users/Users';
import Router from '../router/Router';
import UserCard from '../components/UserCard/UserCard';

import { Link, withRouter } from 'react-router-dom';

import './Home.css';

const HomePage = (props) => {
  const { user, getUserSelected, location } = props || {};
  const { state } = location;

  useEffect(() => {
    if (state) {
      getUserSelected(state);
    }
  }, [state]);

  const { id } = user || {};

  return (
    <Layout>
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
  const { usersReducer, postsReducer } = state;
  return {
    posts: postsReducer.posts,
    users: usersReducer.users,
    user: usersReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersAction: () => dispatch(getUsers()),
    getPostsByUserId: (id) => dispatch(getPostsByUserId(id)),
    getUserSelected: (id) => dispatch(getUserSelected(id)),
  };
};

export default connect(mapStateProps, mapDispatchToProps)(withRouter(HomePage));