// import React from 'react'
import { useContext } from 'react'
import {AppContext} from '../context/AppContext'

const MyAppointments = () => {

  const { doctors } = useContext(AppContext)
  return (
    <div>
      <p className='pb-3 mt-12 text-zinc-700 border-b font-medium'>My Appointment</p>
      <div>
        {
          doctors.slice(0,2).map((item, index)=>(
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
                <img className='bg-indigo-50 w-32' src={item.image} alt='Doctor"s image'/>
            </div>
            <div className='flex-1 text-sm text-zinc-500'>
                <p className='font-medium text-neutral-800'>{item.name}</p>
                <p> {item.speciality}</p>
                <p className='mt-1 font-medium text-zinc-700'>Address:</p>
                <p className='text-sm'>{item.address.line1}</p>
                <p className='text-sm'>{item.address.line2}</p>
                <p className='mt-1 text-sm'><span className='text-sm font-medium text-zinc-700'>Date & Time:</span> 9th May,2025 | 8:30PM</p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
              <p className='text-sm text-stone-600 text-center sm:min-w-48 py-2 border cursor-pointer hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</p>
              <p className='text-sm text-stone-600 text-center sm:min-w-48 py-2 border cursor-pointer hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</p>
            </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointments