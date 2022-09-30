import React, { Fragment } from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import TemplateService from "../../templates/service";

const ContactPage = () => {
    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <TemplateService />
        </Fragment>
    );
};

export default ContactPage;