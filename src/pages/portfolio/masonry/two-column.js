import React, { Fragment, useState } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import portfolioData from '../../../data/portfolio';
import PortfolioMasonryTwoColumn from "../../../templates/portfolio/masonry/two-column";

const PortfolioMasonryTwoColumnPage = () => {
    const [count, setCount] = useState(8);
    const portfolios = portfolioData.slice(0, count);

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioMasonryTwoColumn portfolios={portfolios} />
        </Fragment>
    );
};

export default PortfolioMasonryTwoColumnPage;