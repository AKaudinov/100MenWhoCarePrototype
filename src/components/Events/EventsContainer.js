import React, {PropTypes} from 'react';
import EventsPage from './EventsPage';

class EventsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            event:{
                name: '',
                description: '',
                date: ''
            },
            errors: {},
            events: []
        };

        this.updateEventState = this.updateEventState.bind(this);
    }

    updateEventState(event){
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        let eventSetter = this.state.event;

        eventSetter[fieldName] = fieldValue;

        return this.setState({event: eventSetter})
    }

    render() {
        return (
            <EventsPage event={this.state.event}
                        errors={this.state.errors}
                        onChange={this.updateEventState}
                        retrievedEvents={this.state.events}/>
        );
    }
}

export default EventsContainer;