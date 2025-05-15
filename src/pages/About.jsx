// import React from 'react'

import { assets } from "../assets/assets_frontend/assets"

const About = () => {
  return (
    <div>
      <div className="text-2xl pt-10 text-center text-grey-500">
        <p>ABOUT <span className="text-grey-700 font-medium">US</span></p>
      </div>

      <div className="flex flex-col my-10 md:flex-row gap-12">
        <img className="w-full md:max-w-[360px] rounded-sm " src={assets.about_image} alt="About image" />
        <div className="flex flex-col gap-6 justify-center text-sm md:w-2/4 text-gray-600 ">
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>

      </div>
      <div className="text-xl my-4">
        <p>WHY <span className="font-semibold text-gray-700">CHOOSE US</span></p>
      </div>
      <div className="flex flex-col md:flex-row mb-20 ">
        <div className="border px-10 md:px-16 py-16 md:py-8 flex flex-col gap-4 text-[16px] hover:bg-primary  hover:text-white text-gray-500 cursor-pointer transition-all duration-300">
          <b>Efficiency:</b>
          <p>rybuuLorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eaque temporibus quisquam omnis corporis. Dignissimos doloremque repellendus nobis itaque accusamus?</p>
        </div>
        <div className="border px-10 md:px-16 py-16 md:py-8 flex flex-col gap-4 text-[16px] hover:bg-primary  hover:text-white text-gray-500 cursor-pointer transition-all duration-300">
          <b>Streamline:</b>
          <p>rybuuLorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eaque temporibus quisquam omnis corporis. Dignissimos doloremque repellendus nobis itaque accusamus?</p>
        </div>
        <div className="border px-10 md:px-16 py-16 md:py-8 flex flex-col gap-4 text-[15px] hover:bg-primary  hover:text-white text-gray-500 cursor-pointer transition-all duration-300">
          <b>Personalisation</b>
          <p>rybuuLorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eaque temporibus quisquam omnis corporis. Dignissimos doloremque repellendus nobis itaque accusamus?</p>
        </div>
      </div>
    </div>
  )
}

export default About