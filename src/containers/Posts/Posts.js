import React, { Fragment } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import PropTypes from 'prop-types';

const Posts = (props) => {
  const { posts = {} } = props || {};

  return (
    <Fragment>
      {posts &&
        posts.map((post) => (
          <PostCard title={post.title} body={post.body} key={post.id} />
        ))}
    </Fragment>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ),
};

export default Posts;
