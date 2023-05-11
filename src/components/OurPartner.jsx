import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Logo1 from "../assets/img//png/Windows.png";
import Logo2 from "../assets/img//png/Google.png";
import Logo3 from "../assets/img//png/Firefox.png";
import Logo4 from "../assets/img//png/SaFari.png";
function OurPartner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <>
      <section id="OurPartner" className=" py-5">
        <div className=" container">
          <div className="">
            <h2>Our Partner</h2>
          </div>
          <Slider {...settings}>
            <div className="py-4">
              <img className="Logos transition300" src={Logo1} alt="" />
            </div>
            <div className="py-4">
              <img className="Logos transition300" src={Logo2} alt="" />
            </div>
            <div className="py-4">
              <img className="Logos transition300" src={Logo3} alt="" />
            </div>
            <div className="py-4">
              <img className="Logos transition300" src={Logo4} alt="" />
            </div>
            <div className="py-4">
              <img className="Logos transition300" src={Logo1} alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default OurPartner;
