import React, {PropTypes} from 'react';
import EventsPage from './EventsPage';

class EventsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            eventObj:{
                name: '',
                description: '',
                date: ''
            },
            errors: {},
            events: []
        };

        this.updateStateEventObj = this.updateStateEventObj.bind(this);
    }

    updateStateEventObj(event){
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        let eventSetter = this.state.eventObj;

        eventSetter[fieldName] = fieldValue;

        return this.setState({eventObj: eventSetter});
    }

    render() {
        return (
            <EventsPage eventObj={this.state.eventObj}
                        errors={this.state.errors}
                        onChange={this.updateStateEventObj}
                        retrievedEvents={this.state.events}/>
        );
    }
}

export default EventsContainer;