import './Navbar.css'
import Avatar from "../../Assets/Images/Avatar.jpg";
const Navbar = () => {

    return (
        <div className="navbar">
            <div className="logo">
                <p>CORONA</p>
            </div>
            <div className="logo-res">
                <p>C</p>
            </div>

            <div className="navbar-content">
                <i className="fa-solid fa-bars navbar-button"></i>
                <input className='seacrh-box' type="" placeholder='Search products' />

                <div className="button-group">
                    <div className="button">
                        <button className='new-project-btn'>
                            <i className="fa-solid fa-plus"></i>Create New Project
                        </button>
                    </div>
                    <div className='grid'>
                        <i className="fa-solid fa-table-cells-large"></i>
                    </div>
                    <div className='message'>
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className='bell'>
                        <i className="fa-solid fa-bell"></i>
                    </div>
                </div>
                <div className="user-info">
                    <img className='avatar-img' src={Avatar} alt="" />
                    <span className='avatar-name'>Henry Klein</span>
                </div>

                <i className="fa-solid fa-align-right button-res"></i>
            </div>
        </div>
    )
}

export default Navbar
