import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
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
        this.onSuccessfulSubmit = this.onSuccessfulSubmit.bind(this);
        this.onFailedSubmit = this.onFailedSubmit.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    }

    updateContactInfoState(event) {
        const field = event.target.name;
        const fieldValue = event.target.value;
        let contactSetter = this.state.contact;
        contactSetter[field] = fieldValue;
        return this.setState({msgInfo: contactSetter});
    }

    onSuccessfulSubmit(){
        toastr.options = {
            positionClass: 'toast-top-center',
            preventDuplicates: false,
            progressBar: true
        };
        toastr.success('Message Sent!');
        return this.setState({
            contact: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            sending: false});
    }

    onFailedSubmit(){
        toastr.options = {
            positionClass: 'toast-top-center',
            preventDuplicates: false,
            progressBar: true
        };
        toastr.error('Submission error');
        return this.setState({sending: false});
    }

    submitContact(event) {
        event.preventDefault();
        if(this.isFormValid()) {
            this.setState({sending: true});


            this.props.dispatch(contactActions.submitContactForm(this.state.contact))
                .then(this.onSuccessfulSubmit, this.onFailedSubmit);
        }

    }

    isFormValid(){
        debugger;
        let contactObj = this.state.contact;
        let errorSetter = this.state.errors;
        let valid = true;
        Object.keys(contactObj).map(key => {
           if(contactObj[key] == '') {
               valid = false;
               return errorSetter[key] = `${key} cannot be blank`;
           }else{
               return errorSetter[key] = '';
           }
        });
        if(valid !== true){
            this.setState({errors: errorSetter});
            return false;
        }
        return valid;
    }


    render() {
        return (
            <ContactForm
                contact={this.state.contact}
                onChange={this.updateContactInfoState}
                onSend={this.submitContact}
                sending={this.state.sending}
                errors={this.state.errors}
            />
        );
    }
}

ManageContactpage.propTypes = {
    dispatch: PropTypes.func.isRequired
};

export default connect()(ManageContactpage);