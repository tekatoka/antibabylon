import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Layout } from '../../Layout';
import poetsData from '../../data/poets';
import PersonDetails from '../../components/person';

const MembersPage = () => {
    return (
        <Layout>
            <Container className='mb-20 container-person'>
                <Row>
            {poetsData.map((poet, idx) => {
                return <Col md={4} className="poet"><PersonDetails person={poet} /></Col>
            })}
            </Row>
            </Container>
        </Layout>
    );
};

export default MembersPage;