import React, { Fragment, useState } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridFiveColumn from "../../../templates/portfolio/grid/five-column";
import portfolioData from '../../../data/portfolio'

const PortfolioGridFiveColumnFullWidthPage = () => {
    const [count, setCount] = useState(9);
    const [loading, setLoading] = useState(false);
    const portfolios = portfolioData.slice(0, count);

    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setCount(count + 3);
            setLoading(false);
        }, 200);
    };

    const allItems = count >= portfolioData.length;

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioGridFiveColumn portfolios={portfolios} loading={loading} fullWidth={true} />
        </Fragment>
    );
};

export default PortfolioGridFiveColumnFullWidthPage;