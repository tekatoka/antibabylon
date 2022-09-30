import React, { Fragment, useState } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioMasonryThreeColumn from "../../../templates/portfolio/masonry/three-column";
import portfolioData from '../../../data/portfolio';

const PortfolioMasonryThreeColumnFullWidthPage = () => {
    const portfolios = portfolioData;

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioMasonryThreeColumn portfolios={portfolios} fullWidth={true} />
        </Fragment>
    );
};

export default PortfolioMasonryThreeColumnFullWidthPage;