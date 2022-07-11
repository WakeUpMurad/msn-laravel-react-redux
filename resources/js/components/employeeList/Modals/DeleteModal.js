import React from 'react';
import {toast} from "react-toastify";

const DeleteModal = ({employeeName, employeeSalary, modalId}) => {

    //Delete function fo Employee data.

    const deleteEmployeeData = (employeeId) => {
        axios.delete('delete/employee/data/' + employeeId).then(() => {
            toast.error('Employee delete successfully');
            setTimeout(() => {
                location.reload();
            },2500)
        })
    }

    return (
        <div className="modal fade" id={"deleteModal"+ modalId} tabIndex="-1" aria-labelledby="deleteModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content text-black">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalLabel">Employee Details ID {modalId}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='mb-3'>
                            Name: {employeeName}
                        </div>
                        <hr/>
                        <div className='mb-3'>
                            Salary: {employeeSalary}
                        </div>
                        Are you sure, You want to delete this Employee data?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                            onClick={() => {deleteEmployeeData(modalId)}}
                        >
                            Delete
                        </button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
