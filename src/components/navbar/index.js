import React from 'react';
import NavItem from "./NavItem";

const NavBar = () => {
    return (
        <div className="header-menu d-lg-flex justify-content-left pl-100 col-lg-8 d-none">
            <nav className="main-menu">
                <ul>
                    <NavItem />
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
