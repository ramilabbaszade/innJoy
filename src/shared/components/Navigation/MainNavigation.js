import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import brandLogo from '../../../img/innjoy.svg'
import brandLogoW from '../../../img/innjoy-white.svg'

import './MainNavigation.scss'

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer = () => {
        setDrawerIsOpen(true)
    }
    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
      document.addEventListener("scroll", () => {
        const scrollCheck = window.scrollY >= 130;
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck);
        }
      });
    });

    return (<React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}

        <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader transparent={props.transparent}>
            <button className={`main-navigation__menu-btn ${scroll&&'bg'}` } onClick={openDrawer}>
                <span />
                <span />
                <span />
            </button>
            <div className="main-navigation__brand">
                <Link to="/"><img src={scroll? brandLogo: brandLogoW} alt="" /></Link>
            </div>
            <nav className="main-navigation__header-nav">
                <NavLinks scroll={scroll} />
            </nav>
        </MainHeader>
    </React.Fragment>
    );
};

export default MainNavigation;
