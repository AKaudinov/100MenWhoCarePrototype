import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../../actions/contactActions';
import ContactForm from './ContactForm';
import toastr from 'toastr';


export class ManageContactpage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            contact: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            sending: false,
            errors: {}
        };
        this.updateContactInfoState = this.updateContactInfoState.bind(this);
        this.submitContact = this.submitContact.bind(this);
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

    submitContact(event) {
        event.preventDefault();

        this.setState({sending: true});
        this.props.submitContactForm(this.state.contact)
            .then(()=> {
                toastr.options = {
                    positionClass: 'toast-bottom-center',
                    preventDuplicates: false,
                    progressBar: true
                };
                toastr.success('Message Sent');
            }).catch(error => {
            toastr.error(error);
        });
        this.setState({sending: false});
    }


    render() {
        return (
            <ContactForm
                contact={this.state.contact}
                onChange={this.updateContactInfoState}
                onSubmit={this.submitContact}
                sending={this.state.sending}
                errors={this.state.errors}
            />
        );
    }
}

ManageContactpage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    submitContactForm: PropTypes.func.isRequired
};


function mapDispatchToProps(dispatch) {
    return {
        submitContactForm: contact => dispatch(contactActions.submitContactForm(contact))
    };
}

export default connect(null, mapDispatchToProps)(ManageContactpage);
//export default ManageContactpage;