import React from 'react'
import {NavLink} from 'react-router-dom'

import './NavLinks.scss'

const NavLinks = props => {
    const scrollColor = props.scroll? 'scrollLink':null
    return (
        <ul className='nav-links'>
            <li>
                <NavLink className={scrollColor}  to="/admin/users">All Users</NavLink>
            </li>
            <li>
                <NavLink className={scrollColor} to="/u1/places">My posts</NavLink>
            </li>
            <li>
                <NavLink className={scrollColor} to="/posts/new">Add post</NavLink>
            </li>
            <li>
                <NavLink className={scrollColor} to="/auth">Authenticate</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks
