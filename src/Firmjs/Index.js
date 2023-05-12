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

function Index() {
  return (
    <>
      <div>
        <Hero />
        <OurPartner />
        <Clients />
        <Perfect />
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

export default Index;