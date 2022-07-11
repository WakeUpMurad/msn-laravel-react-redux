import React from 'react';
import classes from "./MyTextarea.module.css"

const MyTextarea = React.forwardRef((props, ref) => {
    return (
        <textarea className = {classes.myTextarea} {...props} ref={ref}/>
    );
});

export default MyTextarea;