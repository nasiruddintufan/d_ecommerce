import React, { useState } from "react";
import { BiChevronDown, BiSearchAlt, BiSolidOffer } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import { FaBarsStaggered, FaLocationDot, FaOpencart, FaTruckFast } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { GoChevronDown } from "react-icons/go";
import { MdOutlineCancel } from "react-icons/md";
import { PiUserBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router";

const Navbar = () => {
  const [openderopdown,setopendropdown]=useState();
  const [isopen,setisopen]=useState(false);
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
          "Men Fashion",
          "Women Fashion",
          "Kids Fashion",
          "Accessories",
          "Footwear",
          "Seasonal & Special",
        ],
      },
      {
        title: "Electronics",
        to: "electronics",
        childern: [
          "Seasonal & Special",
          "Computers & Laptops",
          "TV & Entertainment",
          "Smart Devices",
        ],
      },
      {
        title: "Beauty",
        to: "beauty",
        childern: ["Skincare", "Haircare"],
      },
      {
        title: "Home ",
        to: "homeimprovement",
        childern: [
          "Tools & Hardware",
          "Electrical & Lighting",
          "Paint & Supplies",
          "Plumbing & Bathroom",
          "Home Safety & Security",
          "Garden & Outdoor",
          "Storage & Organization",
        ],
      },
      {
        title: "Sports,Toys & Luggage",
        to: "sporttoy",
        childern: [
          "Fitness Equipments",
          "Outdoor Sports",
          "Sports Apparel & Shoes",
          "Water Sports Equipment",
          "Travel Bags",
          "Backpacks & School Bags",
          "Laptop Bags & Messenger Bags",
          "Travel Accessories",
          "Art & Craft Kits",
          "Educational Toys",
          "Outdoor Toys",
          "Remote Control Toys",
          "Puzzles & Board Games",
        ],
      },
    ];
  return (
    <header>
      <div className="bg-[#F5F5F5] py-3 hidden md:block">
        <div className="container flex justify-between ">
          <div>
            <p className="text-sm text-primary">
              Welcome to worldwide Megamart!
            </p>
          </div>
          <div className="flex gap-8">
            <Link className="flex  items-center text-primary text-sm gap-1.5 relative after:absolute after:h-full after:w-0.5 after:bg-primary/30 after:top-0 after:-right-4">
              <FaLocationDot className="text-brand" />
              <p>Deliver to 423651</p>
            </Link>
            <Link className="flex items-center text-primary text-sm gap-1.5 relative after:absolute after:h-full after:w-0.5 after:bg-primary/30 after:top-0 after:-right-4">
              <FaTruckFast className="text-brand" />
              <p>Track your order</p>
            </Link>
            <Link className="flex items-center text-primary text-sm gap-1.5">
              <BiSolidOffer className="text-brand" />
              <p>All Offers</p>
            </Link>
          </div>
        </div>
      </div>
      {/* navbar */}
      <nav>
        <div className="container">
          <div className="flex justify-between py-5 items-center">
            <button
              onClick={() => setisopen(true)}
              className="text-primary text-2xl md:hidden"
            >
              <FaBarsStaggered />
            </button>
            <Link className="w-40 md:w-auto">
              <img src="/logo.jpg" alt="logo" className="w-full" />
            </Link>

            {/* desktop searchbar */}

            <div className="hidden md:flex gap-2.5 items-center p-4 bg-[#F3F9FB] rounded-4xl w-full max-w-lg">
              <BiSearchAlt className="text-brand text-2xl" />
              <input
                type="text"
                placeholder="Search essentials, groceries and more..."
                className="w-full text-primary text-base outline-0"
              />
            </div>
            <div className="flex gap-10">
              <Link
                to="signin"
                className="hidden md:flex items-center gap-1.5 text-base font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/40 after:top-0 after:-right-5"
              >
                <PiUserBold className="text-brand text-xl" />
                Sign Up/Sign In
              </Link>
              <Link
                to="cart"
                className="flex items-center gap-1.5 text-base font-bold text-primary"
              >
                <FaOpencart className="text-brand text-xl" />
                <span className="hidden md:block">cart</span>
              </Link>
            </div>
          </div>
          {/* mobile Navbar */}

          <div className="md:hidden">
            <div className="flex md:hidden gap-2.5 mb-4 items-center p-4 bg-[#F3F9FB] rounded-4xl w-full">
              <BiSearchAlt className="text-brand text-2xl" />
              <input
                type="text"
                placeholder="Search essentials, groceries and more..."
                className="w-full text-primary text-base outline-0"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* product catagories desktop*/}

      <div className="py-4 border-y border-secondary hidden md:block">
        {/* for scroll type use overflow-x-auto */}
        <div className="container flex gap-1">
          {catagories.map((item) => (
            <div key={item.title} className="relative group gap-3.5">
              <Link
                to={item.to}
                className="bg-third inline-block hover:bg-brand hover:text-white px-3.5 py-2 rounded-2xl text-[#222222] text-base font-medium "
              >
                <div className="flex items-center gap-1">
                  <p>{item.title}</p>
                  <BiChevronDown className="text-xl" />
                </div>
              </Link>
              <ul className="absolute top-full left-0 transition invisible opacity-0  group-hover:visible group-hover:opacity-100 w-60  bg-theme shadow space-y-2 p-2 rounded-2xl text-base text-primary font-medium">
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
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* mobile sidebar */}
      <div>
        <div
          className={`${
            isopen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden fixed top-0 left-0 w-full h-screen bg-primary/55`}
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
              {catagories.map((item) => (
                <li key={item.title}>
                  <div className="flex justify-between">
                    <Link to={item.to}>{item.title}</Link>
                    <button
                      onClick={() => {
                        setopendropdown(item.title);
                      }}
                    >
                      <GoChevronDown />
                    </button>
                  </div>
                  <div>
                    <ul
                      className={`${
                        openderopdown === item.title ? "block" : "hidden"
                      } font-normal text-base pl-3 space-y-2 mt-2`}
                    >
                      {item.childern.map((child) => (
                        <li key={child.title}>
                          <Link>{child.title}</Link>
                        </li>
                      ))}
                    </ul>
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
