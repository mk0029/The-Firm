import React from "react";
import Get from "../components/Get";
import Header from "../components/Header";
import OurPartner from "../components/OurPartner";
import Clients from "../components/Clients";
import Perfect from "../components/Perfect";
import ChoseUs from "../components/ChoseUs";
import Research from "../components/Research";
import Blog from "../components/Blog";
import TestiMonals from "../components/TestiMonals";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loader from "../components/Loader";

function Home() {
  return (
    <>
      <div>
        {" "}
        <Loader timeOut="2100" />
        <Hero />
        <OurPartner />
        <Clients />
        <Perfect paddingTop="py-5" paddingLG="py-lg-5" />
        <ChoseUs />
        <Research />
        <Blog />
        <TestiMonals />
        <Get FirstNone="d-none" />
        <Footer />
      </div>
    </>
  );
}

export default Home;
