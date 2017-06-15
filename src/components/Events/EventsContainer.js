import React, {PropTypes} from 'react';
import EventsPage from './EventsPage';

class EventsContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            eventObj: {
                name: '',
                description: '',
                date: ''
            },
            errors: {},
            events: []
        };

        this.updateStateEventObj = this.updateStateEventObj.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.cleanAnyErrors = this.cleanAnyErrors.bind(this);
        this.isEventValid = this.isEventValid.bind(this);
    }

    updateStateEventObj(event) {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        let eventSetter = this.state.eventObj;

        this.cleanAnyErrors(fieldName, fieldValue);

        eventSetter[fieldName] = fieldValue;

        return this.setState({eventObj: eventSetter});
    }

    cleanAnyErrors(fieldName, fieldValue) {
        let errorCleaner = this.state.errors;
        let errorMessage = errorCleaner[fieldName];

        //clear blank errors if they exist
        if (errorMessage) {
            if (fieldValue.length > 0) {
                errorCleaner[fieldName] = '';
            }
        }
        return this.setState({errors: errorCleaner});
    }

    onSubmit() {
        if (this.isEventValid()) {
            console.log('valid submission');
        }
    }

    isEventValid() {
        let stateEvent = this.state.eventObj;
        let errorSetter = this.state.errors;
        let isValid = true;
        Object.keys(stateEvent).map(key => {
            if (stateEvent[key] == '') {
                isValid = false;
                errorSetter[key] = 'cannot be blank';
            }
        });

        if (!isValid) {
            this.setState({errors: errorSetter});
        }
        return isValid;
    }

    onCancel(){
        let stateEventSetter = this.state.eventObj;
        let errorSetter = this.state.errors;

        Object.keys(stateEventSetter).forEach(eventProperty => {
           stateEventSetter[eventProperty] = '';
        });

        Object.keys(errorSetter).forEach(errorProperty => {
            errorSetter[errorProperty] = '';
        });

        return this.setState({eventObj: stateEventSetter, errors: errorSetter});
    }

    render() {
        return (
            <EventsPage eventObj={this.state.eventObj}
                        errors={this.state.errors}
                        onChange={this.updateStateEventObj}
                        onSubmit={this.onSubmit}
                        onCancel={this.onCancel}
                        retrievedEvents={this.state.events}/>
        );
    }
}

export default EventsContainer;