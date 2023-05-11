import React from "react";
import blog_1 from "../assets/img/png/blog1.png";
import alex_1 from "../assets/img/svg/alex1.svg";
import watch from "../assets/img/svg/watch.svg";

function Blog() {
  return (
    <>
      <section className=" py-5 bg_clr__dimWhite" id="blog">
        <div className="container">
          <h2 className=" text-center ff_Nunito fw_bolder fs_4xxl clr_light_black mt-5 pt-5">
            Our{" "}
            <span className=" position-relative after_yellow_line z_index2">
              Blogs
            </span>
          </h2>
          <div className="row">
            <div className="col-4">
              <div className="pt-2 pb-4 bg-white rounded-4">
                <img className=" w-100" src={blog_1} alt="blog_1" />
                <div className="px-4">
                  <h3 className=" mt-2 mb-0 ff_Nunito fw-bold fs_2xl clr_light_black">
                    Lorem Ipsum is{" "}
                  </h3>
                  <p className=" ff_Lora fw-normal fs_lg clr_light_black mb-0 mt-2 border-bottom border-2 pb-4">
                    Lorem Ipsum is simply text of the printing and type setting
                    industry. make a type specimen.{" "}
                  </p>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex">
                      <img src={alex_1} alt="alex_1" />
                      <p className=" ff_Nunito fw-normal fs_md clr_light_black mb-0 pt-1 ms-2">
                        Alex Liones
                      </p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={watch} alt="watch" />
                      <p className=" mb-0 ff_Nunito fw-normal fs_sm clr_light_black ms-1">
                        28,Aug 2020, 09:48:00
                      </p>
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

export default Blog;
