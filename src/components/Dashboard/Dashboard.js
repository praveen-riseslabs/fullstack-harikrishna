import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './Dashboard.css'
import axios from 'axios'

const Dashboard = () => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [token, setToken] = useState("")
    const [userData, setUserData] = useState([])
    const [image, setImage] = useState()
    const [search, setSearch] = useState('');

    useEffect(() => {
        const userToken = localStorage.getItem('token');
        setToken(userToken);
    }, []);

    // eslint-disable-next-line
    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('token', token);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:5000/form-upload', formData);
            const { data } = response;
            if (data) {
                alert("Success!")
                setTitle('')
                setDescription('')
            }
        } catch (error) {
            alert("Error!")
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:5000/form-data', {
                    token: localStorage.getItem('token'),
                });
                const data = await response.data;
                console.log(data);
                setUserData(data)
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [handleSubmit]);


    return (
        <div>
            <Navbar />
            <div className="main-contents">
                <div className="form-container">
                    <h2 className='form-heading'>Add Data</h2>
                    <form className='main-form' onSubmit={handleSubmit}>
                        <span className='form-labels'>Title</span>
                        <input className='form-input' type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <span className='form-labels'>Description</span>
                        <textarea className='form-input' type="text" name="description" id="description" rows='5' style={{ resize: "none" }} value={description} onChange={(e) => setDescription(e.target.value)} />
                        <span className='form-labels'>Upload Image</span>
                        <input className='form-input' type="file" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} />
                        <button className='form-btn'>Submit</button>
                    </form>
                </div>
            </div>

            <div className="main-table">
                <div className="main-table-container">
                    <h2 className='main-table-heading'>Your Data</h2>
                    <div className="filters">
                        <input className='filter-search' type="text" placeholder='Search By Title...' onChange={(e) => { setSearch(e.target.value) }} />
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
                            {userData.filter((item) => {
                                return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
                            }).map((userdata, id) => (
                                <tr key={id}>
                                    <td>{id + 1}</td>
                                    <td className='table-title'>{userdata.title}</td>
                                    <td className='table-description'>{userdata.description}</td>
                                    <td><img className='table-image' src={`http://localhost:5000/` + userdata.image} alt='' /></td>
                                    <td className='options'>
                                        <i className="fa-solid fa-pen-to-square edit"></i>
                                        <i className="fa-solid fa-trash delete"></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
