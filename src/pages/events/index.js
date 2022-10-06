import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Layout } from '../../Layout';
import eventsData from '../../data/events';
import EventDetails from '../../components/event';

const EventsPage = () => {
    return (
        <Layout>
            <Container className='mb-20'>
                <Row className='events-list'>
                    {eventsData.map((event, idx) => {
                        return <Col xs={12} className={`event ${event.country.toLowerCase()}`}><EventDetails event={event} /></Col>
                    })}
                </Row>
            </Container>
        </Layout>
    );
};

export default EventsPage;