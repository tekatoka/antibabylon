import React from 'react';
import { Row, Col } from 'react-bootstrap';
import partners from '../../../../data/partners';

const Partners = () => {
    return (
        <Row className={'footer-partners align-items-center pt-20'}>
            <Col xs={{ size: 12 }}>
                <Row className='footer-social mt-20 mb-20'>
                    {partners.map(p => (
                        <Col xs={3}>
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
