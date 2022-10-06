import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectTimeline from '../../components/project/ProjectTimeline';

const ProjectPhases = () => {
    return (
        <div id="project-phases" className="section">
            {/* style={{ backgroundImage: `url(${serviceBg})` }} */}
            <div className="section-wrap section pt-0 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
                <Container>
                    <Row className={'text-center'}>
                        <Col className='custom-title mb-40'>
                            Project Phases
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} className={'mb-40 mb-xs-30'}>
                            <ProjectTimeline />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ProjectPhases;