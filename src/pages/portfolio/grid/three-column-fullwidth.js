import React, { Fragment, useState } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridThreeColumn from "../../../templates/portfolio/grid/three-column";

import portfolioData from '../../../data/portfolio'

const PortfolioGridThreeColumnFullWidthPage = () => {
    const [count, setCount] = useState(9);
    const portfolios = portfolioData.slice(0, count);

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioGridThreeColumn portfolios={portfolios} fullWidth={true} />
        </Fragment>
    );
};

export default PortfolioGridThreeColumnFullWidthPage;