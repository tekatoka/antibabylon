import React from 'react';
import { Container, Row } from 'react-bootstrap';
import countries from '../../data/countries';
import ReactConnectElements from '../../hooks/ConnectElements';
import Xarrow from 'react-xarrows';

const CountriesMap = ({ activeCountry }) => {

    // const [orientation, setOrientation] = useState(window.screen.orientation.type);
    //const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     window.addEventListener('resize', changeWindowWidth);
    //     window.screen.orientation.onchange = function (e) { setOrientation(window.screen.orientation.type); }
    // }, [])

    // const changeWindowWidth = () => {
    //     setWindowWidth(window.innerWidth)
    // }

    const arrowProps = {
        strokeWidth: 1,
        color: "#333",
        path: "straight",
        showTail: false,
        showHead: false,
        animateDrawing: true
    }

    return (
        <div className="section pt-80 pt-xs-50">
            <Container style={{ height: "200px" }} className="mb-20">
                <Row className={'country-map mt-30 mbn-30'} style={{ position: "relative" }}>
                    {countries.map((country, idx) => (
                        <div key={idx} id={country.name.toLowerCase()} className={"country"}>
                            <a href={`/events/${country.name.toLowerCase()}`} id={`${country.name.toLowerCase()}-link`} className={`${country.name.toLowerCase() === activeCountry ? "active" : ""}`}>
                                <img id={`${country.name.toLowerCase()}-icon`} src={require('../../assets/images/' + country.thumb)} alt={country.name} />
                                <br />
                                <span className='country-name'>{country.name}</span>
                            </a>
                        </div>
                    ))}
                    <div className='d-large-only'>
                        <Xarrow {...arrowProps} start={'georgia-link'} end={'armenia-link'} />
                        <Xarrow {...arrowProps} start={'armenia-link'} end={'moldova-link'} />
                        <Xarrow {...arrowProps} start={'moldova-link'} end={'ukraine-link'} />
                        <Xarrow {...arrowProps} start={'ukraine-link'} end={'germany-link'} />
                    </div>
                    <ReactConnectElements
                        selector=".country-map"
                        strokeWidth={1}
                        elements={[{ from: '#georgia', to: '#armenia' }, { from: '#armenia', to: '#moldova' }, { from: '#moldova', to: '#ukraine' }, { from: '#ukraine', to: '#germany' }]}
                    // orientationType={orientation}
                    //windowWidth={windowWidth}
                    />
                </Row>
            </Container>
        </div>
    );
};

export default CountriesMap;