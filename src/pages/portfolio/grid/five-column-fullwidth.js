import React, { Fragment } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridFiveColumn from "../../../templates/portfolio/grid/five-column";
import portfolioData from '../../../data/portfolio'

const PortfolioGridFiveColumnFullWidthPage = () => {
    const portfolios = portfolioData;
    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioGridFiveColumn portfolios={portfolios} fullWidth={true} />
        </Fragment>
    );
};

export default PortfolioGridFiveColumnFullWidthPage;