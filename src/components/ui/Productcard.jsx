import React from 'react'
import { BiStar } from 'react-icons/bi';
import { Link } from 'react-router'

const Productcard = ({data}) => {
  return (
    <div className="border relative border-primary/20 rounded-2xl overflow-hidden w-full hover:shadow-sm transition">
      <Link
        to={`/shop/${data?.id}`}
        className="bg-secondary flex justify-center py-4"
      >
        <img src={data?.thumbnail} alt="phone" className="w-auto max-w-full" />
      </Link>
      <div className="bg-theme p-3">
        <h3 className=" text-xs md:text-xl pb-2">{data?.title}</h3>
        <div className="flex gap-3 pb-2.5 mb-2.5 border-b border-secondary">
          <p className="font-bold text-xs md:text-base">{data?.price}$</p>
          <p className="line-through text-primary text-xs md:text-base">
            {data?.price + 40}$
          </p>
        </div>
        <p className="text-green-600 font-semibold text-xs md:text-base">
          Save - {data?.price + 40 - data?.price}$
        </p>
        <p className="text-amber-300 font-semibold text-xs md:text-base flex items-center gap-2">
          Rating -{" "}
          <span className="text-amber-300 flex items-center gap-1">
            <BiStar /> {data?.rating}
          </span>
        </p>
      </div>
      {data?.discountPercentage && (
        <div className="p-2 md:p-2.5 bg-brand rounded-bl-2xl absolute top-0 right-0 max-w-8 md:max-w-16">
          <p className="text-xs text-theme">{data?.discountPercentage}% OFF</p>
        </div>
      )}
    </div>
  );
}

export default Productcard
