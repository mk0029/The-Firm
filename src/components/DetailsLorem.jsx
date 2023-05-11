import React from "react";
import lorem_img from "../assets/img/png/lorem-img.png";

function DetailsLorem() {
  return (
    <>
      <section className=" py-5 bg-white">
        <div className="container py-md-5">
          <div className="row justify-content-between align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6">
              <img
                className=" w-100 mt-4 mt-lg-0"
                src={lorem_img}
                alt="lorem_img"
              />
            </div>
            <div className="col-lg-6">
              <div className=" ps-lg-4">
                <h2 className=" ff_Nunito fw-bold fs_4xl clr_light_black mb-0">
                  Lorem{" "}
                  <span className=" position-relative after_yellow_line z_index3">
                    Ipsum
                  </span>
                </h2>
                <p className=" mt-xl-3 mt-1 ff_Lora fw-normal fs_xl clr_light_black mb-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry.{" "}
                  <span className=" fw-bold">
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,
                  </span>{" "}
                  when an unknown printer took. Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailsLorem;
