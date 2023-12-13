import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    let navigate = useNavigate();
    // eslint-disable-next-line
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

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate("/login")
        }
        // eslint-disable-next-line
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }

    return (
        <div>
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/dashboard">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/sendmoney">Send Money</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/recieveddetails">Recieved Payments</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/senddetails">Send Payments</Link>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="btn" onClick={handleLogout} style={{ marginTop: "0", width: "auto" }}>
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
