import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
