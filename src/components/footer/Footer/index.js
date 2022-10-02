import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Contacts from './Contacts';
import Impressum from './Impressum';
import Partners from './Partners';

const Footer = ({ position }) => {
    return (
        <>
        <div id="footer" className={`footer-section section position-${position} pt-30 pb-0`}>
        <div id="footer-separator"><Container></Container></div>
            <div className="container-full footer-rows">
                <Row>
                    <Col xs={{ span: 12, order: 2 }} sm={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }} lg={{ span: 6, order: 1 }}>
                        <Contacts />
                        <Partners />
                    </Col>
                    <Col xs={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} lg={{ span: 6, order: 1 }}><Impressum /></Col>
                </Row>
            </div>
        </div>
        </>
    );
};

export default Footer;
