import React from "react";

function Research() {
  return (
    <>
      <section>
        <div className="container">
          <h2 className="ff_Nunito fw_bolder fs_4xxl text-black text-center mb-0">
            Our Research & Case Studies
          </h2>
          <p className="ff_Lora fw-normal fs_xl text-black text-center mb-0 mt-4 pt-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <div className="row">
            <div className="col-6">
              <div>
                <h3>Lorem Ipsum is simply</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type Lorem Ipsum is simply dummy text
                  of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when
                  an unknown printer took.
                </p>
                <a
                  class="get_touch_btn ff_Nunito d-inline-block fw-bold fs_xl text-white after_yellow_line position-relative mt-2 mt-md-4"
                  href="#about"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Research;
