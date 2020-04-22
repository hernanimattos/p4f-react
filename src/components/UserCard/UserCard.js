import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './UserCard.css';

const UserCard = (props) => {
  const { name, email, company, primary, address } = props || {};
  const { street, zipcode, suite, city } = address || {};

  return (
    <div className={!primary ? 'user-card default' : 'user-card '}>
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
            {city} - CEP: {zipcode}
          </p>
        </Fragment>
      )}
    </div>
  );
};

UserCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  street: PropTypes.string,
  suite: PropTypes.string,
  city: PropTypes.string,
  zipcode: PropTypes.string,
};

export default UserCard;
