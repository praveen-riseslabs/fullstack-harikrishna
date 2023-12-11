import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const AllEmployees = () => {
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllEmployees
