import React from "react";
import Header from "./Header";
import headerImg from "../assets/img/webp/jeurney-hero-img.webp";

function JourneyHero() {
  return (
    <>
      <section
        style={{ maxWidth: "1920px" }}
        id="JourneyHero"
        className=" mx-auto min_vh_100 d-flex flex-column bg_gray_hero position-relative"
      >
        <Header />

        <div className=" d-flex flex-grow-1 justify-content-center align-items-center flex-column position-relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6  py-xl-0 py-5">
                <h1
                  style={{ fontWeight: "900" }}
                  className=" ff_Nunito fw_bolder fs_4xxl text-black mb-0 mt-2 mt-xl-0 text_shadow z_index5 position-relative"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="3000"
                >
                  Our Digital Journey
                </h1>
                <p
                  className=" ff_Lora fw-normal fs_xl clr_light_black mt-xl-3 mt-2 pt-sm-1 mb-0 pb-sm-4 pe-5 position-relative z_index5"
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
              </div>
              <div className="col-lg-6 d-xl-none h-100 pb-5 pb-lg-0">
                <img className=" w-100" src={headerImg} alt="headerImg" />
              </div>
              <div className="col-xl-7 col-6 position-absolute h-100 end-0 d-none d-xl-block">
                <div className=" d-flex justify-content-end h-100 position-relative ">
                  <img
                    style={{ maxWidth: "100%" }}
                    className="journey_hero_img_custom z_index1 position-relative shadow rounded-5 "
                    src={headerImg}
                    alt="headerImg"
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

export default JourneyHero;
