import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Index from "./Firmjs/Index";
import Cases from "./Firmjs/Cases";
import Details from "./Firmjs/Details";
import Solution from "./Firmjs/Solution";
import Digital from "./Firmjs/Digital";
import OurCases from "./components/OurCases";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" overflow-hidden">
      {/* <Index /> */}
      <OurCases />
      {/* <Cases /> */}
      {/* <Details /> */}
      {/* <Solution /> */}
      {/* <Digital /> */}
    </div>
  );
}

export default App;
