import React from 'react'
import Productcard from '../ui/Productcard'

const Productlist = () => {
  return (
    <section className='py-120'>
      <div className='container'>
        <div className='mb-5 flex justify-between items-center'>
            <p>Showing: <span className='font-bold'>(100 items)</span></p>
            <div className='flex items-center gap-2'>
                <p>Display 1 of 15 prodeuct :</p>
                <select className='py-2 px-5 border rounded-full'>
                    <option value="">10</option>
                    <option value="">20</option>
                    <option value="">30</option>
                    <option value="">40</option>
                    <option value="">50</option>
                </select>
            </div>
        </div>
        <div className='grid grid-cols-5 gap-5'>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
            <Productcard/>
        </div>
      </div>
    </section>
  )
}

export default Productlist
