import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-router";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../ui/Sliderarrow";

const Brands = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    appendDots: (dots) => (
      <div>
        <ul className="flex gap-2 absolute top-4/5 left-1/2 -translate-x-1/2">
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="bg-primary w-1 sm:w-2 h-1 sm:h-2 rounded-full"></div>
    ),
  };
  return (
    <section>
      <div className="container">
        <div className="mb-10 flex items-center justify-between pb-4 border-b border-primary/40 relative after:left-0 after:bottom-0 after:rounded-full after:absolute after:w-full after:max-w-65 after:h-1 after:bg-brand">
          <h2 className="heading">
            Top <span>Electronics Brand</span>
          </h2>
        </div>
        <div className="slider-container brands-slider">
          <Slider {...settings}>
            <div>
              <img src="/b1.png" alt="banner" className="w-full" />
            </div>
            <div>
              <img src="/b2.png" alt="banner" className="w-full" />
            </div>
            <div>
              <img src="/b3.png" alt="banner" className="w-full" />
            </div>
            <div>
              <img src="/b1.png" alt="banner" className="w-full" />
            </div>
            <div>
              <img src="/b2.png" alt="banner" className="w-full" />
            </div>
            <div>
              <img src="/b3.png" alt="banner" className="w-full" />
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Brands;
