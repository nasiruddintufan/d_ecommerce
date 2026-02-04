import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

const Productdetails = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
  };

  return (
    <section className="py-120">
      <div className="container">
        <div className="grid grid-cols-3">
          <div>
            {/* Parent Slider */}

            <div className="bg-secondary/60 border mb-5 border-primary/20 rounded-3xl flex items-center justify-center">
              <Slider
                {...settings}
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                className="w-full h-full max-w-3/5"
              >
                <div>
                  <img
                    src="/phone1.png"
                    alt="image"
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <img src="/m1.png" alt="image" className="w-full h-full" />
                </div>
                <div>
                  <img src="/m2.png" alt="image" className="w-full h-full" />
                </div>
                <div>
                  <img src="/m3.png" alt="image" className="w-full h-full" />
                </div>
              </Slider>
            </div>

            {/* Child Slider */}

            <Slider
              {...settings}
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div>
                <div className="border border-primary/20 mx-2 flex items-center justify-center rounded-2xl">
                  <img src="/phone1.png" alt="image" />
                </div>
              </div>
              <div>
                <div className="border border-primary/20 mx-2 flex items-center justify-center rounded-2xl">
                  <img src="/m1.png" alt="image" />
                </div>
              </div>
              <div>
                <div className="border border-primary/20 mx-2 flex items-center justify-center rounded-2xl">
                  <img src="/m2.png" alt="image" />
                </div>
              </div>
              <div>
                <div className="border border-primary/20 mx-2 flex items-center justify-center rounded-2xl">
                  <img src="/m3.png" alt="image" />
                </div>
              </div>
            </Slider>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Productdetails;
