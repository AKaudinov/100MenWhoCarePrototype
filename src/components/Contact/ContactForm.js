import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import {ChasingDots} from 'better-react-spinkit';
import '../../styles/contact/contact.scss';

const ContactForm = ({contact, onChange, onSend, onCancel, fetchCallsInProgress, errors}) => {
    let messageWrapperClass = 'contact-message form-group col-xs-12';
    let messageInputClass = 'form-control';
    let messageLabelClass = 'messageLabel';

    if (errors.message && errors.message.length > 0) {
        messageWrapperClass += " " + 'has-danger';
        messageInputClass += " " + 'form-control-danger';
        messageLabelClass += " " + 'text-danger';
    }

    let sendButton = (
        <button className="btn btn-lg submit-contact-button" onClick={onSend}>
            Send
        </button>
    );

    let disabledSendButton = (
        <button className="btn btn-lg submit-contact-button" disabled>
            <ChasingDots color="white" size={25} className="sending-contact-icon"/> Sending
        </button>
    );


    let checkBoxNewsLetterClass = contact.newsletter ? 'contact-checkbox-checked contact-checkbox-button' : 'contact-checkbox-unchecked contact-checkbox-button';
    let emailCheckBoxClass = contact.receiveEmails ? 'contact-checkbox-checked contact-checkbox-button' : 'contact-checkbox-unchecked contact-checkbox-button';

    return (
        <div className="Contact">
            <div className="jumbotron">
                <div className="container">
                    <div className="contact-description">
                        <h3 className="contact-header text-xs-left">Why should you become a member?</h3>

                        <ul className="contact-us-member-list text-xs-left">
                            <li className="contact-us-list-item">You don’t have time in your busy life
                                to volunteer but want to help those in need and can commit to
                                90 minutes each quarter;</li>
                            <li className="contact-us-list-item">You are involved with other groups but also
                                 see the potential in this idea and are interested in adding it to your
                                charitable efforts;</li>
                            <li className="contact-us-list-item">You want 100% of your donations to go
                                directly to a local charity;</li>
                            <li className="contact-us-list-item">You want your $100 donation to
                                become a part of a larger amount of money by joining together with other men,
                                creating a powerful impact in our local area.</li>
                        </ul>

                    </div>
                    <form>
                        <div className="row">
                            <div className="input-fields col-xs-12">
                                <hr/>
                                <div className="contact-user-info">
                                    <div className="contact-firstName col-xs-12 col-md-6">
                                        <TextInput
                                            name="firstName"
                                            label="First Name"
                                            type="text"
                                            onChange={onChange}
                                            placeHolder="ex: John"
                                            value={contact.firstName}
                                            error={errors.firstName}
                                        />
                                    </div>

                                    <div className="contact-lastName col-xs-12 col-md-6">
                                        <TextInput
                                            name="lastName"
                                            label="Last Name"
                                            type="text"
                                            onChange={onChange}
                                            placeHolder="ex: Mason"
                                            value={contact.lastName}
                                            error={errors.lastName}/>
                                    </div>

                                    <div className="contact-organization col-xs-12">
                                        <TextInput
                                            name="organization"
                                            label="Organization"
                                            type="text"
                                            onChange={onChange}
                                            value={contact.organization}
                                            error={errors.organization}/>
                                    </div>

                                    <div className="contact-email col-xs-12 col-md-6">
                                        <TextInput
                                            name="email"
                                            label="Email"
                                            type="email"
                                            onChange={onChange}
                                            placeHolder="example@domain.com"
                                            value={contact.email}
                                            error={errors.email}
                                        />
                                    </div>

                                    <div className="contact-phone col-xs-12 col-md-6">
                                        <TextInput
                                            name="phone"
                                            label="Phone"
                                            type="tel"
                                            maxlength="10"
                                            onChange={onChange}
                                            placeHolder="ex: 3035054343"
                                            value={contact.phone}
                                            error={errors.phone}/>
                                    </div>


                                    <div className="news-letter col-xs-12 col-md-6">
                                        <label className={checkBoxNewsLetterClass}>
                                            <input type="checkbox" name="newsletter" autoComplete="off"
                                                   onChange={onChange}/>
                                            <i className="fa fa-check"/>
                                        </label>
                                        <span className="news-letter-question">Would you like to sign up for the news letter?</span>
                                    </div>

                                    <div className="receive-emails col-xs-12 col-md-6">
                                        <label className={emailCheckBoxClass}>
                                            <input type="checkbox" name="receiveEmails" autoComplete="off"
                                                   onChange={onChange}/>
                                            <i className="fa fa-check"/>
                                        </label>
                                        <span
                                            className="receive-emails-question">Would you like to receive emails?</span>
                                    </div>

                                </div>
                                <div className={messageWrapperClass}>
                                    <label className={messageLabelClass}
                                           htmlFor="message">Message {errors.message && `- ${errors.message}`}</label>
                                    <textarea className={messageInputClass} name="message" onChange={onChange}
                                              id="message"
                                              value={contact.message}/>

                                </div>
                                    <div className="submit-contact col-xs-12 col-md-3">
                                        {fetchCallsInProgress > 0 ? disabledSendButton : sendButton}
                                    </div>
                                <div className="cancel-contact col-xs-12 col-md-3">
                                    <button className="btn btn-lg btn-warning cancel-contact-button" onClick={onCancel}>
                                        Cancel
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

//<p className="d-block">Please email us any questions, suggestions, or ideas - placeholder</p>

ContactForm.propTypes = {
    contact: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSend: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    fetchCallsInProgress: PropTypes.number.isRequired,
    errors: PropTypes.object
};


export default ContactForm;