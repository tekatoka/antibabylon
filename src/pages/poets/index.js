import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AppContext } from '../../App';
import { Layout } from '../../Layout';
import poetsData from '../../data/poets';
import PoetDetails from '../../components/person/poetDetails';

const PoetsPage = () => {
    const context = React.useContext(AppContext);

    const view = (person, fullBio) => {
        return <PoetDetails person={person} fullBio={fullBio} onClick={() => context.showModal(view(person, true))} />
    }

    return (
        <Layout>
            <Container className='mb-20'>
                <Row>
                    {poetsData.map((poet, idx) => {
                        return <Col className="container-person" md={4} key={idx}>
                            {view(poet)}
                        </Col>
                    })}
                </Row>
            </Container>
        </Layout>
    );
};

export default PoetsPage;