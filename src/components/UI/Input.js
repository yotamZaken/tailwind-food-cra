import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={'flex items-center mb-2'}>
            <label htmlFor={props.input.id} className={'font-bold mr-4'}>{props.label}</label>
            <input ref={ref} {...props.input} className={'w-12 rounded border border-solid border-gray-300 pl-3'} />
        </div>
    );
});

export default Input;