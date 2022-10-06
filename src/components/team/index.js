import React from 'react';

const TeamMember = ({ name, role, profilePhoto, socials }) => {
    return (
        <div className="team-member mb-20">
            <div className="team-inner">
                <div className={`main-image person-image`}>
                    <img src={require('../../assets/images/team/' + profilePhoto)} alt={name} />
                </div>
                <div className='person-title mb-30 mt-30'>{name}</div>
                <div className={`role-label mb-30`}>{role}</div>
                {socials &&
                    <div className='mt-20 mb-40'>
                        {socials.map((social, idx) => (

                            <a key={idx}
                                href={`${social.link}`}
                                target="_blank"
                                rel="noreferrer noopener"
                                className='mr-10'
                            >
                                <i className={`fa fa-${social.media}`} />
                            </a>
                        ))}
                    </div>
                }
            </div>
        </div>
    );
};

export default TeamMember;