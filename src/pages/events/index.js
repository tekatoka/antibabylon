import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Layout } from '../../Layout';
import poetsData from '../../data/poets';
import PersonDetails from '../../components/person';

const EventsPage = () => {
    return (
        <Layout>
            <Container className='mb-20'>
                <Row>
            {poetsData.map((poet, idx) => {
                return <Col md={4} ><PersonDetails person={poet} /></Col>
            })}
            </Row>
            </Container>
        </Layout>
    );
};

export default EventsPage;