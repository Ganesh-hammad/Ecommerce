import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/frontend_assets/assets';


const About = () => {
  return (
    <>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full max-w-[450px] " />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae repellat corrupti illum similique facilis porro?</p>
        <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae repellat corrupti illum similique facilis porro?</p>
        <b className='text-gray-700 ' >Our Mission</b>
        <p></p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minus culpa maiores officia iusto explicabo tempore officiis eaque cupiditate consequuntur.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minus culpa maiores officia iusto explicabo tempore officiis eaque cupiditate consequuntur.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est minus culpa maiores officia iusto explicabo tempore officiis eaque cupiditate consequuntur.</p>
        </div>
      </div>
      <NewsletterBox/>
    </>

  )
}

export default About