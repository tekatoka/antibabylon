import React, { Fragment, useState } from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import TemplateTeamPage from "../../templates/team";

import teamMembers from '../../data/team';

const TeamPage = () => {
    const [teamPerPage, setTeamPerPage] = useState(3);
    const teams = teamMembers.slice(0, teamPerPage);

    return (
        <Fragment>
            <Header classes={'position-static'} />
            <SideHeader mobile={true} />
            <TemplateTeamPage teams={teams} />
        </Fragment>
    );
};

export default TeamPage;