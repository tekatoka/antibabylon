import React, { Fragment } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import portfolioData from '../../../data/portfolio';
import PortfolioMasonryTwoColumn from "../../../templates/portfolio/masonry/two-column";

const PortfolioMasonryTwoColumnPage = () => {
    const portfolios = portfolioData;

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioMasonryTwoColumn portfolios={portfolios} />
        </Fragment>
    );
};

export default PortfolioMasonryTwoColumnPage;