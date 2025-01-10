import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        <div className="">
          <img src={assets.logo} alt="" className="w-32 mb-5" />
          <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quos mollitia excepturi amet. Deleniti, unde?</p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className="">Home</li>
            <li className="">About us</li>
            <li className="">Delivery</li>
            <li className="">Privacy Policy</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className="">+91- 969-144-0772</li>
            <li className="">contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ forever.com - All Right reserved</p>
      </div>
    </>
  )
}

export default Footer