import React from "react";
import question_mark from "../assets/img/svg/questionmark-img.svg";
import client_img from "../assets/img/png/client-img.png";

function Clients() {
  return (
    <>
      <section className="py-5" id="clients">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-6">
              <h2 className=" ff_nunito fw-bolder mb-0">
                Frustration of{" "}
                <span className=" position-relative after_yellow_line">
                  Clients
                </span>
              </h2>
              <p className=" mb-0 mt-3 pt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <div className="d-flex align-items-center mt-4">
                <img src={question_mark} alt="question_mark" />
                <p className=" mb-0 fw-normal ff_lora ms-2">
                  Loren rasion gravida auem is bibenua tase
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img className="w-100" src={client_img} alt="client_img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Clients;
