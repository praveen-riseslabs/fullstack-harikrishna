import React, { useEffect, useState } from 'react'
import avatar from '../Assets/img/avatar.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    let navigate = useNavigate();
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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand mb-0 h1" to='/dashboard'>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="container-fluid">
                            <div className="input-group" style={{ width: "50%" }}>
                                <span className="input-group-text" id="basic-addon1" style={{ background: "#282c34", color: "white", border: "1px solid #858585" }}>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="" aria-label="search" aria-describedby="basic-addon1" style={{ background: "#282c34", color: "white", border: "1px solid #858585" }} />
                            </div>
                        </form>
                        <div className="d-flex" style={{ alignItems: "center" }}>
                            <div className="dropdown">
                                <button className="btn-secondary dropdown-toggle" style={{ width: "40px", background: "none", border: "none", marginRight: "30px", color: "white" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={avatar} alt="" style={{ height: "30px", width: "30px", filter: "invert(1)" }} />
                                </button>
                                <ul className="dropdown-menu" style={{ transform: "translateX(-85px)", background: "rgb(39 39 39)" }}>
                                    <li className='text-center' style={{ color: "white"}}><strong>{user.fullname}</strong></li>
                                    <li><Link className="dropdown-item text-secondary" style={{ color: "white"}} to="/forgot-password">Reset Password</Link></li>
                                    <li><button type="submit" className="dropdown-item text-secondary" onClick={handleLogout} style={{ margin: "none" }}>Logout</button></li>
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
