import React from 'react';

// File imported
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import BannerPersonalPortfolio from "../../components/HeroBanner/PersonalPortfolio";
import PersonalPortfolio from "../../container/portfolio/PersonalPortfolio";
import PersonalPortfolioService from "../../container/service";
import PersonalPortfolioCareer from '../../container/career';
import Contact from "../../container/contact";
import Footer from "../../components/footer/FooterThree";

const HomePage = () => {
    return (
        <div className={'main-wrapper p-4'}>
            <div class='inner-wrapper'>
                <Header classes={'position-static'} />
                <SideHeader mobile={true} />
                <BannerPersonalPortfolio />
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
