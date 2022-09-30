import React, { useState } from 'react';

// File imported
import Header from '../../components/header/HeaderOne'
import SideHeader from "../../components/SideHeader";
import PortfolioThreeColumn from "../../container/portfolio/PortfolioThreeColumn";
import portfolioData from '../../data/portfolio'

const HomeThreeColumn = () => {
    const [count, setCount] = useState(9);
    const portfolios = portfolioData.slice(0, count);

    return (
        <div className={'main-wrapper'}>
            <Header />
            <SideHeader mobile={true} />
            <PortfolioThreeColumn portfolios={portfolios} />
        </div>
    );
};

export default HomeThreeColumn;
