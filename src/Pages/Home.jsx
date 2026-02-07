import React from 'react'
import Banner from '../components/home/banner'
import Bestdeal from '../components/home/Bestdeal'
import Catagories from '../components/home/Catagories'
import Brands from '../components/home/Brands'
import Daily from '../components/home/Daily'

const Home = () => {
  return (
    <>
      <Banner/> 
      <Bestdeal/>
      <Catagories/>
      <Brands/>
      <Daily/>
    </>
  )
}

export default Home
