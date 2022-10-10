import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import eventsData from '../../data/events';
import Xarrow from 'react-xarrows';

const Event = ({ event }) => {
    return (
        <div className='mb-30' id={`${event.country.toLowerCase()}-container`}>
            <h2 className='dharma'>{event.date} | {event.time}</h2>
            <div>
                <h4 className="text-600">{event.site}</h4>
                <div className='text-600'>{event.city}, {event.country === "Ukraine" ? "Germany (for Ukraine)" : event.country}</div>
            </div>
        </div>
    )
}

const ProjectDates = () => {

    const arrowProps = {
        strokeWidth: 1.75,
        color: "#333",
        path: "straight",
        showTail: false,
        showHead: false,
        animateDrawing: true
    }

    return (
        <div id="project-dates" className="section">
            <div className="section-wrap section pt-80 pt-xs-50 pb-30 pb-lg-30 pb-md-30 pb-sm-30 pb-xs-20 mb-0">
                <Container>
                    <Row className={'text-center'}>
                        <Col className='custom-title mb-40'>
                            Events
                        </Col>
                    </Row>


                    {eventsData.map((event, idx) => {
                        return <Row>
                            <Link to={`/events/${event.country.toLowerCase()}`}><Col xs={12}>{<Event event={event} />}</Col></Link>
                        </Row>
                    })}
                    <Xarrow {...arrowProps} start={'georgia-container'} end={'armenia-container'} />
                    <Xarrow {...arrowProps} start={'armenia-container'} end={'moldova-container'} />
                    <Xarrow {...arrowProps} start={'moldova-container'} end={'ukraine-container'} />
                    <Xarrow {...arrowProps} start={'ukraine-container'} end={'germany-container'} />
                </Container>
            </div>
        </div>
    );
};

export default ProjectDates;