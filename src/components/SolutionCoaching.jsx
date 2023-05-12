import React from "react";
import { Coaching } from "../Card";

function SolutionCoaching() {
  return (
    <>
      <section className=" py-5 bg_gray" id="Coaching">
        <div className="container py-lg-4">
          <div className="row justify-content-center">
            {Coaching.map((data) => {
              return (
                <div className="col-xl-4 col-md-6 mt-4">
                  <div className="pt-2 pb-4 bg-white coaching_box transition250">
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
                        href="#">
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

export default SolutionCoaching;
