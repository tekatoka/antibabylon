import React from 'react';

// File imported
import Header from '../../components/header/HeaderOne'
import SideHeader from "../../components/SideHeader";
import PortfolioThreeColumn from "../../container/portfolio/PortfolioThreeColumn";
import portfolioData from '../../data/portfolio'

const HomeThreeColumn = () => {
    const portfolios = portfolioData;

    return (
        <div className={'main-wrapper'}>
            <Header />
            <SideHeader mobile={true} />
            <PortfolioThreeColumn portfolios={portfolios} />
        </div>
    );
};

export default HomeThreeColumn;
