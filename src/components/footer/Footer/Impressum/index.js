import React from 'react';
import { Row, Col } from 'react-bootstrap';
import impressumData from '../../../../data/impressum';

const Impressum = () => {
    return (
        <>
            <Row className={'align-items-center'}>
                <Col xs={1} sm={3}></Col>
                <Col xs={{ size: 11 }} sm={9}>
                    <div className='custom-title'>Impressum</div>
                    <div className='mt-20'>
                        Es gilt die deutsche Rechtsprechung.
                    </div>
                    <div className='mt-20 mb-20 mb-sm-10 text-500' style={{ fontSize: "1rem" }}>
                        {impressumData["address-line-1"]}
                        <br />
                        {impressumData["address-line-2"]}
                        <br />
                        {impressumData["address-line-3"]}
                    </div>
                    <div className='mt-20 mb-20 mb-sm-10 text-500' style={{ fontSize: "1rem" }}>
                        Inhaltsverantwortliche:
                    </div>
                    <div className='mt-20 mb-20 mb-sm-10' style={{ fontSize: "1rem" }}>
                        {impressumData.role}
                        <br />
                        {impressumData.name}
                    </div>
                    <div className='mb-sm-10 mb-xs-20'><a href="/privacy">Privacy policy</a> | &copy; 2022 <a href="https://panda-platforma.berlin" target="_blank" rel="noopener noreferrer">PANDA platforma</a></div>
                </Col>
            </Row>
        </>
    );
};

export default Impressum;
