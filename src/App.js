import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Homepage from './Pages/Homepage';
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/chats" element={<ChatPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
