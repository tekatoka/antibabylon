import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AppContext } from '../../App';
import { Layout } from '../../Layout';
import poetsData from '../../data/poets';
import PersonDetails from '../../components/person';

const MembersPage = () => {
    const context = React.useContext(AppContext);
    return (
        <Layout>
            <Container className='container-person poet mb-20'>
                <Row>
                    {poetsData.map((poet, idx) => {
                        return <Col md={4} key={idx} onClick={() => context.showModal(<PersonDetails person={poet} type={"poet"} />)}>
                            <PersonDetails person={poet} type={"poet"} />
                        </Col>
                    })}
                </Row>
            </Container>
        </Layout>
    );
};

export default MembersPage;