import React from 'react';

// File imported
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import PersonalPortfolioService from "../../container/service";
import PersonalPortfolioCareer from '../../container/career';
import PersonalPortfolio from "../../container/portfolio/PersonalPortfolio";
import Contact from "../../container/contact";
import Footer from "../../components/footer/FooterThree";
import MainSlider from '../../components/slider';

const HomePage = () => {
    return (
        <div className={'main-wrapper p-4'}>
            <div class='inner-wrapper'>
                <Header classes={'position-static'} />
                <SideHeader mobile={true} />
                <MainSlider />
                <PersonalPortfolio />
                <PersonalPortfolioService />
                <PersonalPortfolioCareer />
                <Contact />
                <Footer position={'static'} />
            </div>
        </div>
    );
};

export default HomePage;
