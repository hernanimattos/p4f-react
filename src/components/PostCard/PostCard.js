import React from 'react';
import PropTypes from 'prop-types';
import './PostCard.css';

const PostCard = (props) => {
  const { title, body } = props || {};
  return (
    <div className="post-card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

PostCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default PostCard;
