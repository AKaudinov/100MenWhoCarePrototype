import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/eventActions';
import toastr from 'toastr';

import EventsPage from './EventsPage';

export class EventsContainer extends React.Component {
//a named exported component, useful for testing when you only need a raw component
//{EventContainer} //raw component
    //EventContainer - default connected component
    constructor(props, context) {
        super(props, context);

        this.state = {
            eventObj: {
                name: '',
                description: '',
                date: ''
            },
            errors: {},
            events: [],
            dataRetrieveError: ''
        };

        this.updateStateEventObj = this.updateStateEventObj.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.cleanAnyErrors = this.cleanAnyErrors.bind(this);
        this.isEventValid = this.isEventValid.bind(this);
        this.onSuccessfullEventSubmit = this.onSuccessfullEventSubmit.bind(this);
        this.onFailedEventSubmit = this.onFailedEventSubmit.bind(this);
    }

    componentWillMount(){
        this.props.actions.getEvents()
        .then(() => {
            return this.setState({events: this.props.events.data});
        })
        .catch(() => {
            return this.setState({dataRetrieveError: this.props.events.dataRetrieveError})
        });
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

    onSuccessfullEventSubmit(msg){
        toastr.options = {
            positionClass: 'toast-top-center',
            preventDuplicates: false,
            progressBar: true,
            closeButton: true
        };
        toastr.success(msg);

        let stateEventSetter = Object.assign({}, this.state.eventObj);

        Object.keys(stateEventSetter).forEach(key => {
            stateEventSetter[key] = '';
        });

        return this.setState({eventObj: stateEventSetter});
    }

    onFailedEventSubmit(errMsg){
        toastr.options = {
            positionClass: 'toast-top-center',
            preventDuplicates: false,
            progressBar: true,
            closeButton: true,
            timeOut: '10000'
        };
        toastr.error(errMsg);
    }

    onSubmit() {
        if (this.isEventValid()) {
            this.props.actions.submitEvent(this.state.eventObj)
            .then(() => {
                if(this.props.events.eventSubmitSuccessMessage){
                    return this.onSuccessfullEventSubmit(this.props.events.eventSubmitSuccessMessage);
                }else{
                    return this.onFailedEventSubmit(this.props.events.eventSubmitErrorMessage);
                }
            });
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
                        fetchCallsInProgress = {this.props.fetchCallsInProgress}
                        dataRetrieveError = {this.state.dataRetrieveError}
                        retrievedEvents={this.state.events}/>
        );
    }
}

EventsContainer.propTypes = {
    actions: PropTypes.object.isRequired,
    events: PropTypes.object.isRequired,
    fetchCallsInProgress: PropTypes.number.isRequired
};

function mapStateToProps(state, ownprops){
    return{
        events: state.events,
        fetchCallsInProgress: state.fetchCallsInProgress
    };//map state to props
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(eventActions, dispatch)
    };
}


//once everything is ready, un-comment this.
export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
//export default connected EventsContainer;