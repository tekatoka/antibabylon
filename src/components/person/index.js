import React from 'react';
import PropTypes from "prop-types";
import { SocialIcon } from 'react-social-icons';

const PersonDetails = ({ person, type, fullBio }) => {
    return (
        <div className={`${type} mb-20`}>
            <div className={`main-image person-image ${person.country.toLowerCase()}`}>
                <img src={require('../../assets/images/' + person.photo)} alt={person.name} />
            </div>
            <div className='person-title mb-30 mt-30'>{person.name}</div>
            {person.country && <span className={`country-label ${person.country.toLowerCase()} mb-30`}>{person.country}</span>}
            <div className='main-info-wrapper'>
                <div className='mt-20'>{fullBio ? person.bio : person.shortBio}</div>
            </div>
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
    type: PropTypes.string.isRequired
};

export default PersonDetails;
