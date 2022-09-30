import React from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import ContentImpressum from '../../container/impressum';

const ImpressumPage = () => {
    return (
        <div className={`main-wrapper`}>
            <Header />
            <SideHeader mobile={true} />
            <ContentImpressum />
        </div>
    );
};

export default ImpressumPage;