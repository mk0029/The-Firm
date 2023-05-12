import React from "react";
import DetailHero from "../components/DetailHero.";
import DetailsLorem from "../components/DetailsLorem";
import DetailsIpsum from "../components/DetailsIpsum";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function Details() {
  return (
    <div>
      <Loader timeOut="1100" />
      <DetailHero />
      <DetailsLorem />
      <DetailsIpsum />
      <Footer />
    </div>
  );
}

export default Details;
