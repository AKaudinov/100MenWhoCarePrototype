import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContactForm from './ContactForm';
import toastr from 'toastr';


export class ManageContactpage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contact:{
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            errors: {}
        };
        this.updateContactInfoState = this.updateContactInfoState.bind(this);
    }

    updateContactInfoState(event) {
        const field = event.target.name;
        const fieldValue = event.target.value;
        let contactSetter = this.state.contact;
        contactSetter[field] = fieldValue;
        return this.setState({msgInfo: contactSetter});
        //const stateSetter = this.state;
        //stateSetter[field] = fieldValue;
    }

    render() {
        return (
            <ContactForm
                contact={this.state.contact}
                //name={this.state.name}
                //email={this.state.email}
                //subject={this.state.subject}
                //message={this.state.message}
                onChange={this.updateContactInfoState}
                errors={this.state.errors}
                />
        );
    }
}

export default ManageContactpage;