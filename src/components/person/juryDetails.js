import React, { useRef } from 'react';
import PropTypes from "prop-types";
import PersonInfo from './personInfo';
import { ScrollToTop } from '../ScrollToTop/ScrollToTop';

const JuryDetails = ({ person, fullBio, onClick }) => {
    const topRef = useRef();
    return (
        <>
            <div className={`jury p-4 mb-20 relative`}>
                <div onClick={onClick} ref={topRef}>
                    <PersonInfo person={person} fullBio={fullBio} />
                </div>
                {fullBio && <ScrollToTop topRef={topRef} />}
            </div>
        </>
    );
};

JuryDetails.propTypes = {
    person: PropTypes.object.isRequired
};

export default JuryDetails;
