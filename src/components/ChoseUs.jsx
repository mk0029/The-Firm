import React, { useEffect, useState } from "react";
import img from "../assets/img/png/Brand_Choseus.png";
import img2 from "../assets/img/png/Brand_Choseus_2.png";
import img3 from "../assets/img/png/Brand_Choseus.png";
import img4 from "../assets/img/png/Brand_Choseus_2.png";
import Speacker from "../assets/img/png/Speacker.png";
function ChoseUs() {
  const [active, setActive] = useState(1);
  const imges = [
    {
      imge: img,
      text1: "Market Research",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the e",
    },
    {
      imge: img2,
      text1: "Branding",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
    {
      imge: img3,
      text1: "Reporting",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the a galley of type",
    },
    {
      imge: img4,
      text1: "Data Analysis",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the  of type",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevIndex) => (prevIndex + 1) % imges.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="Choseus" className=" bg_clr__dimWhite py-5">
        <div className=" container">
          <div className="py-5 ">
            <h2 className=" text-center ff_Nunito fs_4xxl fw_bolder clr_light_black pb-lg-4 pb-3 mb-0">
              Reason to Choose Us
            </h2>
            <p
              style={{ maxWidth: "864px" }}
              className=" text-center ff_Lora fs_xl fw-normal clr_light_black mx-auto mb-0 pt-1 pb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-lg-5 gsp-sm-4 gap-3 pb-lg-5 pb-4">
              <span className=" text-center d-inline-block  me-4 hover_btn_Choseus transition300">
                <span
                  className={
                    active === 0
                      ? " btn_Choseus btn_Choseus_hover d-inline-block clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl rounded-3"
                      : " btn_Choseus d-inline-block clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl rounded-3"
                  }
                  onClick={() => setActive(0)}>
                  Market Research
                </span>
              </span>
              <span className=" text-center d-inline-block  me-4 hover_btn_Choseus transition300">
                <span
                  className={
                    active === 1
                      ? " btn_Choseus btn_Choseus_hover d-inline-block clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl rounded-3"
                      : " btn_Choseus d-inline-block clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl rounded-3"
                  }
                  onClick={() => setActive(1)}>
                  Branding
                </span>
              </span>
              <span className=" text-center d-inline-block  me-4 hover_btn_Choseus transition300">
                <span
                  className={
                    active === 2
                      ? " btn_Choseus btn_Choseus_hover d-inline-block clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl rounded-3"
                      : " btn_Choseus d-inline-block clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl rounded-3"
                  }
                  onClick={() => setActive(2)}>
                  Reporting
                </span>
              </span>
              <span className=" text-center d-inline-block  me-4 hover_btn_Choseus transition300">
                <span
                  className={
                    active === 3
                      ? " btn_Choseus btn_Choseus_hover d-inline-block clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl rounded-3"
                      : " btn_Choseus d-inline-block clr_dim_grey ff_Nunito fw-semibold transition300 fs_xl rounded-3"
                  }
                  onClick={() => setActive(3)}>
                  Data Analysis
                </span>
              </span>
            </div>
            <div
              style={{ borderRadius: "30px" }}
              className=" bg-white py-5 px-3 mt-3  ">
              <div className="py-sm-3 px-sm-3 mx-sm-2">
                <div className="row flex-column-reverse flex-lg-row justify-content-between">
                  <div className="col-lg-5 mt-4 mt-md-5 mt-lg-0">
                    <img
                      className="w-100 h-100 Img_Shaddow transition300"
                      src={imges[active].imge}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-7">
                    <div className="d-md-flex ms-md-4">
                      <div className="">
                        <img
                          className=""
                          style={{ maxWidth: "58px" }}
                          src={Speacker}
                          alt=""
                        />
                      </div>
                      <div className=" ms-3 pt-2">
                        {" "}
                        <h2
                          style={{ letterSpacing: "0.02em" }}
                          className=" ff_Nunito fw-semibold fs_3xl clr_light_black mb-0 pb-3">
                          {imges[active].text1}
                        </h2>
                        <p
                          style={{ maxWidth: "505px", letterSpacing: "0.02em" }}
                          className="  ff_Lora fs_xl fw-normal clr_light_black mb-0 ">
                          {imges[active].text2}
                        </p>
                        <span className=" d-inline-block pt-2 pt-md-3 mt-2">
                          <a
                            className=" btn__Main_black transition300 d-inline-block bg_clr_Black"
                            href="">
                            Read More
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChoseUs;
