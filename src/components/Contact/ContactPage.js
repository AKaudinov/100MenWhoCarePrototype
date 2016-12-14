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
                firstName: '',
                lastName: '',
                email: '',
                phone:'',
                organization: '',
                newsletter: false,
                receiveEmails: false,
                message: '',
                created: ''
            },
            errors: {}
        };

        this.updateContactInfoState = this.updateContactInfoState.bind(this);
        this.checkErrors = this.checkErrors.bind(this);
        this.submitContact = this.submitContact.bind(this);
        this.onSuccessfulSubmit = this.onSuccessfulSubmit.bind(this);
        this.onFailedSubmit = this.onFailedSubmit.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
        this.optionalKeyMatch = this.optionalKeyMatch.bind(this);
    }

    //will need to be removed
    //componentWillMount(){
    //    this.props.actions.getAllContacts();
    //}

    updateContactInfoState(event) {
        const field = event.target.name;
        const fieldValue = event.target.value;

        let contactSetter = this.state.contact;

        if(field == 'newsletter' || field == 'receiveEmails'){
            contactSetter[field] = !contactSetter[field];
        }else {

            this.checkErrors(field, fieldValue);

            contactSetter[field] = fieldValue;
        }
        return this.setState({contact: contactSetter});
    }

    checkErrors(fieldName, fieldValue){
        let stateErrorsCleaner = this.state.errors;
        let errorMessage = stateErrorsCleaner[fieldName];

        //email validation
        if(fieldName == 'email' && fieldValue.indexOf('@') !== -1){
            stateErrorsCleaner.email = '';
        }

        //make sure errorMessage is actually defined
        if(errorMessage) {
            //phone validation
            if (fieldName == 'phone') {
                if (fieldValue.length === 10 && errorMessage.indexOf('digits') !== 1) {
                    stateErrorsCleaner.phone = '';
                }
            }

            //check for blanks, make sure errorMessage is actually defined and than check for the 'blank' error
            if (fieldValue.length > 0 && errorMessage.indexOf('blank') !== -1) {
                stateErrorsCleaner[fieldName] = '';
            }
        }
        return this.setState({errors: stateErrorsCleaner});
    }

    onSuccessfulSubmit(msg) {
        toastr.options = {
            positionClass: 'toast-top-center',
            preventDuplicates: false,
            progressBar: true
        };
        toastr.success(msg);

        let stateContactSetter = Object.assign({}, this.state.contact);

        Object.keys(stateContactSetter).forEach(key => {
            if(key == 'newsletter' || key == 'receiveEmails'){
                stateContactSetter[key] = false;
            }else{
                stateContactSetter[key] = '';
            }
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
    }

    submitContact(event) {
        event.preventDefault();
        let contactSetter = this.state.contact;
        if(this.isFormValid()) {
            contactSetter.created = new Date();
            this.setState({contact: contactSetter});
            //this.props.dispatch(contactActions.submitContactForm(this.state.contact))
            this.props.actions.submitContactForm(this.state.contact)
            .then(() => {
               if(this.props.contactUsResult.successfulMessage){
                   return this.onSuccessfulSubmit(this.props.contactUsResult.successfulMessage);
               }else{
                   return this.onFailedSubmit(this.props.contactUsResult.messageSendError);
               }
            });
        }
    }

    optionalKeyMatch(key){
        let match = false;
        if(key == 'newsletter' || key == 'receiveEmails' || key == 'created'){
                match = true;
            }
        return match;
    }

    isFormValid(){
        let contactObj = this.state.contact;
        let errorSetter = this.state.errors;
        let valid = true;

        //blank check
        Object.keys(contactObj).map(key => {
           if(contactObj[key] == '' && !this.optionalKeyMatch(key)){
               valid = false;
               return errorSetter[key] = 'cannot be blank';
           }
        });

        //valid email check
        if(contactObj.email.indexOf('@') === -1 && contactObj.email !== ''){
            valid = false;
            errorSetter.email = `${contactObj.email} is not a valid email`;
        }//

        //phone check
        if(contactObj.phone.length > 10){
            valid = false;
            errorSetter.phone = `must be lower than 10 digits`;
        }
        if(contactObj.phone.length < 10){
            valid = false;
            errorSetter.phone = `must be 10 digits long`;
        }//

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
    actions: PropTypes.object.isRequired,
    contactUsResult: PropTypes.object.isRequired,
    contacts: PropTypes.object.isRequired,
    fetchCallsInProgress: PropTypes.number.isRequired
};

function mapStateToProps(state, ownprops){
return{
        contactUsResult: state.contactUsResult,
        contacts: state.contacts,
        fetchCallsInProgress: state.fetchCallsInProgress
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(contactActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageContactpage);