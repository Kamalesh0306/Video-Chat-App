import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/getstarted" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
     
    </div>
  );
}

export default App;
