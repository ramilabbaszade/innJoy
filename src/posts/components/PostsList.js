import React from "react";

const PostsList = () => {
  return (
    <div>
      <div class='blog-posts'>
        <div class='blog-post'>
          <img class='post-image' src='/assets/img/edu.jpg' alt='' />
          <div class='post-content'>
            <h2>How to learn English</h2>
            <span>21.01.2020</span>
            <p class='post-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              praesentium repellat consectetur nemo autem impedit.
            </p>
          </div>
        </div>
        <div class='blog-post'>
          <img class='post-image' src='/assets/img/fullscreen1.jpg' alt='' />
          <div class='post-content'>
            <h2>How to learn English</h2>
            <span>21.01.2020</span>
            <p class='post-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              praesentium repellat consectetur nemo autem impedit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostsList;
