import React from "react";
import digital_lorem_img from "../assets/img/png/digital_lorem_img.png";

function DigitalLorem() {
  return (
    <>
      <section className=" py-5">
        <div className="container py-lg-4">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <img
                className=" w-100"
                src={digital_lorem_img}
                alt="digital_lorem_img"
              />
            </div>
            <div className="col-lg-6">
              <div className="ps-4">
                <h2 className=" ff_Nunito fw-bold fs_4xl clr_light_black mb-0">
                  Lorem{" "}
                  <span className=" position-relative after_yellow_line z_index3">
                    Ipsum
                  </span>
                </h2>
                <p className=" ff_Lora fw-normal fs_xl clr_light_black mb-0 mt-sm-3 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took.{" "}
                </p>
                <p className=" ff_Lora fw-normal fs_xl clr_light_black mb-0 mt-sm-3 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum is simply dummy text of the
                  printing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DigitalLorem;
