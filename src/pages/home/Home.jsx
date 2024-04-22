import React from "react";
import Hero from "./homeComponents/Hero/Hero";
import Navbar from "./homeComponents/Navigation/Navbar";
import About from "./homeComponents/About/About";
import Banner from "./homeComponents/Banner/Banner";
import Footer from "./homeComponents/Footer/Footer";

import "./Home.css";
import VideoSlider from "./homeComponents/Video/VideoSlider";
import Booking from "./homeComponents/Booking/Booking";
import Testimonials from "./homeComponents/Testimonials/Testimonials";

function Home() {
  return (
    <div className="home_container">
      <Navbar />
      <Hero />
      <About />
      <Banner />
      <VideoSlider />
      <Booking />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
