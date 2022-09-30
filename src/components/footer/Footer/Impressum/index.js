import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ImpressumTitle from "../../../../assets/images/titles/impressum.png";

const Impressum = () => {
    return (
        <>
            <Row className={'align-items-center'}>
                <Col xs={1} sm={3}></Col>
                <Col xs={{ size: 11 }} sm={9}>
                    <img src={ImpressumTitle} className={"footer-title"} alt={"Impressum"} title={"Impressum"} />
                    <div className='mt-20'>
                        Es gilt die deutsche Rechtsprechung.
                    </div>
                    <div className='mt-20 mb-40 text-500' style={{ fontSize: "1rem" }}>
                        PANDA platforma
                        <br />
                        Knaackstr. 97
                        <br />
                        10435 Berlin
                    </div>
                    <div className='mt-20 mb-40 text-500' style={{ fontSize: "1rem" }}>
                        Inhaltsverantwortliche:
                    </div>
                    <div className='mt-20 mb-40' style={{ fontSize: "1rem" }}>
                        Vereinsvorsitzenpe PANDA platforma
                        <br />
                        Svetlana Müller, Daniel Adasinskiy
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default Impressum;
