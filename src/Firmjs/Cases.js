import React from "react";
import CasesHero from "../components/CasesHero";
import TestiMonals from "../components/TestiMonals";
import Footer from "../components/Footer";
import OurCases from "../components/OurCases";
import Loader from "../components/Loader";

function Cases() {
  return (
    <div>
      <Loader timeOut="1100" />
      <CasesHero />
      <OurCases />
      <TestiMonals bggray="bg_gray_testimonals" />
      <Footer />
    </div>
  );
}

export default Cases;
