import React, { useState, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiShoppingCart, FiTruck } from "react-icons/fi";
import { Link, useParams } from "react-router";
import Slider from "react-slick";
import { useGetproductdetailsQuery } from "../services/api";

const Productdetails = () => {
  const { id } = useParams();
  const { data, isloading } = useGetproductdetailsQuery(id);
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

  console.log(data);

  return (
    <section className="py-120">
      <div className="container">
        <div className="grid grid-cols-2">
          <div>
            {/* Parent Slider */}

            <div className="bg-secondary/60 border mb-5 border-primary/20 rounded-3xl flex items-center justify-center">
              <Slider
                {...settings}
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                className="w-full h-full max-w-3/5"
              >
                {data?.images.map((img) => (
                  <div key={img}>
                    <img src={img} alt="image" className="w-full h-full" />
                  </div>
                ))}
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
              {data?.images?.map((img) => (
                <div>
                  <div className="border border-primary/20 mx-2 flex items-center justify-center rounded-2xl">
                    <img src={img} alt="image" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div>
            <div className="max-w-3xl mx-auto p-6 space-y-6">
              <h1 className="text-3xl font-bold">{data?.title}</h1>
              <p className="text-lg font-base">{data?.description}</p>
              <div className="flex flex-wrap items-center gap-10 text-lg">
                <span className="text-2xl font-bold">${data?.price}</span>
                <span className="text-gray-500">
                  Availability: {data?.availabilityStatus}
                </span>
                <span className="text-gray-500">Remain:{data?.stock}</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <button className="flex-1 bg-brand hover:bg-blue-500 text-white py-4 rounded-full font-semibold">
                  Shop Now
                </button>
                <button className="flex-1 border py-4 rounded-full font-semibold flex items-center justify-center gap-2">
                  <FiShoppingCart /> Add To Cart
                </button>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 bg-orange-50 p-4 rounded-xl font-medium">
                  % EMI Available <Link className="underline">View Plans</Link>
                </div>

                <div className="flex-1 bg-green-100 p-4 rounded-xl flex items-center gap-2 font-medium">
                  <FaWhatsapp className="text-green-600 text-xl" /> Whatsapp
                </div>
              </div>
              <div className="border p-4 rounded-xl flex items-center gap-3">
                <FiTruck className="text-xl" />
                {data?.shippingInformation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productdetails;
