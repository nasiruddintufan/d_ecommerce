import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router'

const Daily = () => {
    const daily = [
      {
        title: "Daily Essentials",
        title1: "UP to 50% OFF",
        src: "/d1.png",
      },
      {
        title: "Vegitable",
        title1: "UP to 50% OFF",
        src: "/d2.png",
      },
      {
        title: "Fruits",
        title1: "UP to 50% OFF",
        src: "/d3.png",
      },
      {
        title: "Strawberry",
        title1: "UP to 50% OFF",
        src: "/d4.png",
      },
      {
        title: "Mango",
        title1: "UP to 50% OFF",
        src: "/d5.png",
      },
      {
        title: "Cherry",
        title1: "UP to 50% OFF",
        src: "/d6.png",
      },
    ];
  return (
    <section>
      <div className="pb-32">
        <div className="container">
          <div className="mb-10 flex items-center justify-between pb-4 border-b border-primary/40 relative after:left-0 after:bottom-0 after:rounded-full after:absolute after:w-full after:max-w-78 after:h-1 after:bg-brand">
            <h2 className="heading">
              Daily <span>Essentials</span>
            </h2>
            <Link to="/" className="flex items-center">
              View All <BiChevronRight />{" "}
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {daily.map((item) => (
              <Link key={item.title} className="flex flex-col items-center">
                
                <div className="w-44 h-44 bg-secondary rounded-2xl border border-transparent hover:border-brand hover:shadow-2xl flex items-center justify-center">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="max-w-4/5 max-h-4/5 object-contain"
                  />
                </div>

                
                <div className="mt-4 text-center">
                  <p className="text-primary font-medium text-base">
                    {item.title}
                  </p>
                  <h3 className="font-bold">{item.title1}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Daily
