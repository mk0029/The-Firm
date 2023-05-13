import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/png/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [navShow, setNavShow] = useState(0);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <section className="bg-white p">
      <div
        data-aos="fade-down"
        data-aos-easing="ease-in"
        data-aos-delay="300"
        data-aos-duration="2000">
        <div id="Header" className="container">
          <div className="d-flex justify-content-between align-items-center w-100 pt-3 pb-2 mt-1">
            <Link to="/">
              <a href="#">
                <img className="logo" src={logo} alt="logo-img" />
              </a>{" "}
            </Link>
            <ul className="d-flex gap-3 gap-xl-5 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
              <li className="">
                <Link to="/">
                  <a
                    style={{ zIndex: "2" }}
                    class="ff_Nunito fw-bold fs_xl clr_light_black after_yellow_line1 position-relative"
                    href="#home">
                    Home
                  </a>
                </Link>
              </li>

              <li>
                <Link to="/Solution">
                  {" "}
                  <a
                    style={{ zIndex: "2" }}
                    class="ff_Nunito fw-bold fs_xl clr_light_black after_yellow_line1 position-relative"
                    href="#service">
                    Solutions
                  </a>
                </Link>
              </li>

              <li>
                <Link to="/cases">
                  {" "}
                  <a
                    style={{ zIndex: "2" }}
                    class="ff_Nunito fw-bold fs_xl clr_light_black after_yellow_line1 position-relative"
                    href="#project">
                    Cases
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Details">
                  {" "}
                  <a
                    style={{ zIndex: "2" }}
                    class="ff_Nunito fw-bold fs_xl clr_light_black after_yellow_line1 position-relative"
                    href="#about">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <a
                  style={{ zIndex: "2" }}
                  class="ff_Nunito fw-bold fs_xl clr_light_black after_yellow_line1 position-relative"
                  href="#about">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/Digital">
                  {" "}
                  <a
                    style={{ zIndex: "2" }}
                    class="ff_Nunito fw-bold fs_xl clr_light_black after_yellow_line1 position-relative"
                    href="#about">
                    Contact Us
                  </a>
                </Link>
              </li>
              <li>
                <a
                  class="get_touch_btn ff_Nunito fw-bold fs_xl text-white transition300 after_yellow_line1 position-relative"
                  href="#about">
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
              onClick={() => setNavShow(!navShow)}>
              <a href="#">
                <div
                  className={
                    navShow ? " falseline1" : "  threelinechild"
                  }></div>
                <div
                  className={navShow ? "falseline" : " threelinechild"}></div>
                <div
                  className={navShow ? "falseline3 " : "threelinechild"}></div>
              </a>
            </div>
          </div>
        </div>
        <div className="d-lg-none d-flex pb-3">
          <div className={` ${navShow ? "shownav" : " hidenav"}`}>
            <div className="container">
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center justify-content-center list-unstyled gap-3  pt-3 transition">
                {" "}
                <li className=" position-relative afterline z_index129">
                  <Link to="/">
                    <a
                      onClick={() => setNavShow(!navShow)}
                      style={{ zIndex: "2" }}
                      class="ff_Nunito fw-bold fs_ResponciveNav clr_light_black after_yellow_line1 position-relative"
                      href="#home">
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/Solution">
                    {" "}
                    <a
                      onClick={() => setNavShow(!navShow)}
                      style={{ zIndex: "2" }}
                      class="ff_Nunito fw-bold fs_ResponciveNav clr_light_black after_yellow_line1 position-relative"
                      href="#service">
                      Solutions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/cases">
                    {" "}
                    <a
                      onClick={() => setNavShow(!navShow)}
                      style={{ zIndex: "2" }}
                      class="ff_Nunito fw-bold fs_ResponciveNav clr_light_black after_yellow_line1 position-relative"
                      href="#project">
                      Cases
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/Details">
                    {" "}
                    <a
                      onClick={() => setNavShow(!navShow)}
                      style={{ zIndex: "2" }}
                      class="ff_Nunito fw-bold fs_ResponciveNav clr_light_black after_yellow_line1 position-relative"
                      href="#about">
                      About Us
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    onClick={() => setNavShow(!navShow)}
                    class="ff_Nunito fw-bold fs_ResponciveNav clr_light_black after_yellow_line1 position-relative"
                    href="#about">
                    Blog
                  </a>
                </li>
                <li>
                  <Link to="/Digital">
                    {" "}
                    <a
                      onClick={() => setNavShow(!navShow)}
                      style={{ zIndex: "2" }}
                      class="ff_Nunito fw-bold fs_ResponciveNav clr_light_black after_yellow_line1 position-relative"
                      href="#about">
                      Contact Us
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    onClick={() => setNavShow(!navShow)}
                    class=" btn__Main_black transition300 ff_Nunito fw-bold fs_ResponciveNav clr_light_black after_yellow_line1 position-relative"
                    href="#about">
                    Get in Touch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
