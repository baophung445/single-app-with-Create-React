import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
  posts: PropTypes.array,
};

PostList.defaultProps = {
  posts: [],
};

function PostList(props :any) {
  const { posts } = props;

  return (
    <ul className="post-list">
      {posts.map((post : any)  =>  (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;