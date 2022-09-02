import Welcome from "./Pages/Welcome";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
/* import { useState } from "react";
import { useEffect } from "react"; */


function App() {

  /*   const [startPage, setStartpage] = useState(true);
  
    useEffect(() => {
      const startingPage = localStorage.getItem("startingPage");
      if (startingPage) {
        setStartpage(false);
      }
    }, []); */

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
