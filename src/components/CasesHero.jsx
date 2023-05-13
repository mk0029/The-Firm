import React from "react";
import Header from "./Header";
import cases_hero_img from "../assets/img/webp/cases-hero-img.webp";

function CasesHero() {
  return (
    <>
      <section
        id="CasesHero"
        style={{ maxWidth: "1920px" }}
        className=" mx-auto min_vh_100 d-flex flex-column bg_gray_hero position-relative"
      >
        <Header />

        {/* <div className="container flex-grow-1 d-flex align-items-center justify-content-center mb-xl-5 mt-md-0">
          <div className="row align-items-center w-100 pt-md-4 pt-xl-5">
            <div className="col-lg-6">
              <div className="mt-lg-5 mt-xl-4 mt-lg-0 mb-xl-4">
                <h1
                  className="ff_Nunito fw_bolder fs_5xl clr_light_black mb-0 mt-2 mt-xl-0 text_shadow"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  Our Research &
                  <span className="d-lg-block"> Case Studies</span>
                </h1>
                <p
                  className=" ff_Lora fw-normal fs_xl clr_light_black mt-xl-4 mt-2 pt-sm-1 mb-0 pb-sm-4"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  Lorem Ipsum is simply dummy text of the printing{" "}
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
                    class="get_touch_btn ff_Nunito d-inline-block fw-bold fs_xl text-white after_yellow_line position-relative mt-2 mt-md-4 transition300"
                    href="#about"
                  >
                    Get in Touch
                  </a>
                </span>
              </div>
            </div>
            <div
              className="col-lg-6 d-lg-none mt-4"
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="3000"
            >
              <div>
                <img className="w-100" src={headerImg} alt="img" />
              </div>
            </div>
          </div>
        </div> */}
        <div className=" d-flex flex-grow-1 justify-content-center align-items-center flex-column position-relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6  py-xl-0 py-5">
                <h1
                  className=" ff_Nunito fw_bolder fs_4xxl clr_light_black mb-0 mt-2 mt-xl-0 text_shadow z_index5 position-relative"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  Our Research &
                  <span className="d-lg-block"> Case Studies</span>
                </h1>
                <p
                  className=" ff_Lora fw-normal fs_xl clr_light_black mt-xl-4 mt-2 pt-sm-1 mb-0 pb-sm-4 pe-5 position-relative z_index5"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  Lorem Ipsum is simply dummy text of the printing{" "}
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
                    class="get_touch_btn ff_Nunito d-inline-block fw-bold fs_xl text-white after_yellow_line position-relative mt-2 mt-md-4 transition300"
                    href="#about"
                  >
                    Get in Touch
                  </a>
                </span>
              </div>
              <div className="col-lg-6 d-xl-none h-100 pb-5 pb-lg-0">
                <img
                  className=" w-100"
                  src={cases_hero_img}
                  alt="cases_hero_img"
                />
              </div>
              <div className="col-xl-7 col-6 position-absolute h-100 end-0 d-none d-xl-block">
                <div className=" d-flex justify-content-end h-100 position-relative ">
                  <img
                    style={{ maxWidth: "100%" }}
                    className="cases_hero_img_custom z_index1 position-relative shadow rounded-5 "
                    src={cases_hero_img}
                    alt="cases_hero_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CasesHero;
