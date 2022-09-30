import React from 'react';

// File imported
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import Contact from "../../container/contact";
import Footer from "../../components/footer/Footer";
import MainSlider from '../../components/slider';
import CountriesMap from '../../container/project/CountriesMap';
import ProjectMission from '../../container/project/ProjectMission';
import ProjectPhases from '../../container/project/ProjectPhases';

const HomePage = () => {
    return (
        <div className={'main-wrapper p-4'}>
            <div class='inner-wrapper'>
                <Header classes={'position-static'} />
                <SideHeader mobile={true} />
                <MainSlider />
                <CountriesMap />
                <ProjectMission />
                <ProjectPhases />
                <Contact />
                <Footer position={'static'} />
            </div>
        </div>
    );
};

export default HomePage;
