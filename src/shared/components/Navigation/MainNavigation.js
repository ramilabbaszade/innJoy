import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import brandLogo from '../../../assets/innjoy.svg'

import './MainNavigation.scss'

const MainNavigation = (props) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer = () => {
        setDrawerIsOpen(true)
    }
    const closeDrawer = () => {
        setDrawerIsOpen(false)
    }

    return (<React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}

        <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawer}>
                <span />
                <span />
                <span />
            </button>
            <div className="main-navigation__brand">
                <Link to="/"><img src={brandLogo} alt="" /></Link>
            </div>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>
    </React.Fragment>
    );
};

export default MainNavigation;
