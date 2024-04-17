import React, { useState } from 'react'
import { RxCube, RxHamburgerMenu, RxCross1 } from "react-icons/rx";
// import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const HandleMenu = () =>{
    setShowMenu(true);
  }
  const HandleCloseMenu = ()=>{
    setShowMenu(false);
  }
  return (
    <div className='navbar w-full h-20 shadow-md flex items-center justify-between px-8'>
        <div className="logo flex gap-4">
            <RxCube size={50}/>
            <p className="company-text flex items-center text-xl font-semibold"><span className='text-red-500'>Cart</span>-On</p>
        </div>
        <div className="hamburger sm:hidden">
          <RxHamburgerMenu size={32} onClick={HandleMenu}/>
        </div>
        <div className={`link-menu absolute flex-col gap-4 items-end px-12 py-8 z-10 top-0 left-0 w-full bg-white `+(showMenu ? 'flex' : 'hidden')}>
          <RxCross1 size={32} onClick={HandleCloseMenu}/>
          <Link to='/' className='flex w-full items-center justify-center gap-4 py-5 border-b-2'>
              <p className="text text-xl font-semibold">Home</p>
          </Link>
          <Link to='/' className='flex w-full items-center justify-center gap-4 py-5 border-b-2'>
              <p className="text text-xl font-semibold">Profile</p>
          </Link>
          <Link to='/wishlist' className='flex w-full items-center justify-center gap-4 py-5 border-b-2'>
              <p className="text text-xl font-semibold">Wishlist</p>
          </Link>
          <Link to='/cart' className='flex w-full items-center justify-center gap-4 py-5 border-b-2'>
              <p className="text text-xl font-semibold">Cart</p>
          </Link>
        </div>
    </div>
  )
}

export default Navbar
