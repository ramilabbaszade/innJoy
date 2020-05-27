import React from 'react'
import {Link} from 'react-router-dom'

import './PostItem.scss'

const PostItem = props => {
    return (
        <Link to={`/blog/${props.postId}`}>
        <div className="post-item">
            <img src={props.image} alt="" />
            <div className="post-item-info">
                <h2> {props.title} </h2>
                <p>
                    {props.description}
                </p>
                <span className="post-tag"> {props.category} </span>
                <span className="post-time"> {props.time} </span>
            </div>
        </div>
        </Link>
    )
}

export default PostItem
