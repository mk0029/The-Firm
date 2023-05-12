import React from "react";
import Get from "../components/Get";
import JourneyHero from "../components/JourneyHero";
import DigitalLorem from "../components/DigitalLorem";
import Footer from "../components/Footer";

function Digital() {
  return (
    <>
      <JourneyHero />
      <DigitalLorem />
      <Get classnone="d-none" />
      <Footer />
    </>
  );
}

export default Digital;
