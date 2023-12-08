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
import Friends from './components/Friends/Friends';
import Teams from './components/Teams/Teams';
import { useState } from 'react';
import Alert from './components/Alert/Alert';

function App() {

  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }

  return (
    <div>
      <Router>
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<Signup showAlert={showAlert} />}></Route>
          <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
          <Route exact path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route exact path="/dashboard" element={<Dashboard showAlert={showAlert} />}></Route>
          <Route exact path="/friends" element={<Friends />}></Route>
          <Route exact path="/teams" element={<Teams />}></Route>
          <Route exact path="/drag-drop" element={<DragandDrop />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
