import React from 'react'
import Navbar from '../Navbar/Navbar'
import data from '../Assets/data/MOCK_DATA.json'

const RecievedDetials = () => {
    return (
        <>
            <Navbar />
            <div className="container" style={{ height: "auto", width: "auto", marginTop: "30px" }}>
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
                        {data.filter((item) => item.type === 'mastercard').map((item) => (
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
        </>
    )
}

export default RecievedDetials
