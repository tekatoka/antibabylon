import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AppContext } from '../../App';
import { Layout } from '../../Layout';
import juryData from '../../data/jury';
import JuryDetails from '../../components/person/juryDetails';

const JuryPage = () => {

    const context = React.useContext(AppContext);
    const view = (person, fullBio) => {
        return <JuryDetails person={person} fullBio={fullBio} onClick={() => context.showModal(view(person, true))} />
    }

    return (
        <Layout>
            <Container className='mb-20'>
                <Row>
                    {juryData.map((juryMember, idx) => {
                        return <Col className="container-person" md={15} xs={6} key={idx}>
                            {view(juryMember)}
                        </Col>
                    })}
                </Row>
            </Container>
        </Layout>
    );
};

export default JuryPage;