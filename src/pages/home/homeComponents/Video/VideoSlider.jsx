import React, { useState, useEffect } from "react";
import "./VideoSlider.css";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    imageUrl: "https://wallpapercave.com/wp/wp10322965.jpg",
    title: "Highlands",
    location: "Scotland",
  },
  {
    imageUrl:
      "https://www.lux-review.com/wp-content/uploads/2020/08/Lobster.jpg",
    title: "Sahara",
    location: "Marrakech",
  },
  {
    imageUrl:
      "https://mavieenloireatlantique.fr/wp-content/uploads/2022/02/nantes-restaurant-luni-23.jpg",
    title: "Dolomites",
    location: "Italy",
  },
  {
    imageUrl:
      "https://www.tradegroup.com/wp-content/uploads/2023/07/image-1.jpeg",
    title: "Maldives",
    location: "Indian Ocean",
  },
];

function VideoSlider() {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    AOS.init({
      once: false,
      duration: 500,
    });
  }, []);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.pageYOffset > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <section id="roto" className={scrollActive ? "active" : ""}>
      <div id="rotoTransition" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentSlide ? "active" : ""
              }`}
            >
              <div className="slide" >
                <img
                  src={slide.imageUrl}
                  alt={`slide-${index}`}
                  className="mainImage"
                />
                <div className="roundOuter" >
                  <img src={slide.imageUrl} alt={`slide-${index}`} />
                </div>
                <div className="roundInner">
                  <img src={slide.imageUrl} alt={`slide-${index}`} />
                </div>
                <div className="slideText">
                  <h1
                    className="animate__animated animate__fadeInUp"
                    data-aos={"zoom-out"}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className="animate__animated animate__fadeInUp"
                    data-aos={"zoom-out"}
                    data-aos-delay="400"
                  >
                    {slide.location}
                  </p>
                  <div
                    className="buttonNav animate__animated animate__fadeInDown mb-5"
                    data-aos={"zoom-out"}
                    data-aos-delay="600"
                  >
                    <button
                      type="button"
                      onClick={prevSlide}
                      data-aos={"slide-right"}
                      data-aos-delay="800"
                    >
                      <i className="fa-solid fa-arrow-left-long">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-arrow-left"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                          />
                        </svg>
                      </i>
                    </button>
                    <span></span>
                    <button
                      type="button"
                      onClick={nextSlide}
                      data-aos={"slide-left"}
                      data-aos-delay="800"
                    >
                      <i className="fa-solid fa-arrow-right-long">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                      </i>
                    </button>
                  </div>
                  <div
                    class="invitation-dot-container"
                    data-aos={"zoom-out"}
                    data-aos-delay="1000"
                  >
                    <div class="invitation-dot"></div>
                    <div className="invitation-inner-circle"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      class="bi bi-play-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoSlider;
