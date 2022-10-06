import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import countries from '../../data/countries';
import ReactConnectElements from '../../hooks/ConnectElements';

const CountriesMap = () => {

    const [orientation, setOrientation] = useState(window.screen.orientation.type);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', changeWindowWidth);
        window.screen.orientation.onchange = function (e) { setOrientation(window.screen.orientation.type); }
    }, [])

    const changeWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    return (
        <div className="section pt-80 pt-xs-50">
            <Container style={{ height: "200px" }} className="mb-20">
                <Row className={'country-map mt-30 mbn-30'} style={{ position: "relative" }}>
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
                    <ReactConnectElements
                        selector=".country-map"
                        strokeWidth={1}
                        elements={[{ from: '#georgia', to: '#armenia' }, { from: '#armenia', to: '#moldova' }, { from: '#moldova', to: '#ukraine' }, { from: '#ukraine', to: '#germany' }]}
                        orientationType={orientation}
                        windowWidth={windowWidth}
                    />
                </Row>
            </Container>
        </div>
    );
};

export default CountriesMap;