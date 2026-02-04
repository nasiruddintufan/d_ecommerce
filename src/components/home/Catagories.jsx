import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router'

const Catagories = () => {
    const catagory = [
      {
        title: "Mobile",
        src: "/phone1.png",
      },
      {
        title: "Cosmatics",
        src: "/phone1.png",
      },
      {
        title: "Electronics",
        src: "/phone1.png",
      },
      {
        title: "Furnitures",
        src: "/phone1.png",
      },
      {
        title: "Watches",
        src: "/phone1.png",
      },
      {
        title: "Decor",
        src: "/phone1.png",
      },
      {
        title: "Accessories",
        src: "/phone1.png",
      },
    ];
  return (
    <section className="pb-32">
      <div className="container">
        <div className="mb-10 flex items-center justify-between pb-4 border-b border-primary/40 relative after:left-0 after:bottom-0 after:rounded-full after:absolute after:w-full after:max-w-78 after:h-1 after:bg-brand">
          <h2 className="heading">
            Shop From Top <span>Catagories</span>
          </h2>
          <Link to="/" className="flex items-center">
            View All <BiChevronRight />{" "}
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {catagory.map((item) => (
            <Link key={item.title} className="flex flex-col items-center">
              <div className="bg-secondary w-32 h-32 border border-transparent hover:border-brand 
              hover:shadow-2xl rounded-full flex items-center justify-center">
                <img
                  src={item.src}
                  alt="image"
                  className="w-auto max-w-4/5 h-auto max-h-4/5"
                />
              </div>
              <h3 className="mt-5 text-primary font-medium text-base">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catagories
