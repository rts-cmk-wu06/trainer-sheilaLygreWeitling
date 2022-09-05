import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";
import LoginPage from "./Pages/LoginPage";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="LoginPage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
