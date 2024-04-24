import React from 'react'
import { Navbar } from '../components'
import { useSelector } from 'react-redux'

const Cartpage = () => {

  const cartStorage = useSelector((state) => state.cart);
  return (
    <div className='w-full cartpage'>
      <Navbar />
      <div className="w-full cartView px-6 py-8 flex gap-6 items-center flex-col md:flex-row md:items-start">
        <div className="itemView w-full md:w-[49%] max-w-[540px] flex flex-col gap-4">
          {
            cartStorage.map((cartItem) => {
              return <div className="item px-6 bg-white rounded-md shadow-md md:shadow-lg xl:shadow-xl py-4 flex flex-col gap-4">
                <div className="item-details flex gap-3 md:gap-8 justify-between flex-col md:flex-row md:justify-start items-center">
                  <div className="item-image object-contain w-40 md:32 aspect-[1/1.2] overflow-hidden flex justify-center items-center">
                    <img src={cartItem.thumbnail} alt="" className='object-cover' />
                  </div>
                  <div className="details flex flex-col gap-3">
                    <div className="item-title flex justify-center w-full text-lg font-medium gap-8 items-center">
                      <p className="rating">{cartItem.rating}⭐</p>
                      <p className="text">{cartItem.title}</p>
                    </div>
                    <div className="item-title w-full">
                      <p className="text">{cartItem.description}</p>
                    </div>
                    <div className="price-box flex justify-betweem items-center gap-5">
                      <div className="item-price font-semibold text-2xl">
                        <p className="text">${cartItem.price}</p>
                      </div>
                      <div className="item-discount text-sm">
                        <p className="text">{cartItem.discountPercentage}% discount</p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            })
          }
        </div>
        <div className="item-details w-full md:w-fit bg-red-600 md:flex-auto h-72 flex flex-col md:flex-row md:justify-center items-center">
              </div>
      </div>
    </div>
  )
}

export default Cartpage
