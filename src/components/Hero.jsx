import React from "react";
import Header from "./Header";
import headerImg from "../assets/img/webp/header-img.webp";
import cIcon from "../assets/img/svg/c-icon.svg";

function Hero() {
  return (
    <>
      <section
        id="Hero"
        className="min_vh_100 d-flex flex-column bg_img pb-5 bg_gray_hero position-relative"
      >
        <img
          className="position-absolute C_position d-none d-sm-flex"
          src={cIcon}
          alt="img"
        />
        <Header />

        <div className="container flex-grow-1 d-flex align-items-center justify-content-center mb-xl-5 mt-4 mt-md-0">
          <div className="row align-items-center w-100 pt-md-4 pt-xl-5">
            <div className="col-lg-6 pe-lg-0">
              <div className="mt-lg-5 mt-xl-4 mt-lg-0 mb-xl-4">
                <h1
                  className="ff_Nunito fw_bolder fs_5xl clr_light_black mb-0 mt-2 mt-xl-0 text_shadow"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  Get Bussiness{" "}
                  <span className="d-lg-block"> Solutions with TheFirm.</span>
                </h1>
                <p
                  className=" ff_Lora fw-normal fs_xl clr_light_black mt-xl-4 mt-2 pt-sm-1 mb-0 pb-sm-2"
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
                    class="get_touch_btn transition300 ff_Nunito d-inline-block fw-bold fs_xl text-white after_yellow_line position-relative mt-2 mt-md-4"
                    href="#about"
                  >
                    Get in Touch
                  </a>
                </span>
              </div>
            </div>
            <div className="col-lg-6 d-lg-none mt-4">
              <div>
                <img
                  className="w-100"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                  src={headerImg}
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

export default Hero;
