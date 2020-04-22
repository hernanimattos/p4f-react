import React, { Fragment } from 'react';
import './UserCard.css';

const UserCard = (props) => {
  const { name, email, company, primary, address } = props || {};
  const { street, zypcode, suite, city } = address || {};

  return (
    <div className={primary ? 'user-card ' : 'user-card default'}>
      {!primary ? (
        <Fragment>
          <h2>{name}</h2>
          <p>{email}</p>
          <p>{company}</p>
        </Fragment>
      ) : (
        <Fragment>
          <h2>{name}</h2>
          <h3>Endereço</h3>
          <p>
            {street} - {suite}
          </p>
          <p>
            {city} - CEP: {zypcode}
          </p>
        </Fragment>
      )}
    </div>
  );
};

export default UserCard;
