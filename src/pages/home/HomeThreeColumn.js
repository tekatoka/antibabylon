import React, { useState } from 'react';

// File imported
import Header from '../../components/header/HeaderOne'
import SideHeader from "../../components/SideHeader";
import PortfolioThreeColumn from "../../container/portfolio/PortfolioThreeColumn";
import portfolioData from '../../data/portfolio'

const HomeThreeColumn = () => {
    const [count, setCount] = useState(9);
    const [loading, setLoading] = useState(false);
    const portfolios = portfolioData.slice(0, count);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCount(count + 3);
            setLoading(false);
        }, 100);
    };

    const allItems = count === portfolioData.length;

    return (
        <div className={'main-wrapper'}>
            <Header />
            <SideHeader mobile={true} />
            <PortfolioThreeColumn portfolios={portfolios} loading={loading} />
        </div>
    );
};

export default HomeThreeColumn;
