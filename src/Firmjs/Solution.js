import React from "react";
import SolutionCoaching from "../components/SolutionCoaching";
import Perfect from "../components/Perfect";

import Partner from "../components/Partner";
import Seo from "../components/Seo";
import TestiMonals from "../components/TestiMonals";
import Footer from "../components/Footer";
import Coaching from "../components/Coachiing";
import Header from "../components/Header";
import Loader from "../components/Loader";

function Solution() {
  return (
    <>
      <Loader timeOut="1100" />
      <Header />
      <Perfect paddingTop="pb-5" paddingLG="pb-lg-5" />
      <SolutionCoaching />
      <Coaching />
      <Partner />
      <Seo />
      <TestiMonals bggray="bg_gray_testimonals" />
      <Footer />
    </>
  );
}

export default Solution;
