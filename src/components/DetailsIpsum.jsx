import React from "react";
import questionmark_img from "../assets/img/svg/questionmark-img.svg";

function DetailsIpsum() {
  return (
    <>
      <section className=" py-5 lorem_ipsum_bg mb-sm-5" id="DetailIpsum">
        <div className="container py-lg-4">
          <h2 className=" ff_Nunito fw-bold fs_4xl clr_light_black mb-0">
            Lorem
            <span className=" position-relative after_yellow_line z_index3">
              Ipsum
            </span>
          </h2>
          <p className=" mt-3 ff_Lora fw-normal fs_xl clr_light_black mb-0 pe-lg-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry.
          </p>
          <div className="d-flex align-items-start mt-sm-4 mt-3 pt-sm-2">
            <img
              className=" mt-1"
              src={questionmark_img}
              alt="questionmark_img"
            />
            <p className=" mb-0 ff_Lora fw-normal fs_xl clr_light_black ms-2 pe-lg-5">
              Loren rasion gravida auem is bibenua tase. Lorem ipsum is a
              placeholder text commonly used to demonstrate the visual form of a
              document or a typeface without relying on meaningful content
            </p>
          </div>
          <div className="d-flex align-items-start mt-2">
            <img
              className=" mt-1"
              src={questionmark_img}
              alt="questionmark_img"
            />
            <p className=" mb-0 ff_Lora fw-normal fs_xl clr_light_black ms-2 pe-lg-5">
              Lorem Ipsum is simply dummy text of the. Lorem ipsum, or lipsum as
              it is sometimes known, is dummy text used in laying out print,
              graphic or web designs.Lorem ipsum, or lipsum as it is sometimes
              known, is dummy text used in laying out print, graphic or web
              designs.
            </p>
          </div>
          <div className="d-flex align-items-start mt-2">
            <img
              className=" mt-1"
              src={questionmark_img}
              alt="questionmark_img"
            />
            <p className=" mb-0 ff_Lora fw-normal fs_xl clr_light_black ms-2">
              Printing and typesetting industry. Lorem Ipsum placeholder text in
              any number of characters, words sentences or paragraphs.
            </p>
          </div>
          <div className="d-flex align-items-start mt-2">
            <img
              className=" mt-1"
              src={questionmark_img}
              alt="questionmark_img"
            />
            <p className=" mb-0 ff_Lora fw-normal fs_xl clr_light_black ms-2">
              When an unknown printer took a galley of type and scrambled it
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailsIpsum;
