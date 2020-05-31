import React from "react";
import {useParams} from 'react-router-dom'
import PostContent from "../components/PostContent";

import './Post.scss'

const Post = props => {
  const postId = useParams().postId;
  const loadedPosts = props.posts.filter(post=> post._id === postId)
  return <div className="post-main">
    <PostContent posts={loadedPosts}/>
  </div>
};

export default Post;
