import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavLinks.scss'

const NavLinks = props => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/admin/users">All Users</NavLink>
            </li>
            <li>
                <NavLink to="/u1/places">My posts</NavLink>
            </li>
            <li>
                <NavLink to="/posts/new">Add post</NavLink>
            </li>
            <li>
                <NavLink to="/auth">Authenticate</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks
