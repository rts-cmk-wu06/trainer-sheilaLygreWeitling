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
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Class/:id" element={<SingleClass />} />
      </Routes>
    </div>
  );
}

export default App;
