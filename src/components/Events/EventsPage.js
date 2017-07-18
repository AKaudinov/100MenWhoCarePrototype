import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import TextAreaInput from '../common/TextAreaInput';
import {ChasingDots} from 'better-react-spinkit';
import moment from 'moment';
import '../../styles/events/events.scss';

const EventsPage = ({eventObj, errors, onChange, onSubmit, onCancel, fetchCallsInProgress, retrievedEvents}) => {

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

    let eventSubmitButton = (
            <button className="btn btn-lg accept-dark-button" onClick={onSubmit}>Save</button>
    );

    let eventSubmitButtonDisabled = (
            <button className="btn btn-lg accept-dark-button" disabled>
                <ChasingDots color="white" size={25} className="standard-in-progress-button-icon"/> Saving
            </button>
    );

    let displayEvents =
        events.map((eventItem, index) => {
                return (
                    index % 2 == 0 ?
                        <div key={`item${index}`} className="col-xs-12 event-item">
                            <div className="event-title text-xs-center text-sm-left col-xs-12 col-sm-4">
                                <h5>{eventItem.title}</h5>
                                <div className="event-date"><p className="small">{eventItem.start} - {eventItem.end}</p>
                                </div>
                            </div>
                            <div className="event-description text-xs-center text-sm-left col-xs-12 col-sm-8">
                                <p>{eventItem.description}</p>
                            </div>
                        </div>
                        :
                        <div key={`item${index}`} className="col-xs-12 event-item">
                            <div className="event-title-alternate text-xs-center text-sm-left col-xs-12 col-sm-4">
                                <h5>{eventItem.title}</h5>
                                <div className="event-date"><p className="small">{eventItem.start} - {eventItem.end}</p>
                                </div>
                            </div>
                            <div className="event-description-alternate text-xs-center text-sm-left col-xs-12 col-sm-8">
                                <p>{eventItem.description}</p>
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
                            value={eventObj.name}
                            error={errors.name}/>
                    </div>
                    <div className="event-date col-xs-12 col-sm-6">
                        <TextInput
                            name="date"
                            label="Date"
                            type="text"
                            onChange={onChange}
                            value={eventObj.date}
                            error={errors.date}/>
                    </div>

                    <div className="event-description-text-area col-xs-12">
                        <TextAreaInput name="description"
                                       label="Description"
                                       onChange={onChange}
                                       value={eventObj.description}
                                       error={errors.description}/>
                    </div>

                    <div className="submit-event col-xs-12 col-md-3">
                        {fetchCallsInProgress > 0 ? eventSubmitButtonDisabled : eventSubmitButton}
                    </div>
                    <div className="cancel-event col-xs-12 col-md-3">
                        <button className="btn btn-lg cancel-event-button btn-warning" onClick={onCancel}>
                            Cancel
                        </button>
                    </div>
                    {displayEvents}
                </div>
            </div>
        </div>
    );
};

EventsPage.propTypes = {
    eventObj: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    errors: PropTypes.object,
    fetchCallsInProgress: PropTypes.number.isRequired,
    retrievedEvents: PropTypes.array
};


export default EventsPage;