import React from "react";
import Header from "./Header";
import hero_img from "../assets/img/png/hero-img.png";
import c_img from "../assets/img/png/C-img.png";

function Hero() {
  return (
    <>
      <div className=" min_vh_100 d-flex flex-column">
        <Header />
        <section
          className="hero_bg_img position-relative flex-grow-1 d-flex justify-content-center align-items-center flex-column border-top"
          id="Hero"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6  py-xl-0 py-5">
                <h1
                  className=" ff_Nunito fw_bolder fs_5xl clr_light_black mb-0 text_shadow z_index5 position-relative"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  Get Bussiness{" "}
                  <span className=" d-lg-block">Solutions with TheFirm.</span>
                </h1>
                <p
                  className=" ff_Lora fw-normal fs_xl clr_light_black mt-xl-4 mt-2 pt-sm-1 mb-0 pb-sm-2 z_index5 position-relative"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  Lorem Ipsum is simply dummy text of the printing
                  <span className="d-lg-block">
                    and typesetting industry. Lorem Ipsum has been
                  </span>{" "}
                  the industry's standard dummy.
                </p>
                <span
                  className=" d-inline-block"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  <a
                    class="get_touch_btn ff_Nunito d-inline-block fw-bold fs_xl text-white position-relative mt-2 mt-md-4 transition300"
                    href="#about"
                  >
                    Get in Touch
                  </a>
                </span>
              </div>
              <div className="col-lg-6 d-xl-none h-100 pb-5 pb-lg-0">
                <img className=" w-100" src={hero_img} alt="hero_img" />
              </div>
              <div className="col-xl-7 col-6 position-absolute h-100 end-0 pe-xl-0 d-none d-xl-block">
                <div className=" d-flex justify-content-end h-100 position-relative ">
                  <img
                    className=" position-absolute z_index4 c_img_position"
                    src={c_img}
                    alt="c_img"
                  />
                  <img
                    className="hero_img_custom z_index1 position-relative shadow rounded-5"
                    src={hero_img}
                    alt="hero_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
