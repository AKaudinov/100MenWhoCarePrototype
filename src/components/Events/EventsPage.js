import React, {PropTypes} from 'react';
import {Pulse} from 'better-react-spinkit';
import '../../styles/events/events.scss';

const EventsPage = ({fetchCallsInProgress,dataRetrieveError,retrievedEvents}) => {

    let formatDate = date => {
        return date.replace(/-/g, '/').replace(/T.+/g, '').split('/');
    };

    let setDateForDisplay = formattedDate =>{
      return `${formattedDate[1]}/${formattedDate[2]}/${formattedDate[0]}`;
    };

    let displayEvents =
        retrievedEvents.map((eventItem, index) => {

            let startDate = formatDate(eventItem.Start); //format the dates
            let endDate = formatDate(eventItem.End);

            let formattedEvent = Object.assign({}, eventItem, {
                Start: setDateForDisplay(startDate),
                End: setDateForDisplay(endDate)
            });

                return (
                    index % 2 == 0 ?
                        <div key={`item${index}`} className="col-xs-12 event-item">
                            <div className="event-title text-xs-center text-sm-left col-xs-12 col-sm-4">
                                <h6>{formattedEvent.Name}</h6>
                                <div className="event-date"><p className="small">{formattedEvent.Start} - {formattedEvent.End}</p>
                                </div>
                            </div>
                            <div className="event-description text-xs-center text-sm-left col-xs-12 col-sm-8">
                                <p>{formattedEvent.Description}</p>
                            </div>
                        </div>
                        :
                        <div key={`item${index}`} className="col-xs-12 event-item">
                            <div className="event-title-alternate text-xs-center text-sm-left col-xs-12 col-sm-4">
                                <h6>{formattedEvent.Name}</h6>
                                <div className="event-date"><p className="small">{formattedEvent.Start} - {formattedEvent.End}</p>
                                </div>
                            </div>
                            <div className="event-description-alternate text-xs-center text-sm-left col-xs-12 col-sm-8">
                                <p>{formattedEvent.Description}</p>
                            </div>
                        </div>
                );
            }
        );

    return (
        <div className="jumbotron event-main">
            <div className="events-container container">
                <h2 className="display-4">Events</h2>
                <hr className="events-horizontal-break-line"/>
                {fetchCallsInProgress > 0 &&
                <div className="events-loading row">
                    <div className="col-xs-12 events-loading-container">
                        <Pulse color="orange" size={45} className="events-loading"/>
                    </div>
                </div>}
                <div className="events-view row">
                    {displayEvents}
                </div>
                {dataRetrieveError.length > 0 &&
                    <div className="row">
                        <div className="event-retrieval-error col-xs-12">
                            <h4>Error</h4>
                        </div>
                    </div>}
            </div>
        </div>
    );
};

EventsPage.propTypes = {
    fetchCallsInProgress: PropTypes.number.isRequired,
    dataRetrieveError: PropTypes.string.isRequired,
    retrievedEvents: PropTypes.array
};


export default EventsPage;