import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectMissionTitle from "../../assets/images/titles/project-mission.png";

const ProjectMission = () => {
    return (
        <div id="project-mission" className="section">
            <div className="section-wrap section pt-80 pt-xs-50 pb-80 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50 mb-140">
                <Container>
                    <Row className={'text-center'}>
                        <Col className='custom-title mb-40'>
                            Project Mission
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} className={'two-columns mb-40 mb-xs-30'}>
                            The name of the project refers to the story of the Tower of Babel.
                            During its construction God mixed up the languages of people so they could not understand each other and could not build the tower to the sky.
                            Some may interpret this story using the symbols of paternalism, oppression and aggression. But this is exactly what we stand against.
                            <br /><br />
                            Unlike the heroes of the legend, we do not want to build a tower, the symbol of a rigid vertical hierarchy;
                            we would like to create a free and safe space of horizontal communication, assuming that the art of poetry is capable
                            of overcoming linguistic and cultural barriers.
                            <br /><br />
                            But is it? How free is the poetry word? What are the themes that excite contemporary poets*?
                            Do they want to appeal directly to readers/listeners/viewers, or do they rather want to stay within their professional environment?
                            Can modern poetry be an adequate tool for a critical examination of reality?
                            <br /><br />
                            We don't have the answers, we ask the questions. In our project we invite participants to try to find a common poetic language
                            and present the results of their creative search to the public.
                            <br />
                            <br />
                            <span className='text-500'>
                                It is the first edition of the antiBabylon poetry project that will be held in five countries which used to be under the Soviet influence
                                (Armenia, Georgia, Germany, Moldova and Ukraine) and invites poets* interested in performance poetry,
                                spoken word poetry and developing their communication skills in an international poetry environment.
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ProjectMission;