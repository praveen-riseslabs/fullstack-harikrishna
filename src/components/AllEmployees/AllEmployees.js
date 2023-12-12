import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

const Limit = 15

const AllEmployees = () => {

    const [employee, setEmployee] = useState([]);
    const [total, setTotal] = useState(0);
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    const fetchData = () => {
        axios.get('http://localhost:5000/allemployees', {
            params: {
                page: activePage,
                size: Limit
            }
        })
            .then(({ data }) => {
                console.log(data)
                setActivePage(activePage + 1)
                setEmployee([...employee, ...data.allEmployees])
                setTotal(data.total)
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <Navbar />
            <div className="contents">
                <Sidebar />
                <div className="right" style={{ height: "100%" }}>
                    <h1 className='text-center'>Employees List</h1>
                    <div className="third" >
                        <InfiniteScroll dataLength={employee.length} next={fetchData} hasMore={employee.length < total} >
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
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllEmployees
