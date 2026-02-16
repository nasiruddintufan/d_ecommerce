import React, { useState } from "react";
import { BiChevronDown, BiSearchAlt, BiSolidOffer } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import {
  FaBarsStaggered,
  FaLocationDot,
  FaOpencart,
  FaTruckFast,
} from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { GoChevronDown } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { PiUserBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";
import { useGetcategoryListQuery } from "../../services/api";

const Navbar = () => {
  const [openderopdown, setopendropdown] = useState();
  const [isopen, setisopen] = useState(false);
  const {data} = useGetcategoryListQuery()
  console.log(data);
  

  const catagories = [
    {
      title: "Groceries",
      to: "groceries",
      childern: [
        {
          title: "Dairy & Eggs",
          to: "",
        },
        {
          title: "Bakery & Grains",
          to: "",
        },
        {
          title: "Meat & Fish",
          to: "",
        },
        {
          title: "Pantry & Staples",
          to: "",
        },
        {
          title: "Beverages",
          to: "",
        },
        {
          title: "Snacks & Sweets",
          to: "",
        },
      ],
    },
    {
      title: "Fruits",
      to: "fruits",
      childern: [
        {
          title: "Blueberries",
          to: "",
        },
        {
          title: "Strawberries",
          to: "",
        },
        {
          title: "Grapes",
          to: "",
        },
        {
          title: "Pear ",
          to: "",
        },
        {
          title: "Pomegranate",
          to: "",
        },
        {
          title: "Avocado",
          to: "",
        },
      ],
    },

    {
      title: "Kitchen",
      to: "home&kitchen",
      childern: [
        {
          title: "Kitchen Essentials",
          to: "",
        },
        {
          title: "Dining & Serveware",
          to: "",
        },
        {
          title: "Appliances",
          to: "",
        },
        {
          title: "Home Cleaning",
          to: "",
        },
        {
          title: "Home Organization",
          to: "",
        },
        {
          title: "Bed & Bath",
          to: "",
        },
      ],
    },

    {
      title: "Fashion",
      to: "fashion",
      childern: [
        {
          title: "Men Fashion",
          to: "",
        },
        {
          title: "Women Fashion",
          to: "",
        },
        {
          title: "Kids Fashion",
          to: "",
        },
        {
          title: "Accessories",
          to: "",
        },
        {
          title: "Footwear",
          to: "",
        },
        {
          title: "Seasonal & Special",
          to: "",
        },
      ],
    },

    {
      title: "Electronics",
      to: "electronics",
      childern: [
        {
          title: "Seasonal & Special",
          to: "",
        },
        {
          title: "Computers & Laptops",
          to: "",
        },
        {
          title: "TV & Entertainment",
          to: "",
        },
        {
          title: "Smart Devices",
          to: "",
        },
      ],
    },

    {
      title: "Beauty",
      to: "beauty",
      childern: [
        {
          title: "Skincare",
          to: "",
        },
        {
          title: "Haircare",
          to: "",
        },
      ],
    },

    {
      title: "Home",
      to: "homeimprovement",
      childern: [
        {
          title: "Tools & Hardware",
          to: "",
        },
        {
          title: "Electrical & Lighting",
          to: "",
        },
        {
          title: "Paint & Supplies",
          to: "",
        },
        {
          title: "Plumbing & Bathroom",
          to: "",
        },
        {
          title: "Home Security",
          to: "",
        },
        {
          title: "Garden & Outdoor",
          to: "",
        },
      ],
    },

    {
      title: "STL",
      to: "sporttoy",
      childern: [
        {
          title: "Fitness Equipments",
          to: "",
        },
        {
          title: "Outdoor Sports",
          to: "",
        },
        {
          title: "Sports Apparel ",
          to: "",
        },
        {
          title: "Travel Bags",
          to: "",
        },
        {
          title: "Backpacks",
          to: "",
        },
        {
          title: "Travel Accessories",
          to: "",
        },
        {
          title: "Art & Craft",
          to: "",
        },
        {
          title: "Educational Toys",
          to: "",
        },
        {
          title: "Outdoor Toys",
          to: "",
        },
      ],
    },
    
  ];
  return (
    <header className="relative z-50">
      {/* navbar */}
      <nav>
        <div className="container">
          <div className="flex justify-between py-5 items-center">
            <button
              onClick={() => setisopen(true)}
              className="text-primary text-2xl lg:hidden"
            >
              <FaBarsStaggered />
            </button>
            <Link className="inline-block w-40 lg:w-auto" to="/">
              <img src="/logo.jpg" alt="logo" className="w-full" />
            </Link>

            {/* desktop searchbar */}

            <div className="hidden lg:flex gap-2.5 items-center p-4 bg-[#F3F9FB] rounded-4xl w-full max-w-lg">
              <BiSearchAlt className="text-brand text-2xl" />
              <input
                type="text"
                placeholder="Search essentials, groceries and more..."
                className="w-full text-primary text-base outline-0"
              />
            </div>
            <div className="flex gap-10">
              <Link
                to="/login"
                className="hidden lg:flex items-center gap-1.5 text-base font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/40 after:top-0 after:-right-5"
              >
                <PiUserBold className="text-brand text-xl" />
                <span className="hidden lg:block">Sign up/Sign in</span>
              </Link>
              <Link
                to="cart"
                className="flex items-center gap-1.5 text-base font-bold text-primary"
              >
                <FaOpencart className="text-brand text-xl" />
                <span className="hidden lg:block">cart</span>
              </Link>
            </div>
          </div>

          {/* mobile Navbar */}

          <div className="flex lg:hidden gap-2.5 mb-4 items-center p-4 bg-[#F3F9FB] rounded-4xl w-full ">
            <BiSearchAlt className="text-brand text-2xl" />
            <input
              type="text"
              placeholder="Search essentials, groceries and more..."
              className="w-full text-primary text-base outline-0"
            />
          </div>
        </div>
      </nav>

      {/* product catagories desktop*/}

      <div className=" py-4 border-y border-secondary hidden lg:block">
        {/* for scroll type use overflow-x-auto */}
        <div className="container flex gap-5 relative z-50 ">
          {data?.slice(0,11).map((item) => (
            <div key={item} className="relative group">
              <Link
                to={`/shop?category=${item}`}
                className="bg-third inline-block hover:bg-brand py-2 px-3 text-base font-medium rounded-2xl text-[#222222] hover:text-theme"
              >
                <div className="flex items-center gap-1 text-nowrap capitalize">
                  <p>{item}</p>
                  {/* <BiChevronDown className="text-xl transform transition-transform duration-200 group-hover:rotate-180" /> */}
                </div>
              </Link>
              {/* <ul className="absolute top-full left-0 transition invisible opacity-0  group-hover:visible group-hover:opacity-100 w-48  bg-theme shadow space-y-2 p-2 rounded-2xl text-base text-primary font-medium">
                {item.childern.map((child) => (
                  <li key={child.title}>
                    <Link
                      key={child.to}
                      className="hover:px-2 hover:bg-brand hover:text-theme  block rounded-2xl "
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>

      {/* mobile sidebar */}
      <div>
        <div
          className={`${
            isopen ? "opacity-100 visible" : "opacity-0 invisible"
          } lg:hidden fixed top-0 left-0 w-full h-screen bg-primary/55 z-50`}
        >
          <div
            className={`${
              isopen ? "translate-x-0" : "-translate-x-full"
            } transition w-4/5 sm:w-3/5 bg-theme h-full p-4`}
          >
            <div className="flex items-center justify-between py-3 pb-2 mb-2 border-b border-secondary">
              <h4 className="text-xl text-primary">Main Menu</h4>
              <button
                onClick={() => setisopen(false)}
                className="text-xl text-primary "
              >
                <MdOutlineCancel />
              </button>
            </div>
            <ul className="space-y-4 text-primary font-bold text-lg pb-5 mb-5 border-b border-secondary">
              {data?.slice(0,11).map((item) => (
                <li key={item}>
                  <div className="flex justify-between">
                    <Link to={item.to}>{item}</Link>
                    {/* <button
                      onClick={() => {
                        setopendropdown(item.title);
                      }}
                    >
                      <GoChevronDown
                        className={`transform transition-transform duration-300 ${
                          openderopdown === item.title
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      />
                    </button> */}
                  </div>
                  <div>
                    {/* <ul
                      className={`${
                        openderopdown === item.title ? "block" : "hidden"
                      } font-normal text-base pl-3 space-y-2 mt-2 `}
                    >
                      {item.childern.map((child) => (
                        <li key={child.title}>
                          <Link>{child.title}</Link>
                        </li>
                      ))}
                    </ul> */}
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="signin"
              className="flex items-center gap-1.5 text-base font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/40 after:top-0 after:-right-5"
            >
              Sign Up/Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 