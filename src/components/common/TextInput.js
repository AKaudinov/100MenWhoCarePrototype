import React, {PropTypes} from 'react';

const TextInput = ({name, label, type, maxlength, onChange, onKeyPress, placeHolder, value, error}) => {
    let wrapperClass = 'form-group';
    let controlWrapperClass = 'form-control';
    let labelClass = `${name}label`;

    if (error && error.length > 0) {
        wrapperClass += " " + 'has-danger';
        controlWrapperClass += " " + 'form-control-danger';
        labelClass += " " + 'text-danger';
    }

    let inputOpts = {};
    if(type == 'number'){
        inputOpts.min = '0';
    }

    return (
        <div className={wrapperClass}>
            <label className={labelClass} htmlFor={name}>{label} {error && `- ${error}`}</label>
                <input
                    type={type}
                    name={name}
                    className={controlWrapperClass}
                    placeholder={placeHolder}
                    maxLength={maxlength}
                    {...inputOpts}
                    value={value}
                    onChange={onChange}
                    onKeyPress={onKeyPress}/>
        </div>
    );
};

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    maxlength: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onKeyPress: PropTypes.func,
    placeHolder: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string
};

export default TextInput;