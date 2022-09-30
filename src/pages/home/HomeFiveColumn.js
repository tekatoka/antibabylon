import React from 'react';

// File imported
import Header from '../../components/header/HeaderOne'
import SideHeader from "../../components/SideHeader";
import PortfolioFiveColumn from "../../container/portfolio/PortfolioFiveColumn";
import portfolioData from '../../data/portfolio'

const HomeFiveColumn = () => {
    const portfolios = portfolioData;

    return (
        <div className={'main-wrapper'}>
            <Header />
            <SideHeader mobile={true} />
            <PortfolioFiveColumn portfolios={portfolios} />
        </div>
    );
};

export default HomeFiveColumn;
