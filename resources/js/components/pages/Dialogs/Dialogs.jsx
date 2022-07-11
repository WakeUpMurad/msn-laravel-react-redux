import React from 'react';
import classes from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                Samir
            </div>
            <div className={classes.messages}>
               Hello!
            </div>
        </div>
    );
};


export default Dialogs;
