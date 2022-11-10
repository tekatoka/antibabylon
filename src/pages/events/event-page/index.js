import React, { useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import { Layout } from '../../../Layout';
import eventsData from '../../../data/events';
import Error404 from '../../../components/error';
import CountriesMap from '../../../components/project/CountriesMap';
import Map from '../../../components/map';

const EventPage = () => {

    let { countryName } = useParams();
    const { pathname } = useLocation();

    const url = window.location.pathname.split('/').pop();

    useEffect(() => {
        window.scrollTo(0, 0);

        const mainWrapper = document.getElementById("main-wrapper");
        mainWrapper.className = `main-wrapper p-4 ${countryName}`;
    }, [, url])

    const event = eventsData.find(item => item.country.toLowerCase() === countryName.toLowerCase());
    const country = event ? event.country.toLowerCase() : "";

    return (
        <Layout>
            {event ?
                <>
                    <Container className='mb-60'>
                        <Row className='event'>
                            <Col xs={12}>

                                <div className={`event-cover`}>
                                    <div className={`mb-40`}>
                                        <img src={require('../../../assets/images/events/' + event.cover)} alt={`${event.country} - ${event.date}`} title={`${event.country} - ${event.date}`} />
                                    </div>
                                </div>

                                <div className={`event-title`}>
                                    {event.date}
                                </div>

                                <div className={`${country} mt-30`}>
                                    <div className='mb-30'>
                                        <span className={`country-label ${country}`}>{event.country}</span>
                                    </div>
                                    <div className='event-site'>{event.time && event.time + " | "}{event.site}</div>
                                    {event.address ? <><div className='event-address'>{event.address}</div>
                                        <div className='mb-40 mt-40'>
                                            <Map address={event.address} />
                                        </div></> : <div>more info TBA</div>}
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