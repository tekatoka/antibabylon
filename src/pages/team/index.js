import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Layout } from '../../Layout';
import teamData from '../../data/team';
import TeamMember from '../../components/team';

const TeamPage = () => {

    return (
        <Layout>
            <Container className='mb-20'>
                <Row>
                    {teamData.map((member, i) => {
                        return <Col xs={3} md={15} className="container-team" key={i}>
                                        <TeamMember {...member} />
                                    </Col>
                                })}
                </Row>
            </Container>
        </Layout>
    );
};

export default TeamPage;