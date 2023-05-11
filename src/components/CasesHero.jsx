import React from "react";
import Header from "./Header";
import headerImg from "../assets/img/webp/cases-hero-img.webp";

function CasesHero() {
  return (
    <>
      <section
        id="CasesHero"
        className="min_vh_100 d-flex flex-column bg_img1 pb-5 bg_gray_hero position-relative"
      >
        <Header />

        <div className="container flex-grow-1 d-flex align-items-center justify-content-center mb-xl-5 mt-4 mt-md-0">
          <div className="row align-items-center w-100 pt-md-4 pt-xl-5">
            <div className="col-lg-6">
              <div className="mt-lg-5 mt-xl-4 mt-lg-0 mb-xl-4">
                <h1 className="ff_Nunito fw_bolder fs_5xl clr_light_black mb-0 mt-2 mt-xl-0 text_shadow">
                  Our Research &
                  <span className="d-lg-block"> Case Studies</span>
                </h1>
                <p className=" ff_Lora fw-normal fs_xl clr_light_black mt-xl-4 mt-2 pt-sm-1 mb-0 pb-sm-2">
                  Lorem Ipsum is simply dummy text of the printing{" "}
                  <span className="d-lg-block">
                    and typesetting industry. Lorem Ipsum has been
                  </span>{" "}
                  the industry's standard dummy.
                </p>
                <a
                  class="get_touch_btn ff_Nunito d-inline-block fw-bold fs_xl text-white after_yellow_line position-relative mt-2 mt-md-4"
                  href="#about"
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="col-lg-6 d-lg-none mt-4">
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

export default CasesHero;
