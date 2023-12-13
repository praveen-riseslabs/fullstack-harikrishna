import React from 'react'
import Navbar from '../Navbar/Navbar'

const SendMoney = () => {
    return (
        <>
            <Navbar />
            <div className="contents" style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "7rem" }}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Amount</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                        <textarea className="form-control" aria-label="With textarea" rows="5" style={{ resize: "none" }}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        </>
    )
}

export default SendMoney
