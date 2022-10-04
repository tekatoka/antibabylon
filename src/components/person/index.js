import React from 'react';
import PropTypes from "prop-types";
import { SocialIcon } from 'react-social-icons';
//import { Link } from "react-router-dom";
import { ReactComponent as FramePortrait } from '../../assets/images/frame-portrait.svg'

const PersonDetails = ({ person }) => {
    return (
        <div className='mb-20'>
            <div className={`person-image ${person.country.toLowerCase()}`}>
            <img src={require('../../assets/images/' + person.photo)} alt={person.name}/>
            </div>
            <div className='person-title mb-30 mt-30'>{person.name}</div>
            {person.country && <h3>{person.country}</h3>}
            <br />
            {person.shortBio}
            {person.social && 
                <div className='mt-20 mb-40'>
                            {person.social.map((social, idx) => (
                                <SocialIcon key={idx} url={`${social}`} bgColor="#333333" />
                            ))}
                </div>
            }
        </div>
    );
};

PersonDetails.propTypes = {
    person: PropTypes.object.isRequired,
};

export default PersonDetails;
