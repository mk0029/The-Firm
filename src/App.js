import "./App.css";
import "./Outer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Research from "./components/Research";
import Footer from "./components/Footer";
import CasesHero from "./components/CasesHero";
import JourneyHero from "./components/JourneyHero";
import DetailHero from "./components/DetailHero.";
import Coaching from "./components/Coachiing";
import Partner from "./components/Partner";
import Seo from "./components/Seo";

function App() {
  return (
    <>
      <Hero />
      <CasesHero />
      <JourneyHero />
      <DetailHero />
      <Coaching />
      <Partner />
      <Seo />
      <Research />
      <Footer />
    </>
  );
}

export default App;
