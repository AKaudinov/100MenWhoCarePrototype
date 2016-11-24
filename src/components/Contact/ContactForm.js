import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../styles/contact/contact.scss';

const ContactForm = ({contact, onChange, onSend, fetchCallsInProgress, errors}) => {
    let messageWrapperClass = 'form-group';
    let messageInputClass = 'form-control';

    if (errors.message && errors.message.length > 0) {
        messageWrapperClass += " " + 'has-warning';
        messageInputClass += " " + 'form-control-warning';
    }

    return (
        <div className="Contact">
            <div className="jumbotron">
                <div className="container">
                    <div className="contact-description text-xs-center">
                        <h1 className="contact-header">Contact us</h1>
                        <p>Please email us any questions, suggestions, or ideas - placeholder</p>
                    </div>
                    <form>
                        <div className="row">
                            <div className="input-fields col-xs-12 col-sm-8 offset-sm-2">
                                <hr/>
                                <div className="contact-user-info">
                                    <TextInput
                                        name="firstName"
                                        label="First Name"
                                        type="text"
                                        onChange={onChange}
                                        placeHolder="ex: John"
                                        value={contact.firstName}
                                        error={errors.firstName}
                                    />

                                    <TextInput
                                        name="lastName"
                                        label="Last Name"
                                        type="text"
                                        onChange={onChange}
                                        placeHolder="ex: Mason"
                                        value={contact.lastName}
                                        error={errors.lastName}/>

                                    <TextInput
                                        name="email"
                                        label="Email"
                                        type="text"
                                        onChange={onChange}
                                        placeHolder="example@domain.com"
                                        value={contact.email}
                                        error={errors.email}
                                    />

                                    <TextInput
                                        name="phone"
                                        label="Phone"
                                        type="number"
                                        maxlength="10"
                                        onChange={onChange}
                                        placeHolder="ex: 3035054343"
                                        value={contact.phone}
                                        error={errors.phone}/>

                                    <TextInput
                                        name="subject"
                                        label="Subject"
                                        type="text"
                                        onChange={onChange}
                                        value={contact.subject}
                                        error={errors.subject}
                                    />
                                </div>
                                <div className={messageWrapperClass}>
                                    <label htmlFor="message">Message</label>
                                    <textarea className={messageInputClass} name="message" onChange={onChange}
                                              value={contact.message}/>
                                    <ReactCSSTransitionGroup
                                    transitionName="error-validation"
                                    transitionEnterTimeout={0}
                                    transitionLeaveTimeout={0}>
                                        {errors.message && <div className="validation-error alert alert-danger">{errors.message}</div>}
                                    </ReactCSSTransitionGroup>
                                </div>
                                <div className="contact-submit">
                                    <button className="btn btn-lg" onClick={onSend} disabled={fetchCallsInProgress > 0 ? true : false}>
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

ContactForm.propTypes = {
    contact: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSend: PropTypes.func.isRequired,
    fetchCallsInProgress: PropTypes.number.isRequired,
    errors: PropTypes.object
};


export default ContactForm;