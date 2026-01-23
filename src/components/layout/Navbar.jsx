import React from "react";
import { BiChevronDown, BiSearchAlt, BiSolidOffer } from "react-icons/bi";
import { FaLocationDot, FaOpencart, FaTruckFast } from "react-icons/fa6";
import { PiUserBold } from "react-icons/pi";
import { Link } from "react-router";

const Navbar = () => {
    const catagories = [
      {
        title: "Groceries",
        to: "groceries",
        childern: [
          "Dairy & Eggs",
          "Bakery & Grains",
          "Meat & Fish",
          "Pantry & Staples",
          "Beverages",
          "Snacks & Sweets",
        ],
      },
      {
        title: "Premium Fruits",
        to: "fruits",
        childern: [
          "Blueberries",
          "Strawberries",
          "Grapes",
          "Pear ",
          "Pomegranate",
          "Avocado",
          "Cherry",
          "Mango",
        ],
      },
      {
        title: "Home & Kitchen",
        to: "home&kitchen",
        childern: [
          "Kitchen Essentials",
          "Dining & Serveware",
          "Appliances",
          "Home Cleaning",
          "Home Organization",
          "Home Decoration",
          "Bed & Bath",
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
        title: "Home Improvement",
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
      <nav>
        <div className="`bg-[#F5F5F5]` py-3">
          <div className="container flex justify-between ">
            <div>
              <p className="text-sm text-primary">
                Welcome to worldwide Megamart!
              </p>
            </div>
            <div className="flex gap-8">
              <Link className="flex items-center text-primary text-sm gap-1.5 relative after:absolute after:h-full after:w-0.5 after:bg-primary/30 after:top-0 after:-right-4">
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
        <div className="container flex justify-between py-5 items-center">
          <Link>
            <img src="/logo.jpg" alt="logo" />
          </Link>
          <div className="flex gap-2.5 items-center p-4 `bg-[#F3F9FB]` rounded-4xl w-full max-w-lg">
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
              className="flex items-center gap-1.5 text-base font-bold text-primary relative after:absolute after:h-full after:w-0.5 after:bg-primary/40 after:top-0 after:-right-5"
            >
              <PiUserBold className="text-brand text-xl" />
              Sign Up/Sign In
            </Link>
            <Link
              to="cart"
              className="flex items-center gap-1.5 text-base font-bold text-primary"
            >
              <FaOpencart className="text-brand text-xl" />
              Cart
            </Link>
          </div>
        </div>
      </nav>

      {/* product catagories */}

      <div>
        <div className="container flex">
          {catagories.map((item) => (
            <div key={item.title } className="relative group gap-3.5">
              <Link to={item.to} className="bg-third inline-block hover:bg-brand hover:text-white px-3.5 py-2 rounded-2xl text-[#222222] text-base font-medium ">
                <div className="flex items-center gap-1">
                  <p>{item.title}</p>
                  <BiChevronDown className="text-xl" />
                </div>
              </Link>
              <ul className="absolute top-full left-0 transition invisible opacity-0  group-hover:visible group-hover:opacity-100 w-60  bg-theme shadow space-y-2 p-2 rounded-2xl text-base text-primary font-medium">
                {
                    item.childern.map((child)=>(
                <li key={child}>
                  <Link className="hover:px-2 hover:bg-brand hover:text-theme  block rounded-2xl ">
                    {child}
                  </Link>
                </li>
                    ))
                }
              </ul>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
