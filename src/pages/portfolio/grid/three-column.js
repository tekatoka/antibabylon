import React, { Fragment } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioGridThreeColumn from "../../../templates/portfolio/grid/three-column";
import FooterThree from "../../../components/footer/FooterThree";
import portfolioData from '../../../data/portfolio'

const PortfolioGridThreeColumnPage = () => {
    const portfolios = portfolioData;

    return (
        <div className={`main-wrapper p-4`}>
            <div class='inner-wrapper'>
                <Header classes={'position-static'} />
                <SideHeader mobile={true} />
                <PortfolioGridThreeColumn portfolios={portfolios} />
                <FooterThree position={'fixed'} />
            </div>
        </div>
    );
};

export default PortfolioGridThreeColumnPage;