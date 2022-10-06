import React from 'react';
import PropTypes from "prop-types";

const EventDetails = ({ event }) => {
    return (
        <div className={`mb-20`}>
            <div className={`event-title`}>
                {event.country}
            </div>
            <div className={`event-details ${event.country.toLowerCase()} d-table mb-60 mt-30`}>
                <div className='d-table-cell'>
                    <div className='event-date'>{event.date}</div>
                    <div className='event-cite'>{event.cite}</div>
                    <div className='event-address'>{event.address}</div>
                </div>
                <div className='d-table-cell align-middle'>
                    <div className="flex-vertical">
                        <i className='fa fa-angle-double-right' />
                    </div>
                </div>
            </div>
        </div>
    );
};

EventDetails.propTypes = {
    event: PropTypes.object.isRequired,
};

export default EventDetails;
