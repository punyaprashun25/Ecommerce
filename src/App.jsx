import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Wishlist, Cartpage, Checkout } from './pages';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/wishlist' element={<Wishlist/>}></Route>
            <Route path='/cart' element={<Cartpage/>}></Route>
            <Route path='/Checkout' element={<Checkout/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
