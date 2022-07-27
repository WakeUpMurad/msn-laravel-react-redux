import React, {useEffect, useState} from 'react';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateModal = ({employeeName, employeeSalary, modalId}) => {
    const [isEditName, setEditNameMode] = useState(false)
    const [isEditSalary, setEditSalaryMode] = useState(false)
    const [editEmployeeName, setEmployeeName] = useState(employeeName)
    const [editEmployeeSalary, setEmployeeSalary] = useState(employeeSalary)

    console.log(employeeName, employeeSalary)

    useEffect(() => {
        setEmployeeName(employeeName)
        setEmployeeSalary(employeeSalary)
    }, [employeeName, employeeSalary])

    const inputEmployeeName = (e) => {
        setEmployeeName(e.target.value)
    }
    const inputEmployeeSalary = (e) => {
        setEmployeeSalary(e.target.value)
    }

    const activateNameEditMode = () => {
        setEditNameMode(true)
    }
    const deactivateNameEditMode = () => {
        setEditNameMode(false)
    }

    const activateSalaryEditMode = () => {
        setEditSalaryMode(true)
    }
    const deactivateSalaryEditMode = () => {
        setEditSalaryMode(false)
    }

    const updateEmployeeData = () => {
        axios.post('/update/employee/data', {
            employeeId: modalId,
            employeeName: editEmployeeName,
            employeeSalary: editEmployeeSalary,
        }).then((response) => {
            toast.success('Employee Update Successfully');
            setTimeout(() => {
                location.reload();
            }, 2500)
        });
    }

    return (
        <div className="modal fade" id={"updateModal"+ modalId} tabIndex="-1" aria-labelledby="updateModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content text-black">
                    <div className="modal-header">
                        <h5 className="modal-title" id="updateModalLabel">Employee Details ID {modalId}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className='form' action="resources/js/components/pages/Employee/Modals/UpdateModal">
                            <div className="form-group">
                                {
                                    !isEditName
                                        ? <div>
                                            <div onDoubleClick={activateNameEditMode}>Name: {editEmployeeName}</div>
                                        </div>
                                        : <input className='form-control mb-3'
                                                 value={editEmployeeName} onChange={inputEmployeeName}
                                                 onBlur={deactivateNameEditMode} autoFocus={true} id='employeeName'
                                        />
                                }
                            </div>
                            <hr/>
                            <div className="form-group">
                                {
                                    !isEditSalary
                                        ? <div>
                                            <div onDoubleClick={activateSalaryEditMode}>Salary: {editEmployeeSalary}</div>
                                        </div>
                                        : <input className='form-control mb-3'
                                                 value={editEmployeeSalary} onChange={inputEmployeeSalary}
                                                 onBlur={deactivateSalaryEditMode} autoFocus={true} id='employeeSalary'
                                        />
                                }
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <input type="submit" className='btn btn-info' value='update' onClick={updateEmployeeData}/>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateModal;
