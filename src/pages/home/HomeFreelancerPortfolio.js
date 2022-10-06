import React from 'react';

// File imported
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import BannerFreelancerPortfolio from "../../components/HeroBanner/FreelancerPortfolio";
import PersonalPortfolio from "../../container/portfolio/PersonalPortfolio";
import PersonalPortfolioService from "../../container/service";
import PersonalPortfolioTeam from "../../container/team";
import Contact from "../../container/contact";

const HomePage = () => {
    return (
        <div className={'main-wrapper p-0'}>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <BannerFreelancerPortfolio />
            <PersonalPortfolio />
            <PersonalPortfolioService />
            <PersonalPortfolioTeam />
            <Contact />
        </div>
    );
};

export default HomePage;
