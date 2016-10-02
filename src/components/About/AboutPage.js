import React from 'react';
import {IndexLink} from 'react-router';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
              <h1>About</h1>
                <p><i className="fa fa-info-circle text-warning"></i>An About page</p>
                <IndexLink to="/" className="btn btn-primary" id="toHome">Home</IndexLink>
            </div>
        );
    }
}

export default AboutPage;