import React from "react";
import DetailHero from "../components/DetailHero.";
import DetailsLorem from "../components/DetailsLorem";
import DetailsIpsum from "../components/DetailsIpsum";
import Footer from "../components/Footer";

function Details() {
  return (
    <div>
      <DetailHero />
      <DetailsLorem />
      <DetailsIpsum />
      <Footer />
    </div>
  );
}

export default Details;
