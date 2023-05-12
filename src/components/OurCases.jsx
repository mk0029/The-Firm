import React, { useState } from "react";
import search_img from "../assets/img/svg/search.svg";
import { OurCAses } from "../Card";
import { OurCAsesAll } from "../Card";
import { OurCAsesDigital } from "../Card";
import { OurCAsesSeo } from "../Card";
function OurCases() {
  const [dataCard, setDataCard] = useState(1);
  const GetDAta = [OurCAsesAll, OurCAses, OurCAsesDigital, OurCAsesSeo];
  const Setvalue = (value) => {
    setDataCard(value);
  };
  return (
    <>
      <section id="OurCases" className=" py-5 ">
        <div className=" container">
          <div className=" py-lg-5 mb-lg-3">
            <h2 className=" fs_4xxl fw-bold ff_Nunito text-center">
              Our
              <span className="after_yellow_line position-relative ">
                Cases
              </span>
            </h2>
            <div className=" d-flex flex-column-reverse flex-xl-row align-items-center justify-content-between pt-lg-5 pt-4">
              <div className="px-4 px-sm-0 d-flex gap-3 gap-sm-4 gap-xl-0 flex-wrap w-100 pe-xxl-5 pe-xl-4 me-xl-5 justify-content-center  justify-content-xl-between mt-3 mt-xl-0">
                <span className="   pe-3 text-center me-md-4 me-xl-3 d-block d-sm-inline-block">
                  <span
                    onClick={() => Setvalue(0)}
                    className={
                      dataCard === 0
                        ? " btn_OurCases btn_OurCases_hover d-inline-block clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl"
                        : "btn_OurCases d-inline-block bg_clr__lightWhite clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl rounded-3"
                    }
                  >
                    Show All
                  </span>
                </span>
                <span className="   pe-3 text-center me-md-4 me-xl-3 d-block d-sm-inline-block">
                  <span
                    onClick={() => Setvalue(1)}
                    className={
                      dataCard === 1
                        ? " btn_OurCases btn_OurCases_hover d-inline-block clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl"
                        : "btn_OurCases d-inline-block bg_clr__lightWhite clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl rounded-3"
                    }
                  >
                    OurCases
                  </span>
                </span>
                <span className="   pe-3 text-center me-md-4 me-xl-3 d-block d-sm-inline-block">
                  <span
                    onClick={() => Setvalue(2)}
                    style={{ whiteSpace: "nowrap" }}
                    className={
                      dataCard === 2
                        ? " btn_OurCases btn_OurCases_hover d-inline-block clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl"
                        : "btn_OurCases d-inline-block bg_clr__lightWhite clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl rounded-3"
                    }
                  >
                    Digital Partners
                  </span>
                </span>
                <span className="   pe-3 text-center me-md-4 me-xl-3 d-block d-sm-inline-block ">
                  <span
                    onClick={() => Setvalue(3)}
                    className={
                      dataCard === 3
                        ? " btn_OurCases btn_OurCases_hover d-inline-block clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl"
                        : "btn_OurCases d-inline-block bg_clr__lightWhite clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl rounded-3"
                    }
                  >
                    SEO
                  </span>
                </span>
              </div>
              <span className=" width_custom__Input_OurCases d-flex justify-content-between align-items-center  border-bottom border-2 px-3">
                <input
                  className=" w-100 outline_none border_none pb-2 pe-3 ff_Nunito fw-bold fs_xl clr_grey"
                  type="text"
                  placeholder="Search"
                />
                <a className=" mb-2" href="#">
                  <img src={search_img} alt="search_img" />
                </a>
              </span>
            </div>
          </div>
          <div className="row">
            {GetDAta[dataCard].map((data) => {
              return (
                <div className="col-xl-4 col-md-6 mt-4">
                  <div className="pt-2 pb-4 bg-white OurCases_box transition250">
                    <img className=" w-100" src={data.img} alt="blog_1" />
                    <div className="px-4">
                      <h3 className=" mt-2 mb-0 ff_Nunito fw-bold fs_2xl clr_light_black">
                        {data.heading}
                      </h3>
                      <p className=" ff_Lora fw-normal fs_lg clr_light_black mb-0 mt-2 border-bottom border-2 pb-4">
                        {data.lorem}
                      </p>
                    </div>
                    <div className="d-flex justify-content-center mt-4 pt-2 pb-2">
                      <a
                        className=" ff_Nunito fw-bold fs_xl text-white btn__Main_black transition250"
                        href="#"
                      >
                        {data.btn}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default OurCases;
