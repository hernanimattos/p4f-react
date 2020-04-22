import React from 'react';
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

export default PostCard;
