import React, {PropTypes} from 'react';

const TextAreaInput = ({name, label, onChange, value, error}) =>{
    let wrapperClass = "form-group";
    let labelClass = `text-area-${name}`;
    let inputClass = "form-control";

    if(error && error.length > 0){
        wrapperClass += " " + 'has-danger';
        labelClass += " " + 'text-danger';
        inputClass += " " + 'form-control-danger';
    }
    return (
        <div className={wrapperClass}>
            <label className={labelClass} htmlFor={name}>
                {label} {error && `- ${error}`}</label>
            <textarea className={inputClass}
                      id={name}
                      name={name}
                      onChange={onChange}
                      value={value}/>
        </div>
    );
};

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string,
    value: PropTypes.string.isRequired,
    error: PropTypes.string
};

export default TextAreaInput;