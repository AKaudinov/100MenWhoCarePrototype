import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as eventActions from '../../actions/eventActions';

import EventsPage from './EventsPage';

export class EventsContainer extends React.Component {
//a named exported component, useful for testing when you only need a raw component
//{EventContainer} //raw component
    //EventContainer - default connected component
    constructor(props, context) {
        super(props, context);

        this.state = {
            events: [],
            dataRetrieveError: ''
        };
    }

    componentWillMount(){
        this.props.actions.getEvents()
        .then(() => {
            return this.setState({events: this.props.events.data});
        })
        .catch(() => {
            return this.setState({dataRetrieveError: this.props.events.dataRetrieveError});
        });
    }

    render() {
        return (
            <EventsPage
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

function mapStateToProps(state){
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