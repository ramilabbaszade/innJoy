import React from "react";

import PostItem from './PostItem'

import './PostsList.scss'

const PostsList = (props) => {
  if (props.posts.length === 0) {
    return (
      <div className='center'>
        <h2> No posts found </h2>
      </div>
    );
  }
  return (
    <div className="posts-list">
      {props.posts.map((post) => {
        return (
          <PostItem
            key={post._id}
            id={post._id}
            image={post.post_image}
            title={post.title}
            description={post.description}
            time={post.date}
            postId = {post.postId}
            category={post.category}
          />
        );
      })}
    </div>
  );
};

export default PostsList;
