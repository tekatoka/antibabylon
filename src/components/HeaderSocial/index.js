import React from 'react';
import socialIcons from '../../data/social-networks';
import { SocialIcon } from 'react-social-icons';

const HeaderSocial = () => {
    const openSideMenu = () => {
        const sideMenuWrap = document.querySelector(".side-header");
        const overlay = document.querySelector('.side-menu-overlay');
        sideMenuWrap.classList.add('side-menu-open');
        overlay.classList.add('overlay-show');
    };

    return (
        <div className="header-social d-flex align-items-top justify-content-end mt-40 col-lg-3 col-6">
            <button
                className="side-header-toggle d-block d-lg-none order-12 ml-10"
                onClick={openSideMenu}
            >
                <span />
            </button>
            {socialIcons.map(social => (

                <SocialIcon key={social?.id} url={`${social?.url}`} bgColor="#333333" />

            ))}
        </div>
    );
};

export default HeaderSocial;
