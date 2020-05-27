import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
// import sport from '../../../img/innjoy-sport'

import "./NavLinks.scss";

const NavLinks = (props) => {
  const scrollColor = props.scroll ? "scrollLink" : null;
  const auth = useContext(AuthContext)
  return (
    <ul className='nav-links'>
      <li>
        <NavLink className={scrollColor} to='/courses'>
          Dərslər
        </NavLink>
      </li>
      <li>
        <NavLink className={scrollColor} to='/about'>
          Haqqımızda
        </NavLink>
      </li>
      <li>
        <NavLink className={scrollColor} to='/contact'>
          Əlaqə
        </NavLink>
      </li>
      <li>
        <NavLink className={scrollColor} to='/blog'>
          Blog
        </NavLink>
      </li>
      {!auth.isLoggedIn && <li>
        <NavLink className={scrollColor} to='/admin'>
          Admin
        </NavLink>
      </li>
      }
      {auth.isLoggedIn && <li>
        <button className="btn-success" onClick={auth.logout} >
            <i className="fa fa-sign-out">Çıxış</i>
        </button>
      </li>
      }
      <li className="innjoy-sport-link">
        <Link to='/'>
          Sport
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
