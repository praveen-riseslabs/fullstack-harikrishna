// import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

    const [user, setUser] = useState("");

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.post('http://localhost:5000/dashboard', {
    //                 token: localStorage.getItem('token'),
    //             });
    //             const data = await response.data;
    //             console.log(data)
    //             setUser(data);

    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // useEffect(() => {
    //     console.log(user);
    // }, [user]);


    useEffect(() => {
        fetch("http://localhost:5000/dashboard", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                setUser(data.data);
                console.log(user)
            });
    }, []);




    return (
        <div className='signup' style={{ height: "100%" }}>
            <div className="container">
                <h1 className='heading' style={{ fontSize: "2.5rem" }}>Dashboard</h1>

                <div className="">
                    <p className="text" style={{ fontSize: "18px", fontWeight: "500" }}>Fullname : <span style={{ fontWeight: "400" }}>{user.fullname}</span></p>
                    <p className="text" style={{ fontSize: "18px", fontWeight: "500" }}>Email : <span style={{ fontWeight: "400" }}>{user.email}</span></p>
                    <p className="text" style={{ fontSize: "18px", fontWeight: "500" }}>Phone : <span style={{ fontWeight: "400" }}>{user.phNo}</span></p>
                </div>

                <button type="submit" className="btn">Logout</button>
            </div>
        </div>
    )
}

export default Dashboard
