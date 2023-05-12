import React from "react";
import CasesHero from "../components/CasesHero";
import TestiMonals from "../components/TestiMonals";
import Footer from "../components/Footer";
import OurCases from "../components/OurCases";

function Cases() {
  return (
    <div>
      <CasesHero />
      <OurCases />

      <TestiMonals />
      <Footer />
    </div>
  );
}

export default Cases;
