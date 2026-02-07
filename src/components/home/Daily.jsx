import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router'

const Daily = () => {
  return (
    <section>
       <div className="container">
        <div className="mb-10 flex items-center justify-between pb-4 border-b border-primary/40 relative after:left-0 after:bottom-0 after:rounded-full after:absolute after:w-full after:max-w-78 after:h-1 after:bg-brand">
          <h2 className="heading">
            Daily <span>Essentials</span>
          </h2>
          <Link to="/" className="flex items-center">
            View All <BiChevronRight />{" "}
          </Link>
        </div>
        <div>
            
        </div>
        </div>
    </section>
  )
}

export default Daily
