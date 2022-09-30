import React, { Fragment } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridThreeColumn from "../../../templates/portfolio/grid/three-column";

import portfolioData from '../../../data/portfolio'

const PortfolioGridThreeColumnFullWidthPage = () => {
    const portfolios = portfolioData;

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioGridThreeColumn portfolios={portfolios} fullWidth={true} />
        </Fragment>
    );
};

export default PortfolioGridThreeColumnFullWidthPage;