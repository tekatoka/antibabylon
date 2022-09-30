import React, { useState } from 'react';

// File imported
import Header from '../../components/header/HeaderOne'
import SideHeader from "../../components/SideHeader";
import PortfolioFourColumn from "../../container/portfolio/PortfolioFourColumn";
import portfolioData from '../../data/portfolio';

const HomeFourColumn = () => {
    const [count, setCount] = useState(12);
    const portfolios = portfolioData.slice(0, count);

    return (
        <div className={'main-wrapper'}>
            <Header />
            <SideHeader mobile={true} />
            <PortfolioFourColumn portfolios={portfolios} />
        </div>
    );
};

export default HomeFourColumn;
