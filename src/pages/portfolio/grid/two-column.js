import React, { Fragment, useState } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridTwoColumn from "../../../templates/portfolio/grid/two-column";
import portfolioData from '../../../data/portfolio'

const PortfolioGridTwoColumnPage = () => {
    const [count, setCount] = useState(8);
    const portfolios = portfolioData.slice(0, count);

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioGridTwoColumn portfolios={portfolios} />
        </Fragment>
    );
};

export default PortfolioGridTwoColumnPage;