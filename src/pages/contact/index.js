import React, { Fragment } from 'react';
import Contact from "../../container/contact";
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";

const ContactPage = () => {
    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <Contact />
        </Fragment>
    );
};

export default ContactPage;