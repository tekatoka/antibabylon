import React, { Fragment } from 'react';
import { NavLink } from "react-router-dom";
import navbarData from '../../data/navbar'

const NavItem = () => {
    return (
        navbarData.map((navItem, i) => (
            <li key={i}>
                {navItem.subMenu ? navItem.subMenu.map((child, idx) => {
                    return <Fragment key={idx}>
                        <NavLink
                            className={"submenu-child"}
                            exact={child.link === `/`}
                            to={`${process.env.PUBLIC_URL + child.link}`}
                            activeClassName={'active test'}>
                            {child.title}
                        </NavLink>
                        {idx < navItem.subMenu.length - 1 && <span className='pipe'></span>}
                    </Fragment>
                }) :
                    <NavLink
                        key={navItem.title}
                        exact={navItem.link === `/`}
                        to={`${process.env.PUBLIC_URL + navItem.link}`}
                        activeClassName={'active'}>
                        {navItem.title}
                    </NavLink>
                }
            </li>
        ))
    );
};

export default NavItem;
