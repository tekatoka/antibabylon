import React, { Fragment } from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import TemplateTeamPage from "../../templates/team";

import teamMembers from '../../data/team';

const TeamPage = () => {
    const teams = teamMembers;

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <TemplateTeamPage teams={teams} />
        </Fragment>
    );
};

export default TeamPage;