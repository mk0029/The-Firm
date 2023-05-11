import React from "react";
import Header from "./Header";
import headerImg from "../assets/img/webp/header-img.webp";

function Hero() {
  return (
    <>
      <section id="Hero" className="min-vh-100 d-flex flex-column bg_img">
        <div>
          <Header />
        </div>
        <div className="container flex-grow-1 d-flex align-items-center justify-content-center">
          <div className="row align-i tems-center w-100">
            <div className="col-lg-6">
              <div>
                <h1 className="ff_Nunito fw-bolder fs_5xl clr_light_black mb-0 ">
                  Get Bussiness{" "}
                  <span className="d-lg-block"> Solutions with TheFirm.</span>
                </h1>
                <p className="ff_lora fw-normal fs_xl clr_light_black mt-4 pt-1 mb-0 pb-2">
                  Lorem Ipsum is simply dummy text of the printing{" "}
                  <span className="d-lg-block">
                    and typesetting industry. Lorem Ipsum has been
                  </span>{" "}
                  the industry's standard dummy.
                </p>
                <a
                  class="get_touch_btn ff_Nunito d-inline-block fw-bold fs_xl text-white after_yellow_line position-relative mt-4"
                  href="#about"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-lg-none">
              <div>
                <img className="w-100" src={headerImg} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
