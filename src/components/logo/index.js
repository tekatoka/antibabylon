import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
// Logo
import LogoAntibabylon from '../../assets/images/logo-antibabylon.svg'

const Logo = ({ sideHeader }) => {
    return (
        <Fragment>
            {sideHeader ? (
                <Link to={`${process.env.PUBLIC_URL + '/'}`}>
                    <img src={LogoAntibabylon} alt="AntiBabylon 2022" title="AntiBabylon 2022" />
                </Link>
            ) : (
                <div className="header-logo col-lg-1 col-6 mt-30 mb-30">
                    <Link to={`${process.env.PUBLIC_URL + '/'}`}>
                        <img src={LogoAntibabylon} alt="AntiBabylon 2022" title="AntiBabylon 2022" />
                    </Link>
                </div>
            )}
        </Fragment>
    );
};

export default Logo;
