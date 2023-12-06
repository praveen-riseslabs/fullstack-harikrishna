import React, { useEffect, useState } from 'react'
import avatar from '../Assets/img/avatar.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    let navigate = useNavigate();
    //eslint-disable-next-line
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

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/login")
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/dashboard'>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                        <div className="d-flex" style={{ alignItems: "center" }}>
                            <div className="dropdown">
                                <button className="btn-secondary dropdown-toggle" style={{ width: "40px", background: "none", border: "none", marginRight: "30px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={avatar} alt="" style={{ height: "30px", width: "30px" }} />
                                </button>
                                <ul className="dropdown-menu" style={{ transform: "translateX(-85px)" }}>
                                    <li><Link className="dropdown-item" to="/forgot-password">Reset Password</Link></li>
                                    <li><button type="submit" className="dropdown-item" onClick={handleLogout} style={{ margin: "none" }}>Logout</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
