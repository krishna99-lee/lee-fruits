import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './Pages/Login';

export default function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />} />
         </Routes>
      </BrowserRouter>
    </>
  )
}
