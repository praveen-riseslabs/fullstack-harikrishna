import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <div className="container">
                <h1 className='heading'>Sign in to Continue</h1>
                <Link to='/login'><button type="" className="btn">Login</button></Link>
                <Link to='/register'><button type="" className="btn">Signup</button></Link>
            </div>
        </div>
    )
}

export default Home
