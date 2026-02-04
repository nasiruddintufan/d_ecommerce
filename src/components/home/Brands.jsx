import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../ui/Sliderarrow';

const Brands = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      appendDots: (dots) => (
        <div>
          <ul className="flex gap-2 absolute bottom-3 md:bottom-10 left-10 md:left-30">
            {" "}
            {dots}{" "}
          </ul>
        </div>
      ),
      customPaging: (i) => (
        <div className="w-1 md:w-4 h-1 md:h-4 bg-theme rounded-full"></div>
      ),
    };
  return (
    <section className="pb-32">
      <div className="container">
        <div className="mb-10 flex items-center justify-between pb-4 border-b border-primary/40 relative after:left-0 after:bottom-0 after:rounded-full after:absolute after:w-full after:max-w-70 after:h-1 after:bg-brand">
          <h2 className="heading">
            Top <span>Electronics Brands</span>
          </h2>
          <Link to="/" className="flex items-center">
            View All <BiChevronRight />{" "}
          </Link>
        </div>
      </div>
      <div className="container">
        <Slider {...settings}>
          <div className='flex'>
            <div></div>
            <img src="/b1.png" alt="image" />
            <img src="/b1.png" alt="image" />
            <img src="/b1.png" alt="image" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Brands
