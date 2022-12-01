import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import countries from '../../data/countries';
import Xarrow from 'react-xarrows';

const CountriesMap = ({ activeCountry }) => {

    const arrowProps = {
        strokeWidth: 1,
        color: "#333",
        path: "straight",
        showTail: false,
        showHead: false,
        animateDrawing: true
    }

    return (
        <div className="section pt-50 pt-xs-50">
            <Container style={{ height: "200px" }} className="mb-20">
                <Row className={'country-map mt-30 mbn-30'} style={{ position: "relative" }}>
                    {countries.map((country, idx) => (
                        <div key={idx} id={country.id} className={"country"}>

                            <NavLink
                                className={`text-nowrap ${country.name.toLowerCase() === activeCountry ? "active" : ""}`}
                                id={`${country.id}-link`}
                                to={`/events/${country.name.toLowerCase()}`}>
                                <img id={`${country.id}-icon`} src={require('../../assets/images/' + country.thumb)} alt={country.name} />
                                <br />
                                <span className='country-name'>{country.name}</span>
                            </NavLink>
                        </div>
                    ))}
                    <div>
                        <Xarrow {...arrowProps} start={'georgia-link'} end={'armenia-link'} />
                        <Xarrow {...arrowProps} start={'armenia-link'} end={'moldova-link'} />
                        <Xarrow {...arrowProps} start={'moldova-link'} end={'ukraine-link'} />
                        <Xarrow {...arrowProps} start={'ukraine-link'} end={'germany-link'} />
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default CountriesMap;