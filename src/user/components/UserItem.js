import React from 'react'

import {Link} from 'react-router-dom'

import './UsersList.scss'

const UserItem = props => {
    return (
        <li className="user-item">
            <Link to={`/${props.id}/posts`}>
            <div className="user-item__content">
                <h2> {props.name} </h2>
                <i> Shared Posts:{props.postCount} </i>
            </div>
            </Link>
        </li>
    )
}

export default UserItem
