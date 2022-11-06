import React from 'react';

const TeamMember = ({ name, role, profilePhoto, socials, photoCredit }) => {
    const photo = profilePhoto !== "" ? profilePhoto : "team-1.jpg"
    return (
        <div className="team-member mb-50">
            <div className="team-inner">
                <div className={`main-image person-image`}>
                    <img src={require('../../assets/images/team/' + photo)} alt={name} title={name} />
                </div>
                <div className="photo-credit">photo &copy; {photoCredit}</div>
                <div className='person-title mb-20 mt-10'>{name}</div>
                <div className={`role-label mb-30`}>{role}</div>
            </div>
        </div>
    );
};

export default TeamMember;