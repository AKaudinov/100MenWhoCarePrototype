import React, {PropTypes} from 'react';

const TextInput = ({name, label, type, onChange, placeHolder, value, error}) => {
    let wrapperClass = 'form-group';
    let controlWrapperClass = 'form-control';
    if (error && error.length > 0) {
        wrapperClass += " " + 'has-danger';
        controlWrapperClass += " " + 'form-control-danger';
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
                {error && <div className="alert alert-danger">{error}</div>}
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