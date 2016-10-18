import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../../actions/contactActions';
import ContactForm from './ContactForm';
import toastr from 'toastr';


let handlers = function (dispatch) {
    let onClick = function (contactForm) {
        dispatch(contactActions.submitContactForm(contactForm));
    };

    return {
        onClick
    };
};

export class ManageContactpage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handlers = handlers(this.props.dispatch);

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
        debugger;
        this.setState({sending: true});
        //this.handlers.onClick(this.state.contact);
        this.props.dispatch(contactActions.submitContactForm(this.state.contact))
            .then(() => {
                toastr.info('Message Sent');
                this.setState({sending: false});
            }).catch(error => {
           toastr.error(error);
            this.setState({sending: false});
        });


        //this.props.submitContactForm(this.state.contact)
        //    .then(()=> {
        //        toastr.options = {
        //            positionClass: 'toast-bottom-center',
        //            preventDuplicates: false,
        //            progressBar: true
        //        };
        //        toastr.success('Message Sent');
        //    }).catch(error => {
        //    toastr.error(error);
        //});
        this.setState({sending: false});
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
    dispatch: PropTypes.func.isRequired,
    submitContactForm: PropTypes.func.isRequired
};

export default connect()(ManageContactpage);