import React, { Fragment, useState } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridFourColumn from "../../../templates/portfolio/grid/four-column";
import portfolioData from '../../../data/portfolio'

const PortfolioGridFourColumnPage = () => {
    const [count, setCount] = useState(12);
    const portfolios = portfolioData.slice(0, count);

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioGridFourColumn portfolios={portfolios} fullWidth={false} />
        </Fragment>
    );
};

export default PortfolioGridFourColumnPage;