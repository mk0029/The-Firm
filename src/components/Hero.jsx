import React from "react";

function Hero() {
  return (
    <>
      <section id="Hero" className="min-vh-100 d-flex flex-column bg_img">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div>
                <h1 className="ff_Nunito fw-bolder fs_5xl clr_light_black mb-0 ">
                  Get Bussiness{" "}
                  <span className="d-lg-block"> Solutions with TheFirm.</span>
                </h1>
                <p className="ff_lora fw-normal fs_xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                </p>
                <span>
                  <a
                    class="get_touch_btn ff_Nunito fw-bold fs_xl text-white after_yellow_line position-relative mt-4"
                    href="#about"
                  >
                    Get in Touch
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
