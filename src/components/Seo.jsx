import React, { useRef } from "react";
import Slider from "react-slick";
import studies from "../assets/img/webp/seo-img.webp";
import ovel from "../assets/img/svg/ovel.svg";
import right from "../assets/img/svg/right.svg";

function Seo() {
  return (
    <>
      <section id="Seo" className="py-5">
        <div className="container pb-md-5">
          <div className="row py-5 pt-2">
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="d-flex justify-content-center flex-column h-100">
                <h3
                  className="ff_Nunito fw-bold fs_3xl clr_light_black mb-0"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  SEO
                </h3>
                <p
                  style={{ maxWidth: "547px" }}
                  className="ff_Lora fw-normal fs_xl clr_light_black mb-0 mt-3 pt-1"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500">
              <div className="d-flex justify-content-center position-relative">
                <img
                  className="position-absolute ovel_around_img"
                  src={ovel}
                  alt="img"
                />
                <div
                  style={{ zIndex: "1", position: "relative" }}
                  className="w-75 p-2 shadow bg-white rounded-4">
                  <img className="w-100" src={studies} alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Seo;
