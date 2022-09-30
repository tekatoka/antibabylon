import React from 'react';

// File imported
import Header from '../../components/header/HeaderOne'
import SideHeader from "../../components/SideHeader";
import PortfolioFourColumn from "../../container/portfolio/PortfolioFourColumn";
import portfolioData from '../../data/portfolio';

const HomeFourColumn = () => {
    const portfolios = portfolioData;

    return (
        <div className={'main-wrapper'}>
            <Header />
            <SideHeader mobile={true} />
            <PortfolioFourColumn portfolios={portfolios} />
        </div>
    );
};

export default HomeFourColumn;
