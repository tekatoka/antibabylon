import React from 'react';

// File imported
import Header from '../../components/header/HeaderOne'
import SideHeader from "../../components/SideHeader";
import PortfolioDefault from "../../container/portfolio/PortfolioDefault";

const HomeDefault = () => {

    const slider = React.useRef(null);

    const SlideNext = () => {
        slider.current.slickNext();
    };

    const SlidePrev = () => {
        slider.current.slickPrev();
    };

    return (
        <div className={'main-wrapper'}>
            <Header />
            <SideHeader mobile={true} />
            <PortfolioDefault ref={slider} />
        </div>
    );
};

export default HomeDefault;
