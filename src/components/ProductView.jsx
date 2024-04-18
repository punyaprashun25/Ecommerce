import React from 'react'
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const ProductView = ({products, wishlist}) => {

  return (
    <div className='store w-full px-6 py-8 grid  lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-y-10 gap-x-3'>
      {
        products.map((itemData)=>{
          return <div className="data-container flex flex-col justify-center items-center px-4 py-4 w-80 sm:w-72 gap-2 border border-gray-950 rounded-sm justify-self-center" key={itemData.id}>
            <div className="img-box object-contain w-[90%] aspect-[1/1.2] overflow-hidden flex justify-center">
              <img src={itemData.thumbnail} alt="" className='object-cover'/>
            </div>
            <p className="title text-sm text-center font-medium">{itemData.title}</p>
            <p className="price text-lg text-center font-semibold">Rs. {itemData.price}</p>
            <div className="btn-box w-full flex justify-center items-center gap-6">
                <div className="wishlist">
                    <CiHeart size={32} color='red' className='cursor-pointer'/>
                </div>
                <div className="addCart flex gap-2 text-white color-white bg-[#FF3E6C] px-4 py-2 rounded-md cursor-pointer" >
                  <HiOutlineShoppingBag size={24}/>
                  <p className="buy">Add to Cart</p>
                </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default ProductView
