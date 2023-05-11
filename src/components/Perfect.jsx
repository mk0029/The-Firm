import React from "react";
import coaching_img from "../assets/img/svg/coaching.svg";
import partner_img from "../assets/img/svg/partner.svg";
import seo_img from "../assets/img/svg/seo.svg";
import ff_img from "../assets/img/png/ff-img.png";
import lightYellow_img from "../assets/img/png/lightyellow-circle.png";
import gray_img_circle from "../assets/img/png/gray-circle.png";

function Perfect() {
  return (
    <>
      <section className="py-5" id="perfect">
        <div className="container py-lg-5">
          <div className="row justify-content-between align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 position-relative">
              <img
                className=" position-absolute ff_img_position z_index1 d-none d-sm-block"
                src={ff_img}
                alt="ff_img"
              />
              <div className="row align-items-center justify-content-between mt-4 z_index2 ">
                <div className="col-sm-6">
                  <div className="text-center px-4 py-5 box_border position-relative">
                    <img
                      className=" position-absolute lightYellow_img_position z_index-1"
                      src={lightYellow_img}
                      alt="lightYellow_img"
                    />
                    <img
                      className=" mb-2"
                      src={coaching_img}
                      alt="coaching_img"
                    />
                    <h3 className=" ff_Nunito fw-bold fs_3xl mb-0 mt-4 clr_light_black">
                      Coaching
                    </h3>
                    <p className=" ff_Lora fw-normal fs_xl clr_light_black mb-0 mt-2 pt-1">
                      Loren rasion gravida auem is bibenua tase
                    </p>
                  </div>
                  <div className=" position-relative">
                    <img
                      className=" position-absolute gray_img_position z_index-1"
                      src={gray_img_circle}
                      alt="gray_img_circle"
                    />
                    <div className="text-center px-4 py-5 box_border mt-lg-5 mt-4 position-relative transform_translet_x">
                      <img className=" mb-2" src={seo_img} alt="seo_img" />
                      <h3 className=" ff_Nunito fw-bold fs_3xl mb-0 mt-4 clr_light_black">
                        SEO
                      </h3>
                      <p className=" ff_Lora fw-normal fs_xl clr_light_black mb-0 mt-2 pt-1">
                        Loren rasion gravida auem is bibenua tase
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className=" position-relative">
                    <img
                      className=" position-absolute z_index-1 digita_lightyellow_position"
                      src={lightYellow_img}
                      alt="lightYellow_img"
                    />
                    <img
                      className="gray_digital_position z_index-1 position-absolute"
                      src={gray_img_circle}
                      alt="gray_img_circle"
                    />
                    <img
                      className="gray_digital_position_top z_index-1 position-absolute opacity-25"
                      src={gray_img_circle}
                      alt="gray_img_circle"
                    />
                    <div className="text-center px-4 py-5 box_border mt-4 mt-sm-0 position-relative transform_translet_x">
                      <img
                        className=" mb-2"
                        src={partner_img}
                        alt="partner_img"
                      />
                      <h3 className=" ff_Nunito fw-bold fs_3xl mb-0 mt-4 clr_light_black z_index5 position-relative">
                        Digital Partner
                      </h3>
                      <p className=" ff_Lora fw-normal fs_xl clr_light_black mb-0 mt-2 pt-1">
                        Loren rasion gravida auem is bibenua tase
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <h2 className=" ff_Nunito fw_bolder fs_4xxl clr_light_black mb-0">
                Perfect Solution for Your{" "}
                <span className=" position-relative after_yellow_line">
                  Bussiness
                </span>{" "}
              </h2>
              <p
                className=" ff_Lora fw-normal fs_xl clr_light_black mb-4
               mt-sm-3  mt-2 pe-xl-4 me-xl-5"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </p>
              <a
                className=" btn_ReadMore text-white ff_Nunito fw-bold fs_xl d-inline-block mt-sm-3 mb-3 mb-sm-0"
                href="#"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Perfect;
