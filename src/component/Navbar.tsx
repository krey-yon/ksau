import React from 'react'
import { MdOutlineFileUpload } from "react-icons/md";

function Navbar() {
  return (
    <div className="hidden sm:block fixed top-0 left-1/2 bg-black z-50 border text-gray-400 px-8  py-1 mt-4 shadow-lg pointer-events-auto rounded-full h-10 border-green-500 transform -translate-x-1/2">
        <nav className='flex flex-row gap-6 justify-center items-center'>
            <div className='flex flex-row text-2xl font-extrabold text-green-500'> <MdOutlineFileUpload className='inline-flex translate-y-1' /> ksau</div>
            <div className='flex gap-5'>
            <div className='rounded-xl bg-green-300/50 px-2 text-green-300'>Home</div>
            <div>About</div>
            <div>Features</div>
            <div>Download</div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar