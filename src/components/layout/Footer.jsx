import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="p-20 bg-brand">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
          <div>
            <Link to="/">
              <img src="/footerlogo.png" alt="logo" />
            </Link>
            <h4 className="text-xl font-bold text-theme mt-8">Contact Us</h4>
            <div className="mt-5 space-y-5">
              <Link className="flex gap-2.5 text-theme font-bold">
                <BsWhatsapp />
                <div>
                  <p>Whatsapp</p>
                  <p>+008 17263-2173</p>
                </div>
              </Link>
              <Link className="flex gap-2.5 text-theme font-bold">
                <BsWhatsapp />
                <div>
                  <p>Whatsapp</p>
                  <p>+008 17263-2173</p>
                </div>
              </Link>
            </div>
            <h4 className="text-xl font-bold text-theme mt-8">Download Now</h4>
            <div className="flex gap-5 mt-5">
              <Link>
                <img src="/apple.png" alt="logo" />
              </Link>
              <Link>
                <img src="/play.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-theme border-b-2 w-fit pb-4">
              Most Popular Catagories
            </h3>
            <ul className="text-theme font-medium text-base space-y-5 mt-5 list-disc pl-5">
              <li>
                <Link to="/">Staples</Link>
              </li>
              <li>
                <Link to="/">Beverage</Link>
              </li>
              <li>
                <Link to="/">Home care</Link>
              </li>
              <li>
                <Link to="/">Baby care</Link>
              </li>
              <li>
                <Link to="/">Snakcs</Link>
              </li>
              <li>
                <Link to="/">Furniture</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-theme border-b-2 w-fit pb-4">
              Customer Services{" "}
            </h3>
            <ul className="text-theme font-medium text-base space-y-5 mt-5 list-disc pl-5">
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Term and Condition</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Ewaste Policy</Link>
              </li>
              <li>
                <Link to="/">Cancellation and Return PO</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" mt-5 text-theme border-t">
          <p className="text-theme text-center mt-5 ">
            © {new Date().getFullYear()} All rights reserved. Reliance Retail
            Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
