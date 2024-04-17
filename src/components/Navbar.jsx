import React from 'react'
import { RxCube, RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <div className='navbar w-full h-20 shadow-md flex items-center justify-between px-8'>
        <div className="logo flex gap-4">
            <RxCube size={50}/>
            <p className="company-text flex items-center text-xl font-semibold"><span className='text-red-500'>Cart</span>-On</p>
        </div>
        <div className="hamburger sm:hidden">
          <RxHamburgerMenu size={32} />
        </div>
    </div>
  )
}

export default Navbar
