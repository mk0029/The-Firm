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
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
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
          <div className=" text-center pb-5 ">
            <h2 className=" ff_Nunito fs_4xxl fw_bolder  d-inline-block mb-0 clr_light_black">
              Our{" "}
              <span className="position-relative after_yellow_line">
                Partner
              </span>
            </h2>
          </div>
          <Slider {...settings} className="px-xxl-5">
            <div className="py-4 d-flex justify-content-center">
              <img className="Logos transition300" src={Logo1} alt="" />
            </div>
            <div className="py-4 d-flex justify-content-center">
              <img className="Logos transition300" src={Logo2} alt="" />
            </div>
            <div className="py-4 d-flex justify-content-center">
              <img className="Logos transition300" src={Logo3} alt="" />
            </div>
            <div className="py-4 d-flex justify-content-center">
              <img className="Logos transition300" src={Logo4} alt="" />
            </div>
            <div className="py-4 d-flex justify-content-center">
              <img className="Logos transition300" src={Logo1} alt="" />
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default OurPartner;
