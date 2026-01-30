import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import { NextArrow, PrevArrow } from '../ui/Sliderarrow';

const Banner = () => {
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
          <ul className="flex gap-2 absolute bottom-3 md:bottom-10 left-10 md:left-24"> {dots} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div className='w-1 md:w-4 h-1 md:h-4 bg-theme rounded-full'>
          
        </div>
      ),
    };

    

  return (
    <section className="">
      <div className="container">
        <Slider {...settings}>
          <div>
            <img className="w-full" src="/banner.png" alt="banner" />
          </div>
          <div>
            <img className="w-full" src="/banner2.png" alt="banner" />
          </div>
          <div>
            <img className="w-full" src="/banner3.png" alt="banner" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Banner
