import React, { Fragment } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridFourColumn from "../../../templates/portfolio/grid/four-column";
import portfolioData from '../../../data/portfolio';

const PortfolioGridFourColumnFullWidthPage = () => {
    const portfolios = portfolioData;

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioGridFourColumn portfolios={portfolios} fullWidth={true} />
        </Fragment>
    );
};

export default PortfolioGridFourColumnFullWidthPage;