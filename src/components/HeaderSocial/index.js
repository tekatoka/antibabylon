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
                className="side-header-toggle d-block d-lg-none order-12 ml-20"
                onClick={openSideMenu}
            >
                <span />
            </button>
            {socialIcons.map(social => (
                <a key={social?.id}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SocialIcon url={`${social?.url}`} bgColor="#333333" />
                </a>
            ))}
        </div>
    );
};

export default HeaderSocial;
