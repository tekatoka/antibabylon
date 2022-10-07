import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const Event = ({ event }) => {
    return (
        <div className={`mb-20`}>
            <div className={`event-title`}>
                {event.country}
            </div>

            <Link to={`/events/${event.country.toLowerCase()}`}>
                <div className={`event-details ${event.country.toLowerCase()} d-table mb-60 mt-30`}>
                    <Col xs={11} className='d-table-cell'>
                        <div className='event-date'>{event.date}</div>
                        <div className='event-cite'>{event.cite}</div>
                        <div className='event-address'>{event.address}</div>
                    </Col>
                    <Col xs={1} className='d-table-cell align-middle'>
                        <div className="flex-vertical position-relative">
                            <i className='fa fa-angle-double-right' />
                        </div>
                    </Col>
                </div>
            </Link>
        </div>
    );
};

Event.propTypes = {
    event: PropTypes.object.isRequired,
};

export default Event;
