import React from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/frontend_assets/assets';


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full max-w-[450px] " />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="">Welcome to FOREVER, your one-stop destination for fashion. Founded with a passion for quality and a commitment to excellence, we aim to redefine your online shopping experience by offering a wide range of premium products at competitive prices</p>
          <p className="">At FOREVER, we believe shopping should be simple, convenient, and enjoyable. Our team works tirelessly to curate a collection of products that cater to your needs, combining innovation with affordability. From the latest trends to timeless essentials, we ensure every item is carefully selected and meets the highest standards of quality.</p>
          <b className='text-gray-700 ' >Our Mission</b>
          <p>To become your favorite online shopping destination by offering unparalleled quality, convenience, and value. We aim to create a seamless shopping journey that keeps you coming back for more.

            Thank you for choosing FOREVER. We’re here to make your life easier, one order at a time.

          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Quality Assurance:</b>
          <p className='text-gray-600'> Quality is at the heart of everything we do. We believe that delivering exceptional products is the key to earning your trust and loyalty</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Convenience:</b>
          <p className='text-gray-600'>We partner with trusted suppliers and manufacturers to deliver products you can rely on.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Exceptional Customer Service:</b>
          <p className='text-gray-600'>With competitive pricing and frequent discounts, we make premium products accessible to all.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>

  )
}

export default About