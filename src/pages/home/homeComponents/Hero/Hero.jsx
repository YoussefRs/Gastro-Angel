import React, { useEffect } from "react";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  return (
    <section className="hero">
      <div className="hero_section d-flex">
        <div className="container-md px-md-0 px-4 d-flex align-items-center justify-content-center flex-column">
          <div className="text-content">
            <h5 data-aos={"slide-right"}>Welcome to gastro Angel</h5>
            <h1 data-aos={"slide-right"} data-aos-delay="400" className="mt-2">
              try the <span>BEST</span> <br />
            </h1>

            <div
              className="dot-outer-container"
              data-aos={"zoom-out"}
              data-aos-delay="1200"
            >
              <div className="dot-container">
                <div className="dot"></div>
              </div>
            </div>
          </div>
          <div className="my-3 food_word">
            <span style={{ color: "#DAA05D" }}>food</span>
            <span>...</span>
          </div>
          <div className="container container-mobile d-sm-block d-none">
            <div className="el" data-aos={"slide-right"} data-aos-delay="800">
              <div className="el2">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nihil facere nostrum voluptate accusamus incidunt ea
                  distinctio! Pariatur assumenda modi nulla nesciunt fugit
                  laudantium at? Tempore ab temporibus architecto ad ducimus.
                </p>
              </div>
              <svg
                width="84"
                height="74"
                viewBox="0 0 84 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M51 40.6057C46.7548 37.6023 44.7443 31.0514 44.2512 27.7349C43.6429 23.6394 43.7697 19.7919 44.3217 15.7865C45.1707 9.61655 40.9242 7.54077 32.8577 13.7485C24.0292 20.546 11.1976 33.3973 0 26.8894C16.425 39.1679 29.2592 20.4116 35.7954 15.2855C35.8774 15.2202 35.9619 15.1576 36.0464 15.0976C38.0326 13.4745 41.909 11.6558 41.7822 14.8758C41.5786 13.545 40.3684 13.5137 39.1403 14.0055C40.2404 14.0982 41.1765 14.9006 41.1125 16.7285C40.9665 20.8826 41.1598 24.0256 41.8578 27.2534C43.2408 33.6491 46.4385 39.5894 51 41.2581"
                  fill="#DAA05D"
                  className="flying-wing"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.1278 28.894C39.153 21.9209 39.208 31.6413 37.1551 36.1279C35.9584 38.7428 34.9921 39.6302 32.9033 41.11C36.5907 41.7457 37.8859 40.3105 39.057 37.2643C40.5353 33.42 39.0762 26.4167 41.1291 28.894"
                  fill="#DAA05D"
                  className="flying-wing"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.1289 23.566C40.9603 20.4419 39.9042 19.2912 38.318 20.143C37.5269 20.5682 36.6903 21.4845 35.8002 22.6049C31.6414 27.8407 26.8052 38.4189 18.0967 40.7439C29.066 43.6797 33.2115 33.3964 36.7292 26.2872C38.2658 23.1815 39.1854 20.5748 41.1289 23.5646"
                  fill="#DAA05D"
                  className="flying-wing"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M41.1167 19.5358C41.341 12.9251 38.4961 14.406 34.5632 17.9558C28.2502 23.6513 19.6766 35.4479 8.22583 36.6394C21.4469 42.434 28.9984 27.7239 34.3349 22.2212C37.889 18.5567 39.2805 15.4371 41.1167 19.5358Z"
                  fill="#DAA05D"
                  className="flying-wing"
                />
                <g filter="url(#filter0_d_308_4)">
                  <rect x="51" width="12" height="58" fill="#DAA05D" />
                </g>
                <defs>
                  <filter
                    id="filter0_d_308_4"
                    x="51"
                    y="0"
                    width="32.5"
                    height="73.5"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="13" dy="8" />
                    <feGaussianBlur stdDeviation="3.75" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_308_4"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_308_4"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="book-outer-container">
                <div className="book-dot-container">
                  <div className="booking-dot"></div>
                  <div className="book-inner-circle"></div>
                  <p>BOOK !</p>
                </div>
              </div>
            </div>
          </div>
          <div className="book-outer-container d-sm-none d-block ">
            <div className="book-dot-container">
              <div className="booking-dot"></div>
              <div className="book-inner-circle"></div>
              <p>BOOK !</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
