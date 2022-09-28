import React, { Fragment } from 'react';
import Contact from "../../container/contact";
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import FooterThree from "../../components/footer/FooterThree";

const ContactPage = () => {
    return (
        <div className={`main-wrapper p-4`}>
            <div class='inner-wrapper'>
                <Header classes={'position-static'} />
                <SideHeader mobile={true} />
                <Contact />
                <FooterThree position={'static'} />
            </div>
        </div>
    );
};

export default ContactPage;