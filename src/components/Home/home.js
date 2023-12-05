import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    let navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            navigate('/dashboard')
        } else {
            navigate("/login")
        }
        // eslint-disable-next-line
    }, []);

    return null;
}

export default Home
