import React, { useEffect } from "react";
import "./Booking.css";
import aboutLogo from "../../../../assets/about/about-logo.png";
import leftWing from "../../../../assets/booking/wing-left-large.png";
import rightWing from "../../../../assets/booking/wing-right-large.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Booking() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  return (
    <div className="booking" id="booking">
      <div
        className="container-md px-md-0 px-4 justify-content-center booking-inner-box"
        data-aos={"slide-up"}
      >
        <div className="booking-box-left-wing">
          <img src={leftWing} alt="" />
        </div>
        <div className="booking-box">
          <div className="booking-content">
            <h1 className="title">FRIENDS & FAMILY</h1>
            <img src={aboutLogo} alt="" data-aos={"slide-up"} />
            <p className="subtitle text-center mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              porro deleniti perferendis similique reiciendis voluptate
              provident repellat eligendi, inventore, nostrum asperiores,
              necessitatibus eum voluptatibus suscipit corporis fugit quae rerum
              aspernatur.
            </p>

            <div className="about-dot-container">
              <div className="about-dot"></div>
              <div className="about-inner-circle"></div>
              <p>BOOK</p>
            </div>
          </div>
        </div>
        <div className="booking-box-left-wing">
          <img src={rightWing} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Booking;
