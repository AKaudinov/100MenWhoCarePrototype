import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../../styles/contact/contact.scss';

const ContactForm = ({contact, onChange, onSend, sending, errors}) => {
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
                                        name="name"
                                        label="Name"
                                        type="text"
                                        onChange={onChange}
                                        placeHolder="ex: John Doe"
                                        value={contact.name}
                                        error={errors.name}
                                    />

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
                                    <button className="btn btn-lg" onClick={onSend} disabled={sending ? true : false}>
                                        {sending ?
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
    sending: PropTypes.bool.isRequired,
    errors: PropTypes.object
};


export default ContactForm;