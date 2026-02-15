import React from 'react'
import Layout from './components/layout';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages/Home';
import Shop from './Pages/shop';
import Productdetails from './Pages/Productdetails';
import Registration from './Pages/Registration';
import Login from './Pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/shop/:id" element={<Productdetails/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
