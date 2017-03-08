import React, {PropTypes} from 'react';
import EventsPage from './EventsPage';

class EventsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            events: []
        };
    }

    render() {
        return (
            <EventsPage/>
        );
    }
}

export default EventsContainer;