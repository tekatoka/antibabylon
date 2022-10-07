import React from 'react';

// File imported
import { Layout } from '../../Layout';
import MainSlider from '../../components/slider';
import CountriesMap from '../../components/project/CountriesMap';
import ProjectMission from '../../container/project/ProjectMission';
import ProjectPhases from '../../container/project/ProjectPhases';
import ProjectInfo from '../../container/project/ProjectInfo';
import ProjectDates from '../../container/project/ProjectDates';

const HomePage = () => {
    return (
        <Layout>
            <MainSlider />
            <CountriesMap />
            <ProjectMission />
            <ProjectDates />
            <ProjectPhases />
            <ProjectInfo />
        </Layout>
    );
}

export default HomePage;
