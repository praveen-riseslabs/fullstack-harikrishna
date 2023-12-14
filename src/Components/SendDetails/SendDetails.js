import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

const SendDetails = () => {

    const [user, setUser] = useState([]);
    const [allUser, setAllUser] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

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
                setAllUser(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleSelect = (date) => {
        let filteredUsers = allUser.filter((user) => {
            let transactionDate = new Date(user.date)
            return (
                transactionDate >= date.selection.startDate && transactionDate <= date.selection.endDate
            )
        })
        setStartDate(date.selection.startDate)
        setEndDate(date.selection.endDate)
        setUser(filteredUsers)
    }
    
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    return (
        <>
            <Navbar />
            <div className="container" style={{ height: "auto", width: "auto", marginTop: "30px" }}>
                <h1 className='my-4'>Send Details</h1>

                <DateRangePicker
                    ranges={[selectionRange]}
                    onChange={handleSelect}
                />

                <table className="table">
                    <thead>
                        <tr className="table-secondary">
                            <th scope="col">No.</th>
                            <th scope="col">To Email</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Message</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((user, id) => (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{user.Toemail}</td>
                                <td>{user.amount}</td>
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
