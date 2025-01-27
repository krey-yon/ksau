import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function PageOne() {
  return (
    <div className="flex flex-col md:flex-row justify-between h-screen bg-radial-gradient items-center gap-4 md:gap-8 p-4 md:p-8 md:px-28">
      {/* for text */}
      <div>
        <h1 className="text-2xl font-extrabold mb-6 md:text-6xl">Unleash the Power of <br />  <span className='text-green-500'>ksau</span></h1>
          <p className="text-lg text-gray-400">Lightning-fast file uploads for everyone, anywhere, anytime.{' '}
          </p>
          <div className='mt-6 gap-4 flex '>
            <button className='bg-green-500 p-2 rounded-md text-base text-black '>Get started <IoIosArrowForward className='inline-flex gap-2' /> </button>
            <button className='bg-transparent border rounded-md p-2 text-base border-green-500 text-green-500'>Learn More</button>
          </div>
      </div>
      {/* for image */}
      <div>
        <img src="/hero-image.png" alt="logo" />
      </div>
    </div>
  )
}

export default PageOne