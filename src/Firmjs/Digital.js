import React from "react";
import Get from "../components/Get";
import JourneyHero from "../components/JourneyHero";
import DigitalLorem from "../components/DigitalLorem";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function Digital() {
  return (
    <>
      <Loader timeOut="1100" />
      <JourneyHero />
      <DigitalLorem />
      <Get classnone="d-none" />
      <Footer />
    </>
  );
}

export default Digital;
