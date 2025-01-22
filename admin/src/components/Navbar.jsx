import React from 'react'
import {assets} from '../assets/assets.js'
const Navbar = ({setToken}) => {
  return (
    // <div className='fixed top-0 left-0z-50 w-full'>
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
        <button onClick={()=>setToken("")} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full'>Logout</button>
    </div>
    // </div>
  )
}

export default Navbar