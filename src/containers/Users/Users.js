import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import UserCard from '../../components/UserCard/UserCard';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
  const { users, location } = props || {};
  const { pathname } = location;
  const [pathNew, setPath] = useState(null);

  useEffect(() => {
    controlPath();
  }, [pathname]);

  const controlPath = () => {
    const path = pathname.split('/');
    path.pop();
    setPath(path.join('/'));
  };

  return (
    <Fragment>
      {users &&
        users.map((user) => (
          <NavLink
            to={{
              pathname: `${pathNew}/${user.id}`,
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
