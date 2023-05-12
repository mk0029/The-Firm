import React from "react";
import logo from "../assets/img/png/logo.png";

function Footer() {
  return (
    <>
      <section id="Footer" className="py-4 py-md-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            <a href="#">
              <img className="logo" src={logo} alt="logo-img" />
            </a>
            <ul className="d-flex gap-2 gap-xl-5 list-unstyled align-items-center mb-0 justify-content-end mt-md-5 mt-4">
              <li className="">
                <a
                  style={{ zIndex: "2" }}
                  class="ff_Nunito fw-bold fs_xl clr_light_black after_yellow_line1 position-relative"
                  href="#home">
                  Home
                </a>
              </li>

              <li>
                <a
                  style={{ zIndex: "2" }}
                  class="ff_Nunito fw-bold fs_xl clr_light_black after_yellow_line1 position-relative"
                  href="#service">
                  Solutions
                </a>
              </li>

              <li>
                <a
                  style={{ zIndex: "2" }}
                  class="ff_Nunito fw-bold fs_xl clr_light_black after_yellow_line1 position-relative"
                  href="#project">
                  Cases
                </a>
              </li>
              <li>
                <a
                  style={{ zIndex: "2" }}
                  class="ff_Nunito fw-bold fs_xl clr_light_black after_yellow_line1 position-relative"
                  href="#about">
                  About Us
                </a>
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
                <a
                  style={{ zIndex: "2" }}
                  class="ff_Nunito fw-bold fs_xl clr_light_black after_yellow_line1 position-relative"
                  href="#about">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="mt-md-5 mt-4 pt-md-3 d-flex gap-5 pb-1">
              <a href="#">
                <svg
                  className="fill-change"
                  width="10"
                  height="20"
                  viewBox="0 0 10 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.25 6.875V4.375C6.25 3.685 6.81 3.125 7.5 3.125H8.75V0H6.25C4.17875 0 2.5 1.67875 2.5 3.75V6.875H0V10H2.5V20H6.25V10H8.75L10 6.875H6.25Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="fill-change"
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24.6154 2.36769C23.7 2.76923 22.7246 3.03538 21.7077 3.16462C22.7538 2.54 23.5523 1.55846 23.9277 0.375385C22.9523 0.956923 21.8754 1.36769 20.7277 1.59692C19.8015 0.610769 18.4815 0 17.0415 0C14.2477 0 11.9985 2.26769 11.9985 5.04769C11.9985 5.44769 12.0323 5.83231 12.1154 6.19846C7.92 5.99385 4.20769 3.98308 1.71385 0.92C1.27846 1.67538 1.02308 2.54 1.02308 3.47077C1.02308 5.21846 1.92308 6.76769 3.26462 7.66462C2.45385 7.64923 1.65846 7.41385 0.984615 7.04308C0.984615 7.05846 0.984615 7.07846 0.984615 7.09846C0.984615 9.55077 2.73385 11.5877 5.02769 12.0569C4.61692 12.1692 4.16923 12.2231 3.70462 12.2231C3.38154 12.2231 3.05538 12.2046 2.74923 12.1369C3.40308 14.1354 5.25846 15.6046 7.46462 15.6523C5.74769 16.9954 3.56769 17.8046 1.20769 17.8046C0.793846 17.8046 0.396923 17.7862 0 17.7354C2.23538 19.1769 4.88462 20 7.74154 20C17.0277 20 22.1046 12.3077 22.1046 5.64C22.1046 5.41692 22.0969 5.20154 22.0862 4.98769C23.0877 4.27692 23.9292 3.38923 24.6154 2.36769Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="fill-change"
                  width="30"
                  height="20"
                  viewBox="0 0 30 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M27.8545 1.92727C27.0655 0.523636 26.2091 0.265455 24.4655 0.167273C22.7236 0.0490909 18.3436 0 14.5491 0C10.7473 0 6.36545 0.0490911 4.62545 0.165455C2.88545 0.265455 2.02727 0.521818 1.23091 1.92727C0.418182 3.32909 0 5.74364 0 9.99455C0 9.99818 0 10 0 10C0 10.0036 0 10.0055 0 10.0055V10.0091C0 14.2418 0.418182 16.6745 1.23091 18.0618C2.02727 19.4655 2.88364 19.72 4.62364 19.8382C6.36545 19.94 10.7473 20 14.5491 20C18.3436 20 22.7236 19.94 24.4673 19.84C26.2109 19.7218 27.0673 19.4673 27.8564 18.0636C28.6764 16.6764 29.0909 14.2436 29.0909 10.0109C29.0909 10.0109 29.0909 10.0055 29.0909 10.0018C29.0909 10.0018 29.0909 9.99818 29.0909 9.99636C29.0909 5.74364 28.6764 3.32909 27.8545 1.92727ZM10.9091 15.4545V4.54545L20 10L10.9091 15.4545Z"
                    fill="#1e1e1e"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="fill-change"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.9951 20.0001V19.9993H20.0001V12.6643C20.0001 9.07593 19.2276 6.31177 15.0326 6.31177C13.0159 6.31177 11.6626 7.41843 11.1101 8.4676H11.0517V6.64677H7.07422V19.9993H11.2159V13.3876C11.2159 11.6468 11.5459 9.96343 13.7017 9.96343C15.8259 9.96343 15.8576 11.9501 15.8576 13.4993V20.0001H19.9951Z"
                    fill="#1E1E1E"
                  />
                  <path
                    d="M0.330078 6.64746H4.47675V20H0.330078V6.64746Z"
                    fill="#1E1E1E"
                  />
                  <path
                    d="M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="fill-change"
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.39663 0C2.91513 0 0 3.51266 0 7.34283C0 9.11916 0.992545 11.3343 2.58137 12.0368C2.82263 12.1455 2.95388 12.0993 3.00764 11.8755C3.05514 11.7055 3.2639 10.8867 3.36515 10.5005C3.3964 10.3767 3.38015 10.2692 3.28015 10.153C2.75262 9.54293 2.33386 8.43163 2.33386 7.38908C2.33386 4.71771 4.4577 2.12385 8.07162 2.12385C11.1968 2.12385 13.3831 4.15394 13.3831 7.05782C13.3831 10.3392 11.6468 12.6093 9.39043 12.6093C8.14162 12.6093 7.21158 11.6293 7.50659 10.4167C7.86286 8.97291 8.56164 7.42034 8.56164 6.37904C8.56164 5.44525 8.03411 4.67271 6.95657 4.67271C5.68526 4.67271 4.65396 5.93152 4.65396 7.6216C4.65396 8.69539 5.03398 9.42043 5.03398 9.42043C5.03398 9.42043 3.77642 14.5007 3.54266 15.4495C3.14764 17.0558 3.59641 19.6571 3.63516 19.8809C3.65892 20.0047 3.79767 20.0434 3.87518 19.9422C3.99893 19.7796 5.519 17.6108 5.94527 16.0432C6.10028 15.472 6.73656 13.1556 6.73656 13.1556C7.15532 13.9119 8.36413 14.5457 9.65169 14.5457C13.4819 14.5457 16.2495 11.1793 16.2495 7.00157C16.2357 2.99639 12.8081 0 8.39663 0Z"
                    fill="#1E1E1E"
                  />
                </svg>
              </a>
            </div>
            <p
              style={{ letterSpacing: "0.26em" }}
              className="ff_Nunito fw-normal fs_sm text-center clr_grey mt-4 pt-md-3">
              Copyrights ©2020 Thefirm. All Right Reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
