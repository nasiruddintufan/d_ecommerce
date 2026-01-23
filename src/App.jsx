import React from 'react'
import Layout from './components/layout';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
