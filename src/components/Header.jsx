import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/svg/logo.svg";

function Header() {
  const [navShow, setNavShow] = useState(0);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <section className="">
      <div
        data-aos="fade-down"
        data-aos-easing="ease-in"
        data-aos-delay="300"
        data-aos-duration="2000"
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100 py-2">
            <a className="ff_inter fw-bold fs_2xl text-white z_index1" href="#">
              <img
                className="moving_animation"
                style={{ width: "80px" }}
                src={logo}
                alt="logo-img"
              />
            </a>{" "}
            <ul className="d-flex gap-3 gap-xl-3 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
              <li className=" position-relative afterline z_index129">
                <a class="ff_nunito fw-bold fs_18 underline" href="#home">
                  Home
                </a>
              </li>

              <li>
                <a class="ff_nunito fw-bold fs_18 underline" href="#service">
                  Solutions
                </a>
              </li>

              <li>
                <a class="ff_nunito fw-bold fs_18 underline" href="#project">
                  Solutions
                </a>
              </li>
              <li>
                <a class="ff_nunito fw-bold fs_18 underline" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a class="ff_nunito fw-bold fs_18 underline" href="#about">
                  Blog
                </a>
              </li>
              <li>
                <a class="ff_nunito fw-bold fs_18 underline" href="#about">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  class="get_touch_btn ff_nunito fw-bold fs_18 underline"
                  href="#about"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
            <div
              style={{ zIndex: "1000" }}
              className={
                navShow
                  ? "threeline d-lg-none cursor_pointer my-2"
                  : "threeline d-lg-none cursor_pointer my-2"
              }
              onClick={() => setNavShow(!navShow)}
            >
              <a href="#">
                <div
                  className={navShow ? " falseline1" : "  threelinechild"}
                ></div>
                <div
                  className={navShow ? "falseline" : " threelinechild"}
                ></div>
                <div
                  className={navShow ? "falseline3 " : "threelinechild"}
                ></div>
              </a>
            </div>
          </div>
        </div>
        <div className="d-lg-none d-flex ">
          <div className={` ${navShow ? "shownav" : " hidenav"}`}>
            <div className="container">
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center justify-content-center list-unstyled gap-3  pt-3 transition"></ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
