import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'

const AddEmployee = () => {
    return (
        <>
            <Navbar />
            <div className="contents">
                <Sidebar />
                <div className="right">
                    <h1 className='text-center'>Add Employee</h1>
                    <div className="third" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Employee Name</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" style={{ background: "#282c34", color: "white", border: "1px solid #858585" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Employee ID</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" style={{ background: "#282c34", color: "white", border: "1px solid #858585" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Designation</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" style={{ background: "#282c34", color: "white", border: "1px solid #858585" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Reporting Manager</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" style={{ background: "#282c34", color: "white", border: "1px solid #858585" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">HR Manager</label>
                                <input type="text" className="form-control" id="exampleInputPassword1" style={{ background: "#282c34", color: "white", border: "1px solid #858585" }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <div className="col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="gender" value="Male" />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline mx-3">
                                        <input className="form-check-input" type="radio" name="gender" id="gender" value="Female" />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline mx-3">
                                        <input className="form-check-input" type="radio" name="gender" id="gender" value="Prefer Not to say"/>
                                        <label className="form-check-label" htmlFor="inlineRadio3">Prefer Not to say</label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: "700px", marginTop: "15px" }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmployee
