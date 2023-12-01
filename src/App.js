import './App.css';
import Signup from './components/Signup/signup';
import Home from './components/Home/home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Users from './components/Users/Users';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/users" element={<Users/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
