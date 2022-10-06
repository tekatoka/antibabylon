import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TimeLine from './projectTimeline/';

const TimelineHeader = ({ classes, text }) => {
    return <h3 className={`text-600 ${classes}`}>{text}</h3>
}

const ProjectTimeline = () => {
    return (
        <div id="project-timeline" className="section">
            <div className="pt-0 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50">
                <Container fluid>
                    <Row>
                        <Col md={4} sm={0} className={'text-right text-medium'}>
                            <TimelineHeader classes={"d-large-only"} text="October 2022" />
                        </Col>
                        <Col md={8} sm={12} className={'text-left'}>
                            <div className='right-table-wrapper pb-50'>
                                <TimeLine />
                                <TimelineHeader classes={"d-small-only"} text="October 2022" />
                                <h3 className='text-600'>First phase</h3>
                                Five online workshops (approx. once a week), where the participants will be required to make poetic translations
                                of each others’ texts into their native language.
                            </div>
                        </Col>
                    </Row>

                    <Row >
                        <Col md={4} sm={0} className={'text-right text-medium'}>

                            <TimelineHeader classes={"d-large-only"} text="November 14-28, 2022" />
                        </Col>
                        <Col md={8} sm={12} className={'text-left mb-00'}>
                            <div className='right-table-wrapper'>
                                <TimelineHeader classes={"d-small-only"} text="November 14-28, 2022" />
                                <h3 className='text-600'>Second phase</h3>
                                Participants will travel through four countries with a live performance event in each capital city.
                                During the performances, each poet* reads his/her text in his/her native language,
                                while the translations will be shown on the screen as subtitles.
                                The finale of the trip will be a poetry and culture festival at <a href="https://panda-platforma.berlin" target="_blank" rel="noopener noreferrer" >PANDA platforma</a> in Berlin,
                                with an international jury and special guests. Due to the fact that Russia is waging
                                an aggressive war against Ukraine, the Ukrainian performance will also take place in Berlin.
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ProjectTimeline;