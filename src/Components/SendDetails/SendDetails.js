import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';

const SendDetails = () => {

    const [user, setUser] = useState([]);

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:5000/sendpayments', {
                    token: localStorage.getItem('token'),
                });
                const data = await response.data;
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    var number = 1;

    return (
        <>
            <Navbar />
            <div className="container" style={{ height: "auto", width: "auto", marginTop: "30px" }}>
                <h1 className='my-4'>Send Details</h1>
                <table className="table">
                    <thead>
                        <tr className="table-secondary">
                            <th scope="col">No.</th>
                            <th scope="col">To Email</th>
                            <th scope="col">Amount</th>
                            {/* <th scope="col">Type</th> */}
                            <th scope="col">Message</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user, id) => (
                            <tr key={id}>
                                <td>{number++}</td>
                                <td>{user.Toemail}</td>
                                <td>{user.amount}</td>
                                {/* <td>{user.type}</td> */}
                                <td>{user.message}</td>
                                <td>{formatDate(user.date)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SendDetails
