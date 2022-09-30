import React, { Fragment, useState } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioMasonryFourColumn from "../../../templates/portfolio/masonry/four-column";
import portfolioData from '../../../data/portfolio';

const PortfolioMasonryFourColumnPage = () => {

    const [count, setCount] = useState(12);
    const portfolios = portfolioData.slice(0, count);

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <PortfolioMasonryFourColumn portfolios={portfolios} fullWidth={false} />
        </Fragment>
    );
};

export default PortfolioMasonryFourColumnPage;