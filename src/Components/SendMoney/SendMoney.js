import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SendMoney = () => {

    const [Toemail, setToEmail] = useState("")
    const [amount, setAmount] = useState("")
    const [message, setMessage] = useState("")
    const [token, setToken] = useState("")

    let navigate = useNavigate();

    useEffect(() => {
        const userToken = localStorage.getItem('token');
        setToken(userToken);
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/sendmoney', { Toemail, amount, message, token });
            const { data } = response;
            if (data) {
                alert("Amount sent successfully")
                navigate("/dashboard")
            } else {
                alert("Error! Please Try Again")
            }
        } catch (error) {
            console.log(error)
            alert("Insufficient Balance")
        }
    }

    return (
        <>
            <Navbar />
            <div className="contents" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "7rem" }}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="Toemail" name="Toemail" aria-describedby="emailHelp" onChange={(e) => setToEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Amount</label>
                        <input type="number" className="form-control" id="amount" name="amount" onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                        <textarea className="form-control" aria-label="With textarea" rows="5" style={{ resize: "none" }} id="message" name="message" onChange={(e) => setMessage(e.target.value)} ></textarea>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Send</button>
                </form>
            </div>
        </>
    )
}

export default SendMoney
