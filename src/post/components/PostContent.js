import React from "react";
import Categories from "./Categories";

import './PostContent.scss'

const PostContent = (props) => {
    if (props.posts.length === 0) {
        return (
          <div className='center'>
            <h2> No posts found </h2>
          </div>
        );
      }
    return (
    <div>
      {props.posts.map((post) => {
        return (
          <div className='post-content'>
            <img src={post.image} alt='' />
            <h1> {post.title} </h1>
            <p className="post-content__description"> {post.description} </p>
            <div className="post-content__tag"> {post.category} </div>
            <p> {post.content} </p>
          </div>
        );
      })}
      <Categories/>
    </div>
  );
};

export default PostContent;
