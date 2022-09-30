import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ConnectElements from 'react-connect-elements';
import countries from '../../data/countries';

const CountriesMap = () => {

    return (
        <div className="section pt-180 pt-lg-80 pt-md-80 pt-sm-80 pt-xs-50">
            {/*  pb-120 pb-lg-80 pb-md-80 pb-sm-80 pb-xs-50 */}
            <Container style={{ height: "200px" }} className="mb-20">
                <Row className={'country-map mbn-30'} style={{ position: "relative" }}>
                    {countries.map((country, idx) => (
                        <>
                            <div id={country.name.toLowerCase()} className={"country"} key={country.id}>
                                <a href={`/events/${country.name.toLowerCase()}`}>
                                    <img src={require('../../assets/images/' + country.thumb)} alt={country.name} />
                                    <br />
                                    <span className='country-name'>{country.name}</span>
                                </a>
                            </div>
                        </>
                    ))}
                    <ConnectElements
                        selector=".country-map"
                        strokeWidth={1}
                        elements={[{ from: '#georgia', to: '#armenia' }, { from: '#armenia', to: '#moldova' }, { from: '#moldova', to: '#ukraine' }, { from: '#ukraine', to: '#germany' }]}
                    />
                </Row>
            </Container>
        </div>
    );
};

export default CountriesMap;