import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'

const AllEmployees = () => {

    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/allemployees')
            .then((response) => {
                setEmployee(response.data)
            })
            .catch((error) => console.log(error))
    }, [])

    return (
        <>
            <Navbar />
            <div className="contents">
                <Sidebar />
                <div className="right">
                    <h1 className=''>Employees List</h1>
                    <div className="third" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <table className="table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Employee ID</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Reporting Manager</th>
                                    <th scope="col">HR Manager</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employee.map((item, _id) => (
                                    <tr key={_id}>
                                        <th scope="row">{item.emp_name}</th>
                                        <td>{item.emp_id}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.reporting_manager}</td>
                                        <td>{item.hr_manager}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllEmployees
