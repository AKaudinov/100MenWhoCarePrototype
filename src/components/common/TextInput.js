import React, {PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const TextInput = ({name, label, type, onChange, placeHolder, value, error}) => {
    let wrapperClass = 'form-group';
    let controlWrapperClass = 'form-control';
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-warning';
        controlWrapperClass += " " + 'form-control-warning';
    }

    return (
        <div className={wrapperClass}>
            <label htmlFor={name}>{label}</label>
                <input
                    type={type}
                    name={name}
                    className={controlWrapperClass}
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChange}
                />
            <ReactCSSTransitionGroup
            transitionName="error-validation"
            transitionEnterTimeout={0}
            transitionLeaveTimeout={0}>
                {error && <div className="validation-error alert alert-danger">{error}</div>}
            </ReactCSSTransitionGroup>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;