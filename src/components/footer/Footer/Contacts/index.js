import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import socialIcons from '../../../../data/social-networks';

const Contacts = ({ position }) => {
    return (
        <>
            <Row className={'align-items-center'}>
                <Col xs={1} sm={3}></Col>
                <Col xs={{ size: 11 }} sm={9}>
                    <div className='custom-title'>Contacts</div>
                    <div className='mt-20'>
                        <a href="mailto:project@antibabylon.org" target="_blank" rel="noopener noreferrer">project@antibabylon.org</a>
                    </div>
                    <div className='footer-social mt-20 mb-40'>
                        {socialIcons.map(social => (
                            <SocialIcon key={social?.id} url={`${social?.url}`} bgColor="#333333" />
                        ))}
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Contacts;
