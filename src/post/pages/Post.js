import React from "react";
import { useParams } from 'react-router-dom'
import PostContent from "../components/PostContent";
import image from '../../img/photos/edu.jpg'

import './Post.scss'

import './Post.scss'

const DUMMY_POSTS = [
  {
    id: 1,
    title:
      "Welcome to our blog post. Welcome to our blog post.Welcome to our blog post",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    image: image,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    time: "27 MAY 2020",
    postId: 'p1',
    category: "english",
  },
  {
    id: 2,
    title: "Welcome to our blog post,",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    image: image,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    time: "27 MAY 2020",
    postId: 'p2',
    category: "english",
  },
  {
    id: 3,
    title: "Welcome to 3 post",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    image: image,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    time: "27 MAY 2020",
    postId: 'p3',
    category: "english",
  },
  {
    id: 4,
    title: "Welcome to our 4. blog post,",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    image: image,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, assumenda.",
    time: "27 MAY 2020",
    postId: 'p4',
    category: "english",
  }
];

const Post = props => {
  const postId = useParams().postId;
  const loadedPosts = DUMMY_POSTS.filter(post => post.postId === postId)
  return <div className="post-main">
    <PostContent posts={loadedPosts} />
  </div>
};

export default Post;
