import React, { Fragment } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioMasonryFourColumn from "../../../templates/portfolio/masonry/four-column";
import portfolioData from '../../../data/portfolio';

const PortfolioMasonryFourColumnFullWidthPage = () => {
    const portfolios = portfolioData;

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioMasonryFourColumn portfolios={portfolios} fullWidth={true} />
        </Fragment>
    );
};

export default PortfolioMasonryFourColumnFullWidthPage;