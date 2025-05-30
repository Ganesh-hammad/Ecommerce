import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandler = (event) =>{
    event.preventdefault();
  }
  return (
    <div className='text-center  '>
        <p className="text-2xl font-medium ">Subscribe now & get 20% off</p>
        <p className='text-gray-700 mt-3 '>Get 20% off right now, just for signing up!</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'> 
          <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter Your Email' required /> 
          <button type='submit' className="bg-black text-white text-xs px-10 py-4">
             Subscribe
          </button>
        </form>
    </div>
  )
}

export default NewsletterBox