import React, { Fragment, useState } from 'react';
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import PortfolioMasonryThreeColumn from "../../../templates/portfolio/masonry/three-column";
import FooterTwo from "../../../components/footer/FooterTwo";
import portfolioData from '../../../data/portfolio';

const PortfolioMasonryThreeColumnFullWidthPage = () => {
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
        <div className={`main-wrapper p-4`}>
            <div class='inner-wrapper'>
                <Header classes={'position-static'} />
                <SideHeader mobile={true} />
                <PortfolioMasonryThreeColumn portfolios={portfolios} loading={loading} fullWidth={true} />
                <FooterTwo allItems={allItems} loadHandler={loadMore} />
            </div>
        </div>
    );
};

export default PortfolioMasonryThreeColumnFullWidthPage;