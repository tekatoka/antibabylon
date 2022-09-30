import React, { Fragment } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridTwoColumn from "../../../templates/portfolio/grid/two-column";
import portfolioData from '../../../data/portfolio'

const PortfolioGridTwoColumnPage = () => {
    const portfolios = portfolioData;

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioGridTwoColumn portfolios={portfolios} />
        </Fragment>
    );
};

export default PortfolioGridTwoColumnPage;