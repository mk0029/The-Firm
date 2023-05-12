import React from "react";
import Select from "react-select";

function Get(props) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <section className=" get_bg_img py-5" id="get">
        <div className="container px-lg-5">
          <div className="pt-md-5 mt-lg-4">
            {" "}
            <div className="get_box py-5 px-lg-5 mx-xl-5 position-relative">
              <h2
                className=" ff_Nunito fw_bolder fs_4xxl clr_light_black text-center pt-sm-3"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                Get in{" "}
                <span className=" position-relative after_yellow_line z_index3">
                  Touch
                </span>
              </h2>
              <div className="row px-md-5 px-2 pt-5 justify-content-between">
                <div
                  className="col-xl-5 col-lg-6"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <p className=" ff_Nunito fw-normal fs_md clr_grey mb-0 ps-3 mb-1">
                    Name
                  </p>
                  <input
                    className=" ff_Nunito fw-bold fs_xl clr_light_black w-100 outline_none border_none border_bottom px-3 pb-2"
                    type="text"
                    placeholder="Lorem Ipusum"
                  />
                </div>
                <div
                  className="col-xl-5 col-lg-6 mt-4 mt-lg-0"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <p className=" ff_Nunito fw-normal fs_md clr_grey mb-0 ps-3 mb-1">
                    Email
                  </p>
                  <input
                    className=" ff_Nunito fw-bold fs_xl clr_light_black w-100 outline_none border_none border_bottom px-3 pb-2"
                    type="text"
                    placeholder="LoremIpusum@mail.com"
                  />
                </div>
                <div
                  className="col-xl-5 col-lg-6 mt-xl-5 pt-4"
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className={props.classnone}>
                    <p className=" ff_Nunito fw-normal fs_md clr_grey mb-0 ps-3 mb-1">
                      Phone
                    </p>
                    <input
                      className=" ff_Nunito fw-bold fs_xl clr_light_black w-100 outline_none border_none border_bottom px-3 pb-2"
                      type="text"
                      placeholder="+0 968 856 1524"
                    />
                  </div>
                </div>
                <div
                  className="col-xl-5 col-lg-6 mt-xl-5 pt-4"
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className={props.classnone}>
                    {" "}
                    <p className=" ff_Nunito fw-normal fs_md clr_grey mb-0 ps-3">
                      Subject
                    </p>
                    <Select
                      className="outline_none border_bottom clr_light_black ff_Nunito fw-bold fs_xl cursor_pointer pe-xl-5"
                      placeholder="Choose your subject"
                      options={options}
                    />
                  </div>
                </div>
                <div
                  className="col-12"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className={props.FirstNone}>
                    <p className=" ff_Nunito fw-normal fs_md clr_grey mb-0 ps-3 mb-1">
                      Message
                    </p>
                    <textarea
                      style={{ resize: "none" }}
                      className="w-100 outline_none border_none border_bottom px-3 ff_Lora fw-bold fs_xl pb-3"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard dummy text ever since the 1500s.
                    </textarea>
                  </div>
                </div>
                <div
                  className="d-flex justify-content-center pt-sm-5 pt-3"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <a
                    className=" ff_Nunito fw-bold fs_xl submit_btn text-white mt-4"
                    href="#"
                  >
                    Submit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Get;
