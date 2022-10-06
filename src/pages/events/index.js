import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Layout } from '../../Layout';
import eventsData from '../../data/events';
import Event from '../../components/event';

const EventsPage = () => {
    return (
        <Layout>
            <Container className='mb-20'>
                <Row className='events-list'>
                    {eventsData.map((event, idx) => {
                        return <Col key={idx} xs={12} className={`event ${event.country.toLowerCase()}`}>
                            <Event event={event} />
                        </Col>
                    })}
                </Row>
            </Container>
        </Layout>
    );
};

export default EventsPage;