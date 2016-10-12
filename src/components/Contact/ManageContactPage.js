import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import toastr from 'toastr';
import '../../styles/contact.scss';


export class ManageContactpage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="Contact">
                <h1>Welcome to Contact Page!</h1>
            </div>
        );
    }
}

export default ManageContactpage;