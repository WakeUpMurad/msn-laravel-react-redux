import React from 'react';
import classes from "./FormControl.module.css";
import {Field} from "redux-form";
import MyInput from "../MyInput/MyInput";
import MyTextarea from "../MyTextarea/MyTextarea";

const FormControl = ({input, meta: {touched, error}, children}) => {
        const hasError = touched && error;
        return (
            <div className={classes.formControl + ' ' + (hasError ? classes.error : '')}>
                <div>
                    {children}
                </div>
                {hasError && <span>{error}</span>}
            </div>
        );
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><MyTextarea {...input} {...restProps}/></FormControl>
};

export const Input = (props) => {
        const {input, meta, child, ...restProps} = props;
        return <FormControl {...props}><MyInput {...input} {...restProps}/></FormControl>
};

export const createField = (placeholder, name, validators, component, props= {}, value = "") => (
    <div>
        <Field name={name} component={component}
               validate={validators} placeholder={placeholder} {...props}/>
        {value}
    </div>
)
