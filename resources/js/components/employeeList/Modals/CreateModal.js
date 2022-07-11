import React, {useState} from 'react';
import {toast} from "react-toastify";

const CreateModal = () => {
    const [employeeName, setEmployeeName] = useState('')
    const [employeeSalary, setEmployeeSalary] = useState('')

    const inputEmployeeName = (e) => {
        setEmployeeName(e.target.value)
    }
    const inputEmployeeSalary = (e) => {
        setEmployeeSalary(e.target.value)
    }
    const storeEmployeeData = () => {
        axios.post('/store/employee/data', {
            employeeName: employeeName,
            employeeSalary: employeeSalary,
        }).then((response) => {
            toast.success('Employee Save Successfully');
            setTimeout(() => {
                location.reload();
            }, 2500)
        });

    }

    return (
        <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="createModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content text-black">
                    <div className="modal-header">
                        <h5 className="modal-title" id="createModalLabel">Employee Details ID</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className='form' action="">
                            <div className="form-group">
                                <input className='form-control mb-3' placeholder='Name Here' id='employeeName' onChange={inputEmployeeName}/>
                            </div>
                            <hr/>
                            <div className="form-group">
                                <input className='form-control mb-3' placeholder='Salary Here' id='employeeSalary' onChange={inputEmployeeSalary}/>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <input type="submit" className='btn btn-light' value='Save' onClick={storeEmployeeData}/>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateModal;
