import React,{useEffect, useState} from 'react';
import ViewModal from "./Modals/ViewModal";
import UpdateModal from "./Modals/UpdateModal";
import DeleteModal from "./Modals/DeleteModal";

const TableActionButtons = ({eachRowId}) => {
    const [employeeName, setEmployeeName] = useState('')
    const [employeeSalary, setEmployeeSalary] = useState('')

    //Getting Individual employee data.

    const getEmployeeDetails = (id) => {
        axios.post('/get/individual/employee/details', {
            employeeId: id
        }).then((response) => {
            setEmployeeName(response.data.employee_name)
            setEmployeeSalary(response.data.salary)
        });
    }

    return (
        <div className='btn-group' role='group'>
            <button type="button" className="btn btn-light" data-bs-toggle="modal"
                    data-bs-target={"#viewModal"+ eachRowId}
                    onClick={() => {getEmployeeDetails(eachRowId)}}
            >
                View
            </button>
            <ViewModal modalId={eachRowId} employeeName={employeeName} employeeSalary={employeeSalary}/>
            <button type="button" className="btn btn-info" data-bs-toggle="modal"
                    data-bs-target={"#updateModal"+ eachRowId}
                    onClick={() => {getEmployeeDetails(eachRowId)}}
            >
                Update
            </button>
            <UpdateModal modalId={eachRowId} employeeName={employeeName} employeeSalary={employeeSalary}/>
            <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                    data-bs-target={"#deleteModal"+ eachRowId}
                    onClick={() => {getEmployeeDetails(eachRowId)}}
            >
                Delete
            </button>
            <DeleteModal modalId={eachRowId} employeeName={employeeName} employeeSalary={employeeSalary}/>
        </div>
    );
};

export default TableActionButtons;
