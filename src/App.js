import './App.css';
import Signup from './components/Signup/signup';
import Home from './components/Home/home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import DragandDrop from './components/DragandDrop/DragandDrop';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/drag-drop" element={<DragandDrop />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
