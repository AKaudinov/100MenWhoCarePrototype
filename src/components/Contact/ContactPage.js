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
            errors: {}
        };

        this.updateContactInfoState = this.updateContactInfoState.bind(this);
        this.checkErrors = this.checkErrors.bind(this);
        this.submitContact = this.submitContact.bind(this);
        this.onSuccessfulSubmit = this.onSuccessfulSubmit.bind(this);
        this.onFailedSubmit = this.onFailedSubmit.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
    }

    updateContactInfoState(event) {
        const field = event.target.name;
        const fieldValue = event.target.value;

        this.checkErrors(field, fieldValue);

        let contactSetter = this.state.contact;
        contactSetter[field] = fieldValue;
        return this.setState({msgInfo: contactSetter});
    }

    checkErrors(fieldName, fieldValue){
        let stateErrorsCleaner = this.state.errors;
        let errorMessage = stateErrorsCleaner[fieldName];

        //email validation
        if(fieldName == 'email' && fieldValue.indexOf('@') !== -1){
            stateErrorsCleaner.email = '';
        }
        //check for blanks, make sure errorMessage is actually defined and than check for the 'blank' error
        if(fieldValue.length > 0 && (errorMessage && errorMessage.indexOf('blank') !== -1)){
            stateErrorsCleaner[fieldName] = '';
            return this.setState({errors: stateErrorsCleaner});
        }
    }

    onSuccessfulSubmit(msg) {
        toastr.options = {
            positionClass: 'toast-top-center',
            preventDuplicates: false,
            progressBar: true
        };
        toastr.success(msg);
        let stateContactSetter = Object.assign({}, this.state.contact, {
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        return this.setState({contact: stateContactSetter});
    }

    onFailedSubmit(err){
        toastr.options = {
            positionClass: 'toast-top-center',
            preventDuplicates: false,
            progressBar: true
        };
        toastr.error(err);
        //toastr.error(`failed to submit contact info ${this.props.contactSubmissionError}`);
        //return this.setState({sending: false});
    }

    submitContact(event) {
        event.preventDefault();
        if(this.isFormValid()) {
            //this.setState({sending: true});
            this.props.dispatch(contactActions.submitContactForm(this.state.contact))
            .then(msg => {
               if(this.props.contact.successfulMessage){
                   return this.onSuccessfulSubmit(this.props.contact.successfulMessage);
               }else{
                   return this.onFailedSubmit(this.props.contact.messageSendError);
               }
            });
                //.then(this.onSuccessfulSubmit, this.onFailedSubmit);
        }

    }

    isFormValid(){
        let contactObj = this.state.contact;
        let errorSetter = this.state.errors;
        let valid = true;

        //blank check
        Object.keys(contactObj).map(key => {
           if(contactObj[key] == '') {
               valid = false;
               return errorSetter[key] = `${key} cannot be blank`;
           }
        });

        //valid email check
        if(contactObj.email.indexOf('@') === -1 && contactObj.email !== ''){
            valid = false;
            errorSetter.email = `${contactObj.email} is not a valid email`;
        }

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
                fetchCallsInProgress={this.props.fetchCallsInProgress}
                errors={this.state.errors}
            />
        );
    }
}

ManageContactpage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    contact: PropTypes.object.isRequired,
    fetchCallsInProgress: PropTypes.number.isRequired
};

function mapStateToProps(state, ownprops){
return{
        contact: state.contact,
        fetchCallsInProgress: state.fetchCallsInProgress
    };
}

export default connect(mapStateToProps)(ManageContactpage);