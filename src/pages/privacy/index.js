import React from 'react';
import Header from "../../components/header/HeaderOne";
import SideHeader from "../../components/SideHeader";
import ContentPrivacy from '../../container/privacy';

const PrivacyPage = () => {
    return (
        <div className={`main-wrapper`}>
            <Header />
            <SideHeader mobile={true} />
            <ContentPrivacy />
        </div>
    );
};

export default PrivacyPage;