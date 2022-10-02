import React from 'react';
import {NavLink} from "react-router-dom";
import navbarData from '../../data/navbar'

const NavItem = () => {
    return (
        navbarData.map(navItem => (
            <li key={navItem.id}>
                {navItem.subMenu ? navItem.subMenu.map((child, idx) => {
                    return <><NavLink
                        className={"submenu-child"}
                        exact={child.link === `/`}
                        to={`${process.env.PUBLIC_URL + child.link}`}
                        activeClassName={'active'}>
                        {child.title}
                    </NavLink>
                    {idx < navItem.subMenu.length - 1 && <span className='pipe'></span>}
                    </>
                }) : 
                <NavLink
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
