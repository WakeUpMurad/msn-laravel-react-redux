import React, {useEffect, useState} from 'react';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TableRow from "./TableRow";
import CreateModal from "./Modals/CreateModal";

const Table = () => {

    const [employees, setEmployees] = useState([])

    //Get Employee List.

    const getEmployeeList = () => {
        axios.get('/get/employee/list').then((response) => {
            setEmployees(response.data);
        });
    }

    //Life cycle method

    useEffect(() => {
        getEmployeeList();
        console.log('render')
    },[])

    return (
        <div className="container">
            <ToastContainer />
            <div className='row text-right mb-3 pb-3'>
                <button type="button" className="btn btn-secondary text-right col-3 offset-md-9" data-bs-toggle="modal"
                        data-bs-target={"#createModal"}>Add New Employee</button>
                <CreateModal />
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" width='100px'>#</th>
                                    <th scope="col" width='100px'>Name</th>
                                    <th scope="col" width='100px'>Salary</th>
                                    <th scope="col" width='100px'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                employees.map(item => {
                                    return <TableRow key={item.id} num={item.id} name={item.employee_name}
                                                     salary={item.salary}/>
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;
