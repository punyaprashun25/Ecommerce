import React from 'react'
import { Navbar, Footer, ProductView } from '../components'
import { useSelector } from 'react-redux'
const Wishlist = () => {
  const wishlists = useSelector((state)=>state.wishlist);
  return (
    <div className='wishlist'>
      <Navbar />
      <ProductView products={wishlists} Iswishlist={true}/>
      <Footer />
    </div>
  )
}

export default Wishlist
