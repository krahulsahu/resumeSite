import React from 'react'

const Education = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold border-b pb-2">Education</h2>
      <div className='py-3'>
        <div className=" flex justify-between">
          <p className="font-bold">
            Netaji Subhash Engineering College, Kolkata (2022 - 2025)
          </p>
          <p className="">CGPA: 7.59</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold mt-2">
            Government Polytechnic College, Muzaffarpur (2019 - 2022)
          </p>
          <p>CGPA: 8.04</p>
        </div>
      </div>
    </div>
  );
}

export default Education
