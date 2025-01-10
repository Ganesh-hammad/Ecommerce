import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets, products } from '../assets/frontend_assets/assets'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  // Toggle category filter
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Toggle subcategory filter
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };
  const applyFilter = () => {
    let productCopy = products.slice()
    if(category.length > 0){
    productCopy = productCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length > 0){
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory));
      }
    setFilterProducts(productCopy);
  }
  const sortProduct = () =>{
    const fpProduct = filterProducts.slice();
    switch(sortType){
      case 'low-high': setFilterProducts(fpProduct.sort((a, b)=>(a.price - b.price)));
      break;
      case 'high-low': setFilterProducts(fpProduct.sort((a, b)=>(b.price - a.price)));
      break;
      default: applyFilter();
      break;
    }
    
  }
  useEffect(() => {
    setFilterProducts(products);
  }, []);
  useEffect(() => {
    applyFilter();
  },[category, subCategory, products]);
  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter operations */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-0' : 'rotate-90'}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? 'hidden' : ''}`}>
          <p className="mb-3 text-sm font-medium ">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input onChange={toggleCategory} className='w-3' type="checkbox" value={'Men'} />Men
            </p>
            <p className="flex gap-2">
              <input onChange={toggleCategory} className='w-3' type="checkbox" value={'Women'} />Women
            </p>
            <p className="flex gap-2">
              <input onChange={toggleCategory} className='w-3' type="checkbox" value={'Kids'} />Kids
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? 'hidden' : ''
            }`}
        >
          <p className="mb-3 text-sm font-medium ">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input onChange={toggleSubCategory} className='w-3' type="checkbox" value={'Topwear'} />Topwear
            </p>
            <p className="flex gap-2">
              <input onChange={toggleSubCategory} className='w-3' type="checkbox" value={'Bottomwear'} />Bottomwear
            </p>
            <p className="flex gap-2">
              <input onChange={toggleSubCategory} className='w-3' type="checkbox" value={'Winterwear'} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* product short */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* map products */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {filterProducts.map((item, index) => {
            return <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Collection