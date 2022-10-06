import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AppContext } from '../../App';
import { Layout } from '../../Layout';
import juryData from '../../data/jury';
import PersonDetails from '../../components/person';

const JuryPage = () => {

    const context = React.useContext(AppContext);
    const view = (person, type, fullBio) => {
        return <PersonDetails person={person} type={type} fullBio={fullBio} />
    }

    return (
        <Layout>
            <Container className='mb-20'>
                <Row>
                    {juryData.map((juryMember, idx) => {
                        return <Col className="container-person" lg={2} md={4} xs={6} key={idx} onClick={() => context.showModal(view(juryMember, "jury", true))}>
                            {view(juryMember, "jury")}
                        </Col>
                    })}
                </Row>
            </Container>
        </Layout>
    );
};

export default JuryPage;