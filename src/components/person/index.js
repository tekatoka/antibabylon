import React from 'react';
import PropTypes from "prop-types";
import { SocialIcon } from 'react-social-icons';

const PersonDetails = ({ person, type, fullBio, onClick }) => {
    return (
        <div className={`${type} mb-20`}>
            <div onClick={onClick}>
                <div className={`main-image person-image ${person.country.toLowerCase()}`}>
                    <img src={require('../../assets/images/' + person.photo)} alt={person.name} title={person.name} />
                </div>
                <div className="photo-credit">photo &copy; {person.photoCredit}</div>
                <div className='person-title mb-30 mt-30'>{person.name}</div>
                {person.country && <span className={`country-label ${person.country.toLowerCase()} mb-30`}>{person.country}</span>}
                <div className='main-info-wrapper'>
                    <div
                        className='mt-20'
                        dangerouslySetInnerHTML={{ __html: fullBio ? person.bio : person.shortBio }}
                    />
                </div>
            </div>
            {person.social &&
                <div className='mt-20 mb-40'>
                    {person.social.map((social, idx) => (
                        <SocialIcon key={idx} url={`${social}`} bgColor="#333333" target={"_blank"} rel="noopener noreferrer" />
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
