import "./App.css";
import "./pk.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Clients from "./components/Clients";
import Get from "./components/Get";
import Perfect from "./components/Perfect";
import Blog from "./components/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailsLorem from "./components/DetailsLorem";
import DetailsIpsum from "./components/DetailsIpsum";
import DigitalLorem from "./components/DigitalLorem";
import Digital from "./Firmjs/Digital";
import Index from "./Firmjs/Index";
import Solution from "./Firmjs/Solution";

function App() {
  return (
    <>
      <Clients />
      <Perfect />
      <Index />
      <Blog />
      <DetailsLorem />
      <DetailsIpsum />
      <DigitalLorem />
      <Digital />
      <Solution />
    </>
  );
}

export default App;
