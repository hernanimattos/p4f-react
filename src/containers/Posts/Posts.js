import React, { Fragment } from 'react';
import PostCard from '../../components/PostCard/PostCard';

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

export default Posts;
