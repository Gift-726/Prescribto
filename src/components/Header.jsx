// import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* Left Side Section */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appointment <br/>With Trusted Doctors</p>
            <div className='flex flex-col md:flex-row gap-3 text-white items-center text-sm font-light'>
                <img className='w-28' src={assets.group_profiles}/>
                <p>Simply browse through our extensive list of trusted Doctors, <br className='hidden sm:block'/> schedule your appointment hassle-free</p>
            </div>
            <a href='#speciality' className='flex item rounded-full m-auto gap-2 bg-white px-8 py-3 text-gray-600 md:m-0 hover:scale-105 transition-all duration-300'>Book Appointment <img className='w-3' src={assets.arrow_icon}/></a>
        </div>
        {/* Right Side Section */}
        <div className='md:w-1/2 relative'>
            <img className='w-full rounded-lg md:absolute bottom-0 h-auto' src={assets.header_img}/>
        </div>
    </div>
  )
}

export default Header