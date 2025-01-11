import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname.includes("collection")){
            setVisible(true);
        }else{
            setVisible(false);

        }
    },[location])
  return showSearch && visible ? (
    <div className='border-t border-b text-gray-500 text-center bg-gray-50'>
        <div className="inline-flex justify-center items-center border border-gray-400 px-20 py-1 my-5 mx-3 rounded-full w-3/4 sm:1/2 ">
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search...' />
        <img src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='cursor-pointer w-3 inline' src={assets.cross_icon} alt="" />
    </div>
  ) : null;
}

export default SearchBar