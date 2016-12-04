import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import '../../styles/contact/contact.scss';

const ContactForm = ({contact, retrievedContacts, onChange, onSend, fetchCallsInProgress, errors}) => {
    let messageWrapperClass = 'contact-message form-group col-xs-12';
    let messageInputClass = 'form-control';
    let messageLabelClass = 'messageLabel';

    if (errors.Message && errors.Message.length > 0) {
        messageWrapperClass += " " + 'has-danger';
        messageInputClass += " " + 'form-control-danger';
        messageLabelClass += " " + 'text-danger';
    }

    //will need to be removed
    let contacts = retrievedContacts.data.map(contact => {
        return (<div className="retrievedContact d-block" key={contact.Id} id={contact.Id}>
            <p className="text-success d-inline">First Name: <span className="text-danger">{contact.FirstName} </span></p>
            <p className="text-success d-inline">Last Name: <span className="text-danger">{contact.LastName} </span></p>
            <p className="text-success d-inline">Email: <span className="text-danger">{contact.Email} </span></p>
            <p className="text-success d-inline">Phone: <span className="text-danger">{contact.Phone} </span></p>
        </div>);
    });


    let checkBoxNewsLetterClass = contact.Newsletter ? 'contact-checkbox-checked contact-checkbox-button' : 'contact-checkbox-unchecked contact-checkbox-button';
    let emailCheckBoxClass = contact.ReceiveEmails ? 'contact-checkbox-checked contact-checkbox-button' : 'contact-checkbox-unchecked contact-checkbox-button';

    return (

        <div className="Contact">
            <div className="jumbotron">
                <div className="container">
                    <div className="contact-description text-xs-center">
                        <h1 className="contact-header">Contact us</h1>
                        <p className="d-block">Please email us any questions, suggestions, or ideas - placeholder</p>

                        {fetchCallsInProgress > 0 &&
                        <i className="fa fa-circle-o-notch fa-spin"/>
                        }
                        {contacts && <div className="retrieved-contacts"><h6 className="text-success">Contacts retrieved from API</h6> {contacts}</div>}
                        {retrievedContacts.receivedError &&
                        <h4 className="text-danger">{retrievedContacts.receivedError}</h4>}

                    </div>
                    <form>
                        <div className="row">
                            <div className="input-fields col-xs-12 col-sm-10 offset-sm-1">
                                <hr/>
                                <div className="contact-user-info">
                                    <div className="contact-firstName col-sm-12 col-md-6">
                                        <TextInput
                                            name="FirstName"
                                            label="First Name"
                                            type="text"
                                            onChange={onChange}
                                            placeHolder="ex: John"
                                            value={contact.FirstName}
                                            error={errors.FirstName}
                                        />
                                    </div>

                                    <div className="contact-lastName col-sm-12 col-md-6">
                                        <TextInput
                                            name="LastName"
                                            label="Last Name"
                                            type="text"
                                            onChange={onChange}
                                            placeHolder="ex: Mason"
                                            value={contact.LastName}
                                            error={errors.LastName}/>
                                    </div>

                                    <div className="contact-organization col-xs-12">
                                        <TextInput
                                            name="Organization"
                                            label="Organization"
                                            type="text"
                                            onChange={onChange}
                                            value={contact.Organization}
                                            error={errors.Organization}/>
                                    </div>

                                    <div className="contact-email col-sm-12 col-md-6">
                                        <TextInput
                                            name="Email"
                                            label="Email"
                                            type="text"
                                            onChange={onChange}
                                            placeHolder="example@domain.com"
                                            value={contact.Email}
                                            error={errors.Email}
                                        />
                                    </div>

                                    <div className="contact-phone col-sm-12 col-md-6">
                                        <TextInput
                                            name="Phone"
                                            label="Phone"
                                            type="number"
                                            maxlength="10"
                                            onChange={onChange}
                                            placeHolder="ex: 3035054343"
                                            value={contact.Phone}
                                            error={errors.Phone}/>
                                    </div>



                                        <div className="news-letter col-sm-12 col-md-6">
                                            <span className="news-letter-question">Would you like to sign up for news letter?</span>
                                            <label className={checkBoxNewsLetterClass}>
                                                <input type="checkbox" name="Newsletter" autoComplete="off" onChange={onChange}/>
                                                    <i className="fa fa-check"/>
                                            </label>
                                        </div>

                                        <div className="receive-emails col-sm-12 col-md-6">
                                            <span className="receive-emails-question">Would you like to receive emails?</span>
                                            <label className={emailCheckBoxClass}>
                                                <input type="checkbox" name="ReceiveEmails" autoComplete="off" onChange={onChange}/>
                                                    <i className="fa fa-check"/>
                                            </label>
                                        </div>

                                </div>
                                <div className={messageWrapperClass}>
                                    <label className={messageLabelClass} htmlFor="Message">Message {errors.Message && `- ${errors.Message}`}</label>
                                    <textarea className={messageInputClass} name="Message" onChange={onChange}
                                              value={contact.Message}/>

                                </div>
                                <div className="contact-submit col-xs-12">
                                    <button className="btn btn-lg submit-contact" onClick={onSend}
                                            disabled={fetchCallsInProgress > 0 ? true : false}>
                                        {fetchCallsInProgress > 0 ?
                                            <span><i className="fa fa-circle-o-notch fa-spin"/> Sending</span> : 'Send'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

//<div className="contact-subject col-sm-12 col-md-6">
//    <TextInput
//        name="Subject"
//        label="Subject"
//        type="text"
//        onChange={onChange}
//        value={contact.Subject}
//        error={errors.Subject}
//    />
//</div>

ContactForm.propTypes = {
    contact: PropTypes.object.isRequired,
    retrievedContacts: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSend: PropTypes.func.isRequired,
    fetchCallsInProgress: PropTypes.number.isRequired,
    errors: PropTypes.object
};


export default ContactForm;