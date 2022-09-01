import Trainer from "./Page/Trainer";
import Welcome from "./Templates/Welcome";
import Home from "./Templates/Home";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
