import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

    const [user, setUser] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:5000/dashboard', {
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



    return (
        <div className='signup' style={{ height: "100%" }}>
            <div className="container">
                <h1 className='heading' style={{ fontSize: "2.5rem" }}>Dashboard</h1>

                <div className="">
                    <p className="text" style={{ fontSize: "18px", fontWeight: "500" }}>Fullname : <span style={{ fontWeight: "400" }}>{user.fullname}</span></p>
                    <p className="text" style={{ fontSize: "18px", fontWeight: "500" }}>Gender : <span style={{ fontWeight: "400" }}>{user.gender}</span></p>
                    <p className="text" style={{ fontSize: "18px", fontWeight: "500" }}>Email : <span style={{ fontWeight: "400" }}>{user.email}</span></p>
                    <p className="text" style={{ fontSize: "18px", fontWeight: "500" }}>Phone : <span style={{ fontWeight: "400" }}>{user.phNo}</span></p>
                </div>

                <button type="submit" className="btn">Logout</button>
            </div>
        </div>
    )
}

export default Dashboard
