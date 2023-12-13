import React from 'react'
import Navbar from '../Navbar/Navbar'
import data from '../Assets/data/MOCK_DATA.json'

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="contents">
                <h3 className='text-center my-4'>Current Balance</h3>
                <h3 className='text-center text-secondary mb-5'>&#8377;624</h3>
                <h3 className='text-center my-4'>All Transactions</h3>
                <div className="container" style={{ height: "auto", width: "auto" }}>
                    <table className="table">
                        <thead>
                            <tr className="table-secondary">
                                <th scope="col">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Type</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.type}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default Dashboard
