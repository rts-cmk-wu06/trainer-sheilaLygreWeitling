import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
