import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Layout } from '../../Layout';
import juryData from '../../data/jury';
import PersonDetails from '../../components/person';

const JuryPage = () => {
    return (
        <Layout>
            <Container className='container-person mb-20'>
                <Row>
                    {juryData.map((juryMember, idx) => {
                        return <Col md={2} xs={6} className="jury"><PersonDetails person={juryMember} type={"jury"} /></Col>
                    })}
                </Row>
            </Container>
        </Layout>
    );
};

export default JuryPage;