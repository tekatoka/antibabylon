import React from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import ContentAboutPage from "../../templates/about-page";

const AboutPage = () => {
    return (
        <div className={`main-wrapper p-4`}>
            <Header />
            <SideHeader mobile={true} />
            <ContentAboutPage />
        </div>
    );
};

export default AboutPage;