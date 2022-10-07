import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AppContext } from '../../App';
import { Layout } from '../../Layout';
import poetsData from '../../data/poets';
import PersonDetails from '../../components/person';

const MembersPage = () => {
    const context = React.useContext(AppContext);

    const view = (person, type, fullBio) => {
        return <PersonDetails person={person} type={type} fullBio={fullBio} onClick={() => context.showModal(view(person, "poet", true))} />
    }

    return (
        <Layout>
            <Container className='mb-20'>
                <Row>
                    {poetsData.map((poet, idx) => {
                        return <Col className="container-person" md={4} key={idx}>
                            {view(poet, "poet")}
                        </Col>
                    })}
                </Row>
            </Container>
        </Layout>
    );
};

export default MembersPage;