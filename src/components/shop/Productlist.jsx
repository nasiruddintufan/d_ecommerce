import React, { useState } from 'react'
import Productcard from '../ui/Productcard'
import { useGetproductsQuery } from '../../services/api'
import Loding from '../ui/Loding';
import { useSearchParams } from 'react-router';

const Productlist = () => {
  const [searchparams] = useSearchParams()
  const category = searchparams.get("category");
  const [limit,setlimit]=useState(20); 
  const [skip,setskip]=useState(0);
  const {data,isError,error,isLoading} = useGetproductsQuery({limit,skip,category});

  

  return (
    <section className="py-120">
      <div className="container">
        <div className="mb-5 flex justify-between items-center">
          <p>
            Showing: <span className="font-bold">({limit} items)</span>
          </p>
          <div className="flex items-center gap-2">
            <p>Displaying {skip+1}-{parseInt(limit)+skip} Product :</p>
            <select onChange={(e)=>setlimit(e.target.value)} 
            value={limit} className="py-2 px-5 border rounded-full">

              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
        {
          isLoading ?(
            <Loding/>
          ):(
            <div className="grid grid-cols-5 gap-5">
          {data?.products.map((item) => (
            <Productcard key={item.id} data={item}/>
          ))}
         
        </div>
          )
          
        }
        
      </div>
    </section>
  );
}

export default Productlist
