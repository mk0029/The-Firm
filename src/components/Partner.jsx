import React, { useRef } from "react";
import Slider from "react-slick";
import studies from "../assets/img/webp/partner-img.webp";
import ovel from "../assets/img/svg/ovel.svg";
import right from "../assets/img/svg/right.svg";

function Partner() {
  return (
    <>
      <section id="Partner" className="py-5">
        <div className="container ">
          <div className="row mt-md-5 py-5 pt-2 flex-column-reverse flex-md-row">
            <div className="col-md-6 mt-4">
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
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="d-flex justify-content-center flex-column h-100">
                <h3 className="ff_Nunito fw-bold fs_3xl clr_light_black mb-0">
                  Digital Partner
                </h3>
                <p className="ff_Lora fw-normal fs_xl clr_light_black mb-0 mt-2 pt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took.
                </p>
                <span>
                  {" "}
                  <a
                    class="get_touch_btn ff_Nunito d-inline-block fw-bold fs_xl text-white mt-4 mt-md-4"
                    href="#about">
                    Read More
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Partner;
