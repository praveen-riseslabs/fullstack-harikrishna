import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddEmployee = (props) => {

    const [emp_name, setEmp_name] = useState()
    const [emp_id, setEmp_id] = useState()
    const [designation, setDesignation] = useState()
    const [reporting_manager, setReporting_manager] = useState()
    const [hr_manager, setHr_manager] = useState()
    const [gender, setGender] = useState()

    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:5000/addemployee', { emp_name, emp_id, designation, reporting_manager, hr_manager, gender });
            const { data } = response;
            if (data) {
                props.showAlert("success", "Successfully added a new employee")
                navigate("/allemployee")
            } else {
                props.showAlert("danger", "Invalid Details!")
            }
        } catch (error) {
            props.showAlert("danger", "Invalid Details!")
        }
    }

    
    return (
        <>
            <Navbar />
            <div className="contents">
                <Sidebar />
                <div className="right">
                    <h1 className='text-center'>Add Employee</h1>
                    <div className="third" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Employee Name</label>
                                <input type="text" className="form-control" id="emp_name" name="emp_name" style={{ background: "#282c34", color: "white", border: "1px solid #858585" }} onChange={(e) => setEmp_name(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Employee ID</label>
                                <input type="text" className="form-control" id="emp_id" name="emp_id" style={{ background: "#282c34", color: "white", border: "1px solid #858585" }} onChange={(e) => setEmp_id(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Designation</label>
                                <input type="text" className="form-control" id="designation" name="designation" style={{ background: "#282c34", color: "white", border: "1px solid #858585" }} onChange={(e) => setDesignation(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Reporting Manager</label>
                                <input type="text" className="form-control" id="reporting_manager" name="reporting_manager" style={{ background: "#282c34", color: "white", border: "1px solid #858585" }} onChange={(e) => setReporting_manager(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">HR Manager</label>
                                <input type="text" className="form-control" id="hr_manager" name="hr_manager" style={{ background: "#282c34", color: "white", border: "1px solid #858585" }} onChange={(e) => setHr_manager(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <div className="col">
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="gender" value="Male" onChange={e => setGender(e.target.value)} />
                                        <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline mx-3">
                                        <input className="form-check-input" type="radio" name="gender" id="gender" value="Female" onChange={e => setGender(e.target.value)} />
                                        <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline mx-3">
                                        <input className="form-check-input" type="radio" name="gender" id="gender" value="Prefer Not to say" onChange={e => setGender(e.target.value)} />
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
