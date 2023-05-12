import React from "react";
import question_mark from "../assets/img/svg/questionmark-img.svg";
import client_img from "../assets/img/png/client-img.png";

function Clients() {
  return (
    <>
      <section className="py-5 bg_clr__lightWhite" id="clients">
        <div className="container py-lg-4">
          <div className="row align-items-center justify-content-between py-lg-3">
            <div className="col-lg-6">
              <h2
                className="ff_Nunito fs_4xxl fw_bolder mb-0 clr_light_black"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Frustration of{" "}
                <span className=" position-relative z_index2 after_yellow_line">
                  Clients
                </span>
              </h2>
              <p
                className=" ff_Lora fs_xl clr_light_black fw-normal mb-0 mt-sm-3 pt-1 pe-xl-5 me-lg-3"
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="ps-lg-4">
                <div className="d-flex align-items-center mt-sm-4 mt-3">
                  <img
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    src={question_mark}
                    alt="question_mark"
                  />
                  <p
                    className=" mb-0 fw-normal ff_Lora fs_xl clr_light_black ms-2"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    Loren rasion gravida auem is bibenua tase
                  </p>
                </div>
                <div className="d-flex align-items-center mt-2 pt-1">
                  <img
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    src={question_mark}
                    alt="question_mark"
                  />
                  <p
                    className=" mb-0 fw-normal ff_Lora fs_xl clr_light_black ms-2"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    Lorem Ipsum is simply dummy text of the.
                  </p>
                </div>
                <div className="d-flex align-items-center mt-2 pt-1">
                  <img
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    src={question_mark}
                    alt="question_mark"
                  />
                  <p
                    className=" mb-0 fw-normal ff_Lora fs_xl clr_light_black ms-2"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    Printing and typesetting industry. Lorem Ipsum
                  </p>
                </div>
                <div className="d-flex mt-2 pt-1">
                  <img
                    className=" mb-md-4"
                    data-aos="fade-right"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    src={question_mark}
                    alt="question_mark"
                  />
                  <p
                    className=" mb-0 fw-normal ff_Lora fs_xl clr_light_black ms-2 me-xl-5 pe-xl-5"
                    data-aos="fade-left"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                  >
                    When an unknown printer took a galley of type and scrambled
                    it
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pt-3 pt-lg-0 mt-4 mt-lg-0">
                <img
                  className="w-100  pe-md-5 px-lg-0"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  src={client_img}
                  alt="client_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clients;
