import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar";
import HeroDetails from "./components/HeroDetails";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/:id"} element={<HeroDetails />} />
      </Routes>
    </>
  );
}

export default App;
