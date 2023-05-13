import React, { useState } from "react";
import Slider from "react-slick";
import Logo1 from "../assets/img/svg/Sliderimg1.svg";
import Logo2 from "../assets/img/svg/Sliderimg2.svg";
import Logo3 from "../assets/img/svg/Sliderimg3.svg";
import Logo4 from "../assets/img/svg/Sliderimg4.svg";
import Logo5 from "../assets/img/svg/Sliderimg5.svg";
import Outerring from "../assets/img/svg/OuterRIng.svg";

function TestiMonals(props) {
  var settings = {
    fade: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const Sliderdata = [
    {
      image1: Logo1,
      image2: Logo2,
      image3: Logo3,
      image4: Logo4,
      image5: Logo5,
      Pera: "  Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an  took type scrambled it to make a type specimen book.It has survived not only five centuries,",
      UserNAme: " Wilson Jenny  |",
      UserWork: "    Digital Agency",
    },
    {
      image1: Logo5,
      image2: Logo1,
      image3: Logo2,
      image4: Logo3,
      image5: Logo4,
      Pera: "  Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknownprinter took type scrambled it to make a type specimen book.It has survived not only five centuries,",
      UserNAme: "  Jenny Wilson |",
      UserWork: "    Digital Agency",
    },
    {
      image1: Logo4,
      image2: Logo5,
      image3: Logo1,
      image4: Logo2,
      image5: Logo3,
      Pera: "  Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknownprinter took type scrambled it to make a type specimen book.It has survived not only five centuries,",
      UserNAme: "  Jenny Wilson |",
      UserWork: "    Digital Agency",
    },
    {
      image1: Logo3,
      image2: Logo4,
      image3: Logo5,
      image4: Logo1,
      image5: Logo2,
      Pera: "  Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknownprinter took type scrambled it to make a type specimen book.It has survived not only five centuries,",
      UserNAme: "  Jenny Wilson |",
      UserWork: "    Digital Agency",
    },
    {
      image1: Logo2,
      image2: Logo3,
      image3: Logo4,
      image4: Logo5,
      image5: Logo1,
      Pera: "  Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s, when an unknownprinter took type scrambled it to make a type specimen book.It has survived not only five centuries,",
      UserNAme: "  Jenny Wilson |",
      UserWork: "    Digital Agency",
    },
  ];

  return (
    <>
      <section
        style={{ maxWidth: "1920px",margin:"0 auto" }}
        id="TestiMonials"
        className={props.bggray}
      >
        <div className="py-5">
          {" "}
          <div className=" container">
            <div className="py-lg-5 pb-4 mb-5">
              {" "}
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <h2 className=" text-center ff_Nunito fs_4xxl fw_bolder clr_light_black pb-lg-4 pb-3 mb-0 mb-lg-4 pb-md-5 pb-4">
                  Our{" "}
                  <span className=" after_yellow_line position-relative z_index2">
                    Testimonials
                  </span>
                </h2>
              </div>
              <Slider {...settings} className="">
                {Sliderdata.map((data) => {
                  return (
                    <div>
                      <div className="px-xl-5 mx-lg-5">
                        <div className="d-flex justify-content-center justify-content-sm-between px-sm-5 mx-lg-5 align-items-center">
                          <div
                            className="image_1"
                            data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                          >
                            <img className="w-100" src={data.image1} alt="" />
                          </div>
                          <div
                            className="image_2"
                            data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                          >
                            <img className="w-100" src={data.image2} alt="" />
                          </div>
                          <div
                            className="image_3 position-relative z_index1 "
                            data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                          >
                            <img
                              className=" position-absolute Outerring z_index2"
                              src={Outerring}
                              alt=""
                            />
                            <img
                              className="w-100 position-relative z_index1"
                              src={data.image3}
                              alt=""
                            />
                          </div>
                          <div
                            className="image_2"
                            data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                          >
                            <img className="w-100" src={data.image4} alt="" />
                          </div>
                          <div
                            className="image_1"
                            data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                          >
                            <img className="w-100" src={data.image5} alt="" />
                          </div>
                        </div>
                      </div>
                      <p
                        className="py-sm-4 py-3 mt-2 text-center ff_Lora fs_xl fw-normal mx-auto mb-0 "
                        data-aos="fade-right"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        style={{ maxWidth: "850px" }}
                      >
                        {data.Pera}
                      </p>
                      <h4
                        className=" ff_Nunito fw-bold fs_2xl clr_light_black text-center pt-2 mb-0"
                        data-aos="fade-left"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                      >
                        {data.UserNAme}
                        <span className=" ff_Lora fw-normal fs_lg clr_light_black">
                          {data.UserWork}
                        </span>
                      </h4>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestiMonals;
