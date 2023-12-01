import './App.css';
import Signup from './components/Signup/signup';
import Home from './components/Home/home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<Signup />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
