import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import moment from 'moment';
import '../../styles/events/events.scss';

const EventsPage = (event, errors, onChange, retrievedEvents) => {
    let events = [
        {
            title: 'Daylight Savings',
            description: "Don't forget to convert your clocks 1 hour ahead!",
            start: moment("2017-03-12").format("MM/DD/YYYY"),
            end: moment("2017-03-13").format("MM/DD/YYYY")
        },
        {
            title: 'Holidays',
            description: 'Get some holidays in!',
            start: moment("2017-03-21").format("MM/DD/YYYY"),
            end: moment("2017-03-23").format("MM/DD/YYYY")
        }
    ];

    let displayEvents =
        events.map((event, index) => {
                return (
                index % 2 == 0 ?
                    <div key={`item${index}`} className="col-xs-12 event-item">
                        <div className="event-title text-xs-center text-sm-left col-xs-12 col-sm-4">
                            <h5>{event.title}</h5>
                            <div className="event-date"><p className="small">{event.start} - {event.end}</p></div>
                        </div>
                        <div className="event-description text-xs-center text-sm-left col-xs-12 col-sm-8">
                            <p>{event.description}</p>
                        </div>
                    </div>
                    :
                    <div key={`item${index}`} className="col-xs-12 event-item">
                        <div className="event-title-alternate text-xs-center text-sm-left col-xs-12 col-sm-4">
                            <h5>{event.title}</h5>
                            <div className="event-date"><p className="small">{event.start} - {event.end}</p></div>
                        </div>
                        <div className="event-description-alternate text-xs-center text-sm-left col-xs-12 col-sm-8">
                            <p>{event.description}</p>
                        </div>
                    </div>
                );
            }
        );

    return (
        <div className="jumbotron event-main">
            <div className="events-container container">
                <h2 className="display-4">Upcoming events</h2>
                <hr className="events-horizontal-break-line"/>
                <div className="events-view row">
                    <div className="event-name col-xs-12 col-sm-6">
                        <TextInput
                            name="name"
                            label="Name"
                            type="text"
                            onChange={onChange}
                            value={event.name}
                            error={errors.name}/>
                    </div>
                    <div className="event-date col-xs-12 col-sm-6">
                        <TextInput
                        name="date"
                        label="Date"
                        type="text"
                        onChange={onChange}
                        value={event.date}
                        error={errors.date}/>
                    </div>
                    {displayEvents}
                </div>
            </div>
        </div>
    );
};

EventsPage.propTypes = {
    event: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    retrievedEvents: PropTypes.array
};


export default EventsPage;