import React, { useEffect } from "react";
import "./About.css";
import broch from "../../../../assets/about/broch.png";
import brochSM from "../../../../assets/about/brochSM.png";
import ma9la from "../../../../assets/about/ma9la.png";
import aboutLogo from "../../../../assets/about/about-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  return (
    <div className="about">
      <div className=" row about-ctr">
        {/* <div className="col-1 d-xl-block d-none bg-about">
          <span>
            ABOUT
          </span>
        </div>
        <div className="col-3 d-xl-block d-none bg-broch">
          <img src={broch} alt="" data-aos={"zoom-out"} data-aos-delay="800" />
        </div> */}
        <div className="col-4 ps-0 fork_block_md d-sm-flex d-none">
          <div className="text"><span>ABOUT US</span></div>
          <div className="img" data-aos={"zoom-out"} data-aos-delay="800">
            <img src={brochSM} alt="" className="img-fluid" />
          </div>
        </div>
        <div className="col-sm-4 col-12 bg-content">
          <div className="text-content-about">
            <h1 data-aos={"slide-up"}>ABOUT US</h1>
            <img src={aboutLogo} alt="" data-aos={"slide-up"} />
            <h5 data-aos={"slide-up"}>Welcome to gastro Angel</h5>
            <h6 data-aos={"slide-up"}>Best Quality</h6>
            <h2 data-aos={"slide-up"}>Foods</h2>
            <p data-aos={"slide-up"}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis ipsam eveniet officiis ut repudiandae quaerat
            </p>
            <div
              className="about-btn"
              data-aos={"zoom-out"}
              data-aos-delay="1500"
            >
              <div className="about-outer-container">
                <div className="about-dot-container">
                  <div className="about-dot"></div>
                  <div className="about-inner-circle"></div>
                  <p>MORE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12 bg-ma9la">
          <div
            className="ma9la-dot-outer-container"
            data-aos={"zoom-out"}
            data-aos-delay="800"
          >
            <div className="ma9la-dot-container">
              <img src={ma9la} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
