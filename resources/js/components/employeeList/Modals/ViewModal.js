import React from 'react';

const ViewModal = ({employeeName, employeeSalary, modalId}) => {
    return (
        <div className="modal fade" id={"viewModal"+ modalId} tabIndex="-1" aria-labelledby="viewModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content text-black">
                    <div className="modal-header">
                        <h5 className="modal-title" id="viewModalLabel">Employee Details ID {modalId}</h5>
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
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewModal;
