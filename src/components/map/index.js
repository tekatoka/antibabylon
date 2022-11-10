import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Map = ({ text, address }) => { //lat, long
    return (
        <Row>
            {text && <Col xs={12} className="mb-45">
                <div className="contact-availability">
                    <p>{text}</p>
                </div>
            </Col>
            }
            <Col xs={12}>
                <div id="contact-map">
                    <iframe
                        style={{ width: '100%', height: '100%', border: 0 }}
                        className='w-100'
                        title="gmap-canvas"
                        src={`https://maps.google.com/maps?q=${address}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                    </iframe>

                    {/* <iframe
                        //src={`https://maps.google.com/maps?q=${lat},${long}&hl=de&z=10&output=embed`}
                        title={'Contact Map'}
                        style={{ width: '100%', height: '100%', border: 0 }}
                    /> */}
                </div>
            </Col>
        </Row>
    );
};

export default Map;