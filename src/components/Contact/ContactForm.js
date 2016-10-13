import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import '../../styles/contact.scss';

const ContactForm = ({name, email, subject, message, onChange, errors}) => {
    return (
        <div className="Contact">
            <div className="jumbotron">
                <div className="container">
                    <h1 className="text-xs-center">Contact us</h1>
                    <form>
                        <div className="row">
                            <div className="input-fields col-xs-12 col-sm-8 offset-sm-2">
                                <TextInput
                                    name="name"
                                    label="Name"
                                    type="text"
                                    onChange={onChange}
                                    placeHolder="ex: John Doe"
                                    value={name}
                                    error={errors.name}
                                />

                                <TextInput
                                    name="email"
                                    label="Email"
                                    type="email"
                                    onChange={onChange}
                                    placeHolder="example@domain.com"
                                    value={email}
                                    error={errors.email}
                                />

                                <TextInput
                                    name="subject"
                                    label="Subject"
                                    type="text"
                                    onChange={onChange}
                                    value={subject}
                                    error={errors.subject}
                                />
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" name="message" onChange={onChange}
                                              value={message}/>
                                    {errors.message && <div className="alert alert-danger">{errors.message}</div>}
                                </div>
                                <div className="contact-submit">
                                    <button className="btn btn-lg">Send</button>
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
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object
};


export default ContactForm;