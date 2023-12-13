import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signup from './Components/Signup/signup';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import SendMoney from './Components/SendMoney/SendMoney';
import RecievedDetials from './Components/RecievedDetails/RecievedDetials';
import SendDetails from './Components/SendDetails/SendDetails';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/sendmoney" element={<SendMoney />}></Route>
          <Route exact path="/recieveddetails" element={<RecievedDetials />}></Route>
          <Route exact path="/senddetails" element={<SendDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
