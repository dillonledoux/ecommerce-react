import React from 'react';
import './form-input.styles.sass';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
        <h2>{otherProps.value}</h2>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {label ? (
            <label 
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
            >
                {label}
            </label>
        ) : null}
    </div>
);

export default FormInput;