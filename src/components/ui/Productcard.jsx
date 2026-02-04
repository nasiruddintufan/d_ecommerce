import React from 'react'
import { Link } from 'react-router'

const Productcard = () => {
  return (
    <div className="border relative border-primary/20 rounded-2xl overflow-hidden w-full hover:shadow-sm transition">
      <Link to="/shop/productslug" className="bg-secondary flex justify-center py-4">
        <img src="/phone1.png" alt="phone" className="w-auto max-w-full" />
      </Link>
      <div className="bg-theme p-3">
        <h3 className=" text-xs md:text-xl pb-2">Galaxy s22</h3>
        <div className="flex gap-3 pb-2.5 mb-2.5 border-b border-secondary">
          <p className="font-bold text-xs md:text-base">$329.99</p>
          <p className="line-through text-primary text-xs md:text-base">
            $745.99
          </p>
        </div>
        <p className="text-green-600 font-semibold text-xs md:text-base">
          Save - $416.99
        </p>
      </div>
      <div className="p-2 md:p-2.5 bg-brand rounded-bl-2xl absolute top-0 right-0 max-w-8 md:max-w-12">
        <p className="text-xs text-theme">56% OFF</p>
      </div>
    </div>
  );
}

export default Productcard
