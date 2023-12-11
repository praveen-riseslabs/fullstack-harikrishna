import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { Link } from 'react-router-dom'

const totalPagesCalc = (total, limit) => {
    const pages = []
    for (let x = 1; x <= parseInt(total) / limit; x++) {
        pages.push(x)
    }
    return pages
}

const Limit = 10

const AllEmployees = () => {

    const [employee, setEmployee] = useState([]);
    const [total, setTotal] = useState(0);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        axios.get('http://localhost:5000/allemployees', {
            params: {
                page: activePage,
                size: Limit
            }
        })
            .then((response) => {
                console.log(response.data)
                setEmployee(response.data.allEmployees)
                setTotal(response.data.total)
            })
            .catch((error) => console.log(error))
    }, [activePage])

    return (
        <>
            <Navbar />
            <div className="contents">
                <Sidebar />
                <div className="right">
                    <h1 className=''>Employees List</h1>
                    <div className="third" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
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
                                        <th scope="row" style={{ fontWeight: "400" }}>{item.emp_name}</th>
                                        <td style={{ fontWeight: "400" }}>{item.emp_id}</td>
                                        <td style={{ fontWeight: "400" }}>{item.designation}</td>
                                        <td style={{ fontWeight: "400" }}>{item.reporting_manager}</td>
                                        <td style={{ fontWeight: "400" }}>{item.hr_manager}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <nav aria-label="Page navigation example" style={{ marginTop: "20px" }}>
                            <ul className="pagination">
                                {activePage !== 1 &&<li className="page-item" onClick={() => setActivePage(activePage - 1)}>
                                    <Link type='button' className="page-link" to="" disabled>Previous</Link>
                                </li>}
                                {totalPagesCalc(total, Limit).map(pageNo => (
                                    <li className={`page-item ${pageNo === activePage ? 'active' : ''}`} key={pageNo} onClick={() => setActivePage(pageNo)}>
                                        <Link className="page-link" to="">{pageNo}</Link>
                                    </li>
                                ))}
                                {activePage !== parseInt(total/Limit) && <li className="page-item" onClick={() => setActivePage(activePage + 1)}>
                                    <Link className="page-link" to="">Next</Link>
                                </li>}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllEmployees
