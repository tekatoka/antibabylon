import React from 'react';

const TeamMember = ({ name, role, profilePhoto, socials }) => {
    const photo = profilePhoto != "" ? profilePhoto : "team-1.jpg"
    return (
        <div className="team-member mb-20">
            <div className="team-inner">
                <div className={`main-image person-image`}>
                    <img src={require('../../assets/images/team/' + photo)} alt={name} />
                </div>
                <div className='person-title mb-30 mt-30'>{name}</div>
                <div className={`role-label mb-30`}>{role}</div>
            </div>
        </div>
    );
};

export default TeamMember;