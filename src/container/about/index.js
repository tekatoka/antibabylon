import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectInfo from '../project/ProjectInfo';
import ProjectMission from '../project/ProjectMission';

const ContentAbout = () => {
    return (
        <div className={'section'} id="about">
            <Container className={'bg-grey'}>
                <Row>
                    <Col lg={12} className={'mb-100 p-4'}>
                        <ProjectMission />
                        <ProjectInfo />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContentAbout;