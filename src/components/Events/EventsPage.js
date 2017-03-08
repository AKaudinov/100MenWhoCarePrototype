import React from 'react';
import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import '../../styles/events/events.scss';

BigCalendar.momentLocalizer(moment);

const EventsPage = () => {
    let events = [
        {
            title: 'Daylight Savings',
            allDay: true,
            start: moment("2017-03-12"),
            end: moment("2017-03-13")
        },
        {
            title: 'holidays',
            allDay: true,
            start: moment("2017-03-21"),
            end: moment("2017-03-23")
        }
    ];
    return (
        <div className="jumbotron event-main">
            <div className="events-container container">
                <h2 className="display-4">Events this month</h2>
                <hr className="events-horizontal-break-line"/>
                <div className="events-calendar-view">
                    <BigCalendar
                        events={events}/>
                </div>
            </div>
        </div>
    );
};

export default EventsPage;