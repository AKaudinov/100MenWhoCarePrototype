import React, {PropTypes} from 'react';
import EventCalendar from 'react-event-calendar';
import '../../styles/events/events.scss';


class EventsContainer extends React.Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            events: []
        };
    }

    render(){
        return (
          <div className="jumbotron event-main">
              <h2><strong>Events will be here</strong></h2>
          </div>
        );
    }
}

export default EventsContainer;