import React from "react";
import blog_1 from "../assets/img/png/blog1.png";
import alex_1 from "../assets/img/svg/alex1.svg";
import watch from "../assets/img/svg/watch.svg";
import Card from "../Card";

function Blog() {
  return (
    <>
      <section className=" py-5 bg_clr__dimWhite" id="blog">
        <div className="container">
          <h2
            className=" text-center ff_Nunito fw_bolder fs_4xxl clr_light_black mt-5 pt-5 mb-sm-5 pb-md-3"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Our{" "}
            <span className=" position-relative after_yellow_line z_index2">
              Blogs
            </span>
          </h2>
          <div className="row justify-content-center">
            {Card.map((data) => {
              return (
                <div
                  className="col-xl-4 col-md-6 mt-4"
                  data-aos="zoom-in"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className="pt-2 pb-4 bg-white blog_box transition250">
                    <img className=" w-100" src={data.img} alt="blog_1" />
                    <div className="px-4">
                      <h3 className=" mt-2 mb-0 ff_Nunito fw-bold fs_2xl clr_light_black">
                        {data.heading}
                      </h3>
                      <p className=" ff_Lora fw-normal fs_lg clr_light_black mb-0 mt-2 border-bottom border-2 pb-4">
                        {data.lorem}
                      </p>
                      <div className="d-flex justify-content-between align-items-center mt-4">
                        <div className="d-flex">
                          <img src={data.alex} alt="alex_1" />
                          <p className=" ff_Nunito fw-normal fs_md clr_light_black mb-0 pt-1 ms-2">
                            {data.name}
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <img src={data.watch} alt="watch" />
                          <p className=" mb-0 ff_Nunito fw-normal fs_sm clr_light_black ms-1">
                            {data.time}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4 pt-2 pb-4">
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
          <div
            className="d-flex justify-content-center mt-4 pt-4 mb-md-5"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <a
              className=" ff_Nunito fw-bold fs_xl text-white btn__Main transition250"
              href="#"
            >
              View More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
