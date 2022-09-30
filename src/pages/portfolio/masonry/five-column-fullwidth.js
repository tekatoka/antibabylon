import React, { Fragment, useState } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioMasonryFiveColumn from "../../../templates/portfolio/masonry/five-column";
import portfolioData from '../../../data/portfolio';

const PortfolioMasonryFiveColumnFullWidthPage = () => {
    const [count, setCount] = useState(10);
    const portfolios = portfolioData.slice(0, count);

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioMasonryFiveColumn portfolios={portfolios} fullWidth={true} />
        </Fragment>
    );
};

export default PortfolioMasonryFiveColumnFullWidthPage;