// import React from 'react'

import { assets } from "../assets/assets_frontend/assets"

const Contact = () => {
  return (
    <div>
        <div className="text-center text-2xl pt-10 text-gray-500">
          <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
        </div>
        <div className="flex flex-col justify-center md:flex-row gap-10 my-10 mb-28 text-sm">
          <img className="w-full max-w-[360px]" src={assets.contact_image} alt="Contact Iamge"/>
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="font-semibold text-lg text-gray-600">Our Office</p>
            <p className="text-gray-500">No 8, Ogomudia building,<br/> Obanla, FUTA, Akure, Ondo State. Nigeria</p>
            <p className="text-gray-500">Tel: +234 810 313 5256<br/>Email: ayanogift@gmail.com</p>
            <p className="font-semibold text-lg text-gray-600">Career at Prescripto</p>
            <p className="text-gray-500">Lorem ipsum dolor sit amet elit</p>
            <button className="bg-transparent border border-gray-400 px-8 py-4 text-sm hover:bg-primary hover transition-all">Explore Jobs</button>
          </div>
        </div>
    
    
    </div>
  )
}

export default Contact