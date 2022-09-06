import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search";
import LoginPage from "./Pages/LoginPage";
import SingleClass from "./Pages/SingleClass";
import Schedule from "./Pages/Schedule";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/class/:id" element={<SingleClass />} />
      </Routes>
    </div>
  );
}

export default App;
