import React, { useRef } from "react";
import Slider from "react-slick";
import studies from "../assets/img/webp/detail-hero.webp";
import ovel from "../assets/img/svg/ovel.svg";
import right from "../assets/img/svg/right.svg";
import Header from "./Header";

function DetailHero() {
  return (
    <>
      <section style={{ background: " #F7F7F7" }} id="DetailHero">
        <div>
          <Header />
        </div>
        <div className="container py-5">
          <div className="row py-sm-5 pt-2 flex-column-reverse flex-md-row justify-content-between">
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="d-flex justify-content-center flex-column h-100 mt-xl-5">
                <h3
                  className="ff_Nunito fw-bold fs_4xl clr_light_black mb-0"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  Lorem{" "}
                  <span className=" position-relative after_yellow_line z_index2">
                    Ipsum
                  </span>
                </h3>
                <p
                  className="ff_Lora fw-normal fs_xl clr_light_black mb-0 mt-2 pt-1 mb-xl-5 mb-4 pe-xl-5 me-md-2"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took. Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry. Lorem Ipsum is simply
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
                <span
                  className="d-flex gap-3 "
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  <a
                    class="get_touch_btn ff_Nunito d-inline-block fw-bold fs_2xl text-white mt-sm-3 mt-xl-4 transition300"
                    href="#about"
                  >
                    Digital Partners
                  </a>
                  <a
                    class="get_touch_btn ff_Nunito d-inline-block fw-bold fs_2xl text-white mt-sm-3 mt-xl-4 transition300"
                    href="#about"
                  >
                    Coaching
                  </a>
                </span>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <div className="d-flex justify-content-center position-relative pt-lg-3">
                <img
                  className="position-absolute ovel_around_img1"
                  src={ovel}
                  alt="img"
                />

                <img
                  style={{ zIndex: "2", borderRadius: "25px" }}
                  className="w-100 hero_img_shadow"
                  src={studies}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailHero;
