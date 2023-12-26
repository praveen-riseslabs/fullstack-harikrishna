import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Dashboard.css'
import Test from '../../Assets/Images/Test.png'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="main-contents">
                <div className="form-container">
                    <h2 className='form-heading'>Add Data</h2>
                    <form className='main-form' action="">
                        <span className='form-labels'>Title</span>
                        <input className='form-input' type="text" name="title" id="title" />
                        <span className='form-labels'>Description</span>
                        <textarea className='form-input' type="text" name="description" id="description" rows='5' style={{ resize: "none" }} />
                        <span className='form-labels'>Upload Image</span>
                        <input className='form-input' type="file" name="image" id="image" />
                        <button className='form-btn'>Submit</button>
                    </form>
                </div>
            </div>

            <div className="main-table">
                <div className="main-table-container">
                    <h2 className='main-table-heading'>Your Data</h2>
                    <div className="filters">
                        <input className='filter-search' type="text" placeholder='Search By Title...' />
                        <form className="date-form" action="">
                            <input className='date' type="date" name="" id="" />
                            <input className='date' type="date" name="" id="" />
                            <button className='date-form-btn'>Submit</button>
                        </form>
                    </div>

                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Image</th>
                                <th scope="col">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Munnar Trip</td>
                                <td className='table-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
                                <td><img className='table-image' src={Test} alt='' /></td>
                                <td className='options'>
                                    <i className="fa-solid fa-pen-to-square edit"></i>
                                    <i className="fa-solid fa-trash delete"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
