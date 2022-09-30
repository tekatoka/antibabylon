import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import ContactsTitle from "../../../../assets/images/titles/contacts.png";
import socialIcons from '../../../../data/social-networks';

const Contacts = ({ position }) => {
    return (
        <>
            <Row className={'align-items-center'}>
                <Col xs={1} sm={3}></Col>
                <Col xs={{ size: 11 }} sm={9}>
                    <img src={ContactsTitle} alt={"Contacts"} title={"Contacts"} style={{ height: "3rem" }} />
                    <div className='mt-20'>
                        <a href="mailto:info@antibabylon.org" target="_blank" rel="noopener noreferrer">info@antibabylon.org</a>
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
