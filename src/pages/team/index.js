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
                    {teamData.map((category, i) => {
                        return <Col key={i} xs={12} className='mb-60'>
                            <h2 className='team-category-name mb-40'>{category.category}</h2>
                            <Row>
                                {category.members.map((member, j) => {
                                    return <Col xs={4} md={2} className="container-team" key={j}>
                                        <TeamMember {...member} />
                                    </Col>
                                })}
                            </Row>
                        </Col>

                    })}
                </Row>
            </Container>
        </Layout>
    );
};

export default TeamPage;