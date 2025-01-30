import React from 'react'
import image from '../../public/myphoto.jpg'
const Header = () => {
  return (
    <>
      <div className='flex items-center justify-center space-x-20'>
        <img
          src={image}
          alt="Rahul Kumar"
          className="w-28 h-28 rounded-full shadow-lg border-4 border-blue-500"
        />
        <h1 className="text-3xl font-bold">RAHUL KUMAR</h1>
      </div>
      <div className='mt-6 flex justify-center space-x-9'>
        <p>rahulkumarsahu8182@gmail.com</p>
        <p>+91 6203489355</p>
        <a href="https://github.com/krahulsahu" className="text-blue-500">
          GitHub
        </a>
        <a href="#" className="text-blue-500">
          LinkedIn
        </a>
      </div>
    </>
  );
}

export default Header
