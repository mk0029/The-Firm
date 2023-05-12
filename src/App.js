import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Firmjs/Home";
import Cases from "./Firmjs/Cases";
import Details from "./Firmjs/Details";
import Solution from "./Firmjs/Solution";
import Digital from "./Firmjs/Digital";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Solution" element={<Solution />} />
        <Route path="/Digital" element={<Digital />} />
      </Routes>
    </div>
  );
}

export default App;
