import React from 'react'
import './Main.css'
import First from '../../Assets/Images/First.png'
import Avatar from '../../Assets/Images/Avatar.jpg'
import Avatar1 from '../../Assets/Images/face1.jpg'
import Avatar2 from '../../Assets/Images/face2.jpg'
import Avatar3 from '../../Assets/Images/face3.jpg'

const Main = () => {
    return (
        <div className='main'>

            <div className="first-container">
                <div className="img">
                    <img src={First} alt="" />
                </div>
                <div className="desc">
                    <h4>Want Even More Features?</h4>
                    <p>Checkout Our Pro version with 5 unique layouts!</p>
                </div>
                <div className="upgrade-button">
                    <button>Upgrade to PRO</button>
                </div>
            </div>

            <div className="second-container">
                <div className="card1">
                    <div className="texts">
                        <div className="main-text">
                            <h3 className='amount'>$12.34</h3>
                            <p className="success">+3.5%</p>
                        </div>
                        <div className="sub-text">
                            Potential Growth
                        </div>
                    </div>
                    <div className="arrow">
                        <i className="fa-solid fa-arrow-up"></i>
                    </div>
                </div>
                <div className="card2">
                    <div className="texts">
                        <div className="main-text">
                            <h3 className='amount'>$17.34</h3>
                            <p className="success">+11%</p>
                        </div>
                        <div className="sub-text">
                            Revenue current
                        </div>
                    </div>
                    <div className="arrow">
                        <i className="fa-solid fa-arrow-up"></i>
                    </div>
                </div>
                <div className="card3">
                    <div className="texts">
                        <div className="main-text">
                            <h3 className='amount'>$12.34</h3>
                            <p className="danger">-2.4%</p>
                        </div>
                        <div className="sub-text">
                            Daily Income
                        </div>
                    </div>
                    <div className="arrow-danger">
                        <i className="fa-solid fa-arrow-down"></i>
                    </div>
                </div>
                <div className="card4">
                    <div className="texts">
                        <div className="main-text">
                            <h3 className='amount'>$31.53</h3>
                            <p className="success">+3.5%</p>
                        </div>
                        <div className="sub-text">
                            Expense current
                        </div>
                    </div>
                    <div className="arrow">
                        <i className="fa-solid fa-arrow-up"></i>
                    </div>
                </div>
            </div>

            <div className="third-container">
                <div className="chart-div">
                    <h4>Transaction History</h4>
                    <div className="chart-img-div">
                        <img className='chart-img' src={First} alt='' />
                    </div>
                    <div className="chart-texts">
                        <div className='chart-main-text'>
                            <h6>Transfer To Paypal</h6>
                            <p>07 Jan 2019, 09:12AM</p>
                        </div>
                        <h6>$236</h6>
                    </div>
                    <div className="chart-texts">
                        <div className='chart-main-text'>
                            <h6>Transfer To Stripe</h6>
                            <p>07 Jan 2019, 09:12AM</p>
                        </div>
                        <h6 className='money'>$593</h6>
                    </div>
                </div>
                <div className="table-div">
                    <div className="table-heading">
                        <h4>Open Projects</h4>
                        <p>Your data status</p>
                    </div>
                    <div className="table-contents">
                        <div className="first-row">
                            <div className="icon-text">
                                <div className="first-row-icon">
                                    <i className="fa-solid fa-file"></i>
                                </div>
                                <div className="content-texts">
                                    <h6 className='row-sub-headline'>Admin dashboard Design</h6>
                                    <p className='row-sub-text'>Broadcast web app mockup</p>
                                </div>
                            </div>
                            <div className="content-muted-texts">
                                <p className="third-container-p">15 minutes ago</p>
                                <p className="third-container-p">30 tasks, 5 issues</p>
                            </div>
                        </div>
                        <div className="second-row">
                            <div className="icon-text">
                                <div className="second-row-icon">
                                    <i className="fa-solid fa-cloud-arrow-down"></i>
                                </div>
                                <div className="content-texts">
                                    <h6 className='row-sub-headline'>Wordpress Development</h6>
                                    <p className='row-sub-text'>Upload new design</p>
                                </div>
                            </div>
                            <div className="content-muted-texts">
                                <p className="third-container-p">1 hour ago</p>
                                <p className="third-container-p">23 tasks, 5 issues</p>
                            </div>
                        </div>
                        <div className="third-row">
                            <div className="icon-text">
                                <div className="third-row-icon">
                                    <i className="fa-solid fa-clock"></i>
                                </div>
                                <div className="content-texts">
                                    <h6 className='row-sub-headline'>Project Meeting</h6>
                                    <p className='row-sub-text'>New project discussion</p>
                                </div>
                            </div>
                            <div className="content-muted-texts">
                                <p className="third-container-p">35 minutes ago</p>
                                <p className="third-container-p">15 tasks, 2 issues</p>
                            </div>
                        </div>
                        <div className="fourth-row">
                            <div className="icon-text">
                                <div className="fourth-row-icon">
                                    <i className="fa-solid fa-envelope-open"></i>
                                </div>
                                <div className="content-texts">
                                    <h6 className='row-sub-headline'>Broadcast Mail</h6>
                                    <p className='row-sub-text'>Sent release details to the team</p>
                                </div>
                            </div>
                            <div className="content-muted-texts">
                                <p className="third-container-p">55 minutes ago</p>
                                <p className="third-container-p">35 tasks, 7 issues</p>
                            </div>
                        </div>
                        <div className="fifth-row">
                            <div className="icon-text">
                                <div className="fifth-row-icon">
                                    <i className="fa-solid fa-chart-pie"></i>
                                </div>
                                <div className="content-texts">
                                    <h6 className='row-sub-headline'>UI Design</h6>
                                    <p className='row-sub-text'>New application planning</p>
                                </div>
                            </div>
                            <div className="content-muted-texts">
                                <p className="third-container-p">50 minutes ago</p>
                                <p className="third-container-p">27 tasks, 4 issues</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fourth-container">
                <div className="fourth-container-cards">
                    <h5>Revenue</h5>
                    <div className="fourth-cards-contents">
                        <div className="main-sub-texts">
                            <div className="fourth-card-main">
                                <h2>$32123</h2>
                                <p className='success'>+3.5%</p>
                            </div>
                            <h6 className='content-muted-texts'>11.38% Since last month</h6>
                        </div>
                        <i className="fa-brands fa-codepen fourth-card-icon fourth-card-first"></i>
                    </div>
                </div>
                <div className="fourth-container-cards">
                    <h5>Sales</h5>
                    <div className="fourth-cards-contents">
                        <div className="main-sub-texts">
                            <div className="fourth-card-main">
                                <h2>$45850</h2>
                                <p className='success'>+8.3%</p>
                            </div>
                            <h6 className='content-muted-texts'>9.61% Since last month</h6>
                        </div>
                        <i className="fa-solid fa-briefcase fourth-card-icon fourth-card-second"></i>
                    </div>
                </div>
                <div className="fourth-container-cards">
                    <h5>Purchase</h5>
                    <div className="fourth-cards-contents">
                        <div className="main-sub-texts">
                            <div className="fourth-card-main">
                                <h2>$2039</h2>
                                <p className='success'>-2.1%</p>
                            </div>
                            <h6 className='content-muted-texts'>2.27% Since last month</h6>
                        </div>
                        <i className="fa-solid fa-desktop fourth-card-icon fourth-card-third"></i>
                    </div>
                </div>
            </div>

            <div className="fifth-container">
                <div className="fifth-container-contents">
                    <h4 className='fifth-container-heading'>Order Status</h4>
                    <div className="table-container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"><input type='checkbox' /></th>
                                    <th scope="col">Client Name</th>
                                    <th scope="col">Order No</th>
                                    <th scope="col">Product Cost</th>
                                    <th scope="col">Project</th>
                                    <th scope="col">Payment Mode</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">Payment Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"><input type='checkbox' /></th>
                                    <td>Henry Klein</td>
                                    <td>02312</td>
                                    <td>$14,500</td>
                                    <td>Dashboard</td>
                                    <td>Credit card</td>
                                    <td>04 Dec 2019</td>
                                    <td><button type="button" className="btn btn-outline-success" disabled>Approved</button></td>
                                </tr>
                                <tr>
                                    <th scope="row"><input type='checkbox' /></th>
                                    <td>Estella Bryan</td>
                                    <td>02312</td>
                                    <td>$14,500</td>
                                    <td>Website</td>
                                    <td>Cash on delivered</td>
                                    <td>04 Dec 2019</td>
                                    <td><button type="button" className="btn btn-outline-warning" disabled>Pending</button></td>
                                </tr>
                                <tr>
                                    <th scope="row"><input type='checkbox' /></th>
                                    <td>Lucy Abbott</td>
                                    <td>02312</td>
                                    <td>$14,500</td>
                                    <td>App design</td>
                                    <td>Credit card</td>
                                    <td>04 Dec 2019</td>
                                    <td><button type="button" className="btn btn-outline-danger" disabled>Rejected</button></td>
                                </tr>
                                <tr>
                                    <th scope="row"><input type='checkbox' /></th>
                                    <td>Peter Gill</td>
                                    <td>02312</td>
                                    <td>$14,500</td>
                                    <td>Development</td>
                                    <td>Online Payment</td>
                                    <td>04 Dec 2019</td>
                                    <td><button type="button" className="btn btn-outline-success" disabled>Approved</button></td>
                                </tr>
                                <tr>
                                    <th scope="row"><input type='checkbox' /></th>
                                    <td>Sallie Reyes</td>
                                    <td>02312</td>
                                    <td>$14,500</td>
                                    <td>Website</td>
                                    <td>Credit card</td>
                                    <td>04 Dec 2019</td>
                                    <td><button type="button" className="btn btn-outline-success" disabled>Approved</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="sixth-container">
                <div className="sixth-container-cards">
                    <div className="sixth-container-heading">
                        <h4>Messages</h4>
                        <p>View all</p>
                    </div>
                    <div className="lists">
                        <div className="list-item">
                            <img className='avatar-img' src={Avatar} alt='' />
                            <div className="list-item-texts">
                                <h6>Leonard</h6>
                                <p>Well, it seems to be working now.</p>
                            </div>
                            <p className='timer'>5 minutes ago</p>
                        </div>
                        <div className="list-item">
                            <img className='avatar-img' src={Avatar} alt='' />
                            <div className="list-item-texts">
                                <h6>Luella Mills</h6>
                                <p>Well, it seems to be working now.</p>
                            </div>
                            <p className='timer'>10 Minutes Ago</p>
                        </div>
                        <div className="list-item">
                            <img className='avatar-img' src={Avatar} alt='' />
                            <div className="list-item-texts">
                                <h6>Leonard</h6>
                                <p>Well, it seems to be working now.</p>
                            </div>
                            <p className='timer'>5 minutes ago</p>
                        </div>
                        <div className="list-item">
                            <img className='avatar-img' src={Avatar} alt='' />
                            <div className="list-item-texts">
                                <h6>Luella Mills</h6>
                                <p>Well, it seems to be working now.</p>
                            </div>
                            <p className='timer'>10 Minutes Ago</p>
                        </div>
                    </div>
                </div>
                <div className="sixth-container-cards">
                    <div className="sixth-container-heading">
                        <h4>Portfolio Slide</h4>
                        <p>
                            <i className="fa-solid fa-chevron-left toggle-btn"></i>
                            <i className="fa-solid fa-chevron-right toggle-btn"></i>
                        </p>
                    </div>
                    <div className="carousel">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Avatar1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Avatar2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={Avatar3} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                        <div className="list-item">
                            <img className='avatar-img' src={Avatar} alt='' />
                            <div className="list-item-texts">
                                <h6>Leonard</h6>
                                <p>Well, it seems to be working now.</p>
                            </div>
                            <p className='timer'>5 minutes ago</p>
                        </div>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                <div className="sixth-container-cards">
                    <h4 className='to-do-heading'>To Do List</h4>
                    <div className="todo-contents">
                        <div className="inputgroup">
                            <input className='todo-input' type='text' placeholder='enter a task...' />
                            <button type="button" className="btn btn-primary todo-btn">Add</button>
                        </div>
                        <div className="todo-list-item">
                            <ul>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Pick up kids from school
                                        </label>
                                    </div>
                                    <i className="fa-solid fa-rectangle-xmark close-icon"></i>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Plan weekend outing
                                        </label>
                                    </div>
                                    <i className="fa-solid fa-rectangle-xmark close-icon"></i>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Prepare for presentation
                                        </label>
                                    </div>
                                    <i className="fa-solid fa-rectangle-xmark close-icon"></i>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Meeting with Alita
                                        </label>
                                    </div>
                                    <i className="fa-solid fa-rectangle-xmark close-icon"></i>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Create invoice
                                        </label>
                                    </div>
                                    <i className="fa-solid fa-rectangle-xmark close-icon"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Main
