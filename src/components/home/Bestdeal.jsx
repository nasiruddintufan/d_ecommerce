import React from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router';
import Productcard from '../ui/Productcard';
import { useGetproductsQuery } from '../../services/api';

const Bestdeal = () => {
  const {data,isError,error,isLoading} = useGetproductsQuery({limit:5,category:"smartphones"});
  return (
    <section className="py-120">
      <div className="container">
        <div className="mb-10 flex items-center justify-between pb-4 border-b border-primary/40 relative after:left-0 after:bottom-0 after:rounded-full after:absolute after:w-full after:max-w-99 after:h-1 after:bg-brand">
          <h2 className="heading">
            Grab the best deal on <span>Smartphone</span>
          </h2>
          <Link to="/shop?category=smartphones" className="flex items-center">
            View All <BiChevronRight />{" "}
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 gap-4">
          {data?.products.map((item) => (
            <Productcard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bestdeal;
