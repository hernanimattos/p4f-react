import React, { Fragment } from 'react';
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

export default Users;
