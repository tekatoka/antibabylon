import React from 'react';
import { Row, Col } from 'react-bootstrap';
import partners from '../../../../data/partners';

const Partners = () => {
    return (
        <Row className={'footer-partners align-items-center pt-20'}>
            <Col xs={{ size: 12 }}>
                <Row className='footer-social mt-20 mb-20'>
                    {partners.map((p, i) => (
                        // <Col sm={4} md={2} key={i}>
                        <Col xs={3} sm={2} key={i}>
                            <a href={p.link} target="_blank" rel="noopener noreferrer">
                                <img src={require('../../../../assets/images/' + p.logo)} alt={p.title} />
                            </a>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
};

export default Partners;
