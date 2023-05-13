import React, { useRef } from "react";
import Slider from "react-slick";
import studies from "../assets/img/webp/studies-img.webp";
import ovel from "../assets/img/svg/ovel.svg";
import right from "../assets/img/svg/right.svg";

function Research() {
  const MyBtn = useRef();
  const settings = {
    dots: false,
    autpPlay: false,
    infinite: true,
    arrows: false,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section id="Research" className="py-5">
        <div className="container pt-lg-5 ">
          <h2
            className="ff_Nunito fw_bolder fs_4xxl clr_light_black text-center mb-0"
            data-aos="fade-down-right"
            data-aos-easing="linear"
            data-aos-duration="1500">
            Our Research & Case Studies
          </h2>
          <p
            className="ff_Lora fw-normal fs_xl clr_light_black text-center mb-0 mt-4 pt-1"
            data-aos="fade-up-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been{" "}
            <span className="d-lg-block">
              the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of
            </span>{" "}
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries,
          </p>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <Slider ref={MyBtn} {...settings}>
              <div className="pb-lg-5">
                <div className="row mt-md-3 py-lg-5 pt-2 flex-column-reverse flex-md-row">
                  <div className="col-md-6 mt-4 mt-md-0">
                    <div className="d-flex justify-content-center flex-column h-100">
                      <h3 className="ff_Nunito fw-bold fs_3xl clr_light_black mb-0">
                        Lorem Ipsum is simply
                      </h3>
                      <p
                        style={{ maxWidth: "547px" }}
                        className="ff_Lora fw-normal fs_xl clr_light_black mb-0 mt-2 pt-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took.
                      </p>
                      <span className=" pt-3">
                        {" "}
                        <a
                          class="get_touch_btn ff_Nunito d-inline-block fw-bold fs_xl text-white mt-4 mt-md-4 transition300"
                          href="#about">
                          Read More
                        </a>
                      </span>
                    </div>
                  </div>
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
                        <div
                          style={{ zIndex: "2" }}
                          className="position-absolute icon_over_img p-1 d-flex bg-white rounded-5">
                          <span
                            onClick={() => MyBtn.current.slickPrev()}
                            style={{ rotate: "180deg" }}
                            className="slider_btn cursor_pointer ">
                            <img className="right_img" src={right} alt="img" />
                          </span>
                          <span
                            onClick={() => MyBtn.current.slickNext()}
                            className="slider_btn cursor_pointer ">
                            <img className="right_img" src={right} alt="img" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row mt-md-5  pt-2 flex-column-reverse flex-md-row">
                  <div className="col-md-6 mt-4 mt-md-0">
                    <div className="d-flex justify-content-center flex-column h-100">
                      <h3 className="ff_Nunito fw-bold fs_3xl clr_light_black mb-0">
                        Lorem Ipsum is simply
                      </h3>
                      <p className="ff_Lora fw-normal fs_xl clr_light_black mb-0 mt-2 pt-1">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type Lorem Ipsum is
                        simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard
                        dummy text ever since the 1500s, when an unknown printer
                        took.
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
                  <div className="col-md-6 mt-4">
                    <div className="d-flex justify-content-center position-relative">
                      <img
                        className="position-absolute ovel_around_img"
                        src={ovel}
                        alt="img"
                      />
                      <div
                        style={{ zIndex: "1", position: "relative" }}
                        className="w-75 p-2 shadow bg-white rounded-4 position-relative">
                        <img className="w-100" src={studies} alt="img" />
                        <div className="position-absolute icon_over_img p-1 d-flex bg-white rounded-5">
                          <span
                            onClick={() => MyBtn.current.slickPrev}
                            style={{ rotate: "180deg" }}
                            className="slider_btn cursor_pointer ">
                            <img className="right_img" src={right} alt="img" />
                          </span>
                          <span
                            onClick={() => MyBtn.current.slickNext}
                            className="slider_btn cursor_pointer ">
                            <img className="right_img" src={right} alt="img" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Research;
