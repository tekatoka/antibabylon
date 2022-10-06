import React from 'react';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { Layout } from '../../../Layout';
import eventsData from '../../../data/events';
import Error404 from '../../../components/error';
import CountriesMap from '../../../components/project/CountriesMap';

const EventPage = () => {

    let { countryName } = useParams();

    const event = eventsData.find(item => item.country.toLowerCase() === countryName.toLowerCase());
    const country = event ? event.country.toLowerCase() : "";

    return (
        <Layout>
            {event ?
                <>
                    <Container className='mb-60'>
                        <Row className='event'>
                            <Col xs={12}>
                                <div className={`event-title`}>
                                    {event.date}
                                </div>

                                <div className={`${country} mt-30`}>
                                    <div className='mb-30'>
                                        <span className={`country-label ${country}`}>{event.country}</span>
                                    </div>
                                    <div className='event-cite'>{event.cite}</div>
                                    <div className='event-address'>{event.address}</div>
                                    <div className='mb-40 mt-40'>
                                        <iframe
                                            width="600"
                                            height="500"
                                            className='w-100'
                                            title="gmap-canvas"
                                            src="https://maps.google.com/maps?q=10439 Kulturbrauerei,Berlin&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                        </iframe>
                                        {/* <iframe
                                            title='google-map'
                                            width="600"
                                            height="450"
                                            className='w-100'
                                            style={{ border: "0" }}
                                            loading="lazy"
                                            allowfullscreen
                                            //referrerpolicy="no-referrer-when-downgrade"
                                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCLSNNuZJpD5acdJ7gP2YJjBRAtiY7ReEY&q=Eiffel+Tower,Paris+France">
                                        </iframe> */}
                                    </div>
                                    <div className='event-description'>{event.description}</div>
                                </div>
                                <CountriesMap activeCountry={country} />
                            </Col>
                        </Row>
                    </Container>
                </>
                : <Error404 />
            }
        </Layout >
    );
};

export default EventPage;