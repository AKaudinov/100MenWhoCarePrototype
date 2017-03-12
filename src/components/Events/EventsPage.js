import React from 'react';
import moment from 'moment';
import '../../styles/events/events.scss';

const EventsPage = () => {
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
                    {displayEvents}
                </div>
            </div>
        </div>
    );
};

export default EventsPage;