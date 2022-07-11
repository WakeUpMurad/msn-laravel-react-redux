import React, {useEffect, useState} from 'react';

const ProfileStatus = (props) => {
    const [isEdit, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);

    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div>
            {
                !isEdit
                    ? <div>
                        <span onDoubleClick={activateEditMode}>{props.status || 'check status'}</span>
                    </div>
                    : <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}/>
            }
        </div>
    );
};

export default ProfileStatus;
