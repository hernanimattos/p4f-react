import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import UserCard from '../../components/UserCard/UserCard';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  const { users } = props || {};

  return (
    <Fragment>
      {users &&
        users.map((user) => (
          <NavLink
            to={{
              pathname: `/posts/user/${user.id}`,
              state: `${user.id}`,
            }}
            key={user.id}>
            <UserCard
              name={user.name}
              email={user.email}
              company={user.company.name}
            />
          </NavLink>
        ))}
    </Fragment>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      company: PropTypes.shape({
        name: PropTypes.string,
      }),
    }),
  ),
};

export default Users;
