// import React from 'react'

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";

const Doctors = () => {

  const [filterDoc, setFilterDoc] = useState([ ])
  const {speciality} = useParams();
  console.log(speciality);
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false)
  const {doctors} = useContext(AppContext)
  const applyFilter = () =>{

    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  
  }  
  useEffect(() => {
    applyFilter()
  
  }, [doctors, speciality])


  return (
    <div>
      <p className="text-gray-600">Browse through the doctor specialist.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button className={`py-1 px-3 rounded border text-sm sm:hidden transition-all ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filter</button>
        <div className={`flex flex-col text-sm gap-4 text-gray-700 ${showFilter ? 'flex' : 'hidden'}`}>
           <p onClick={()=>{speciality === 'General physician' ? navigate('/doctors'): navigate('/doctors/General physician')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-300 cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}>General physician</p>
           <p onClick={()=>{speciality === 'Gynecologist' ? navigate('/doctors'): navigate('/doctors/Gynecologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-300 cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}>Gynecologist</p>
           <p onClick={()=>{speciality === 'Dermatologist' ? navigate('/doctors'): navigate('/doctors/Dermatologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-300 cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}>Dermatologist</p>
           <p onClick={()=>{speciality === 'Pediatricians' ? navigate('/doctors'): navigate('/doctors/Pediatricians')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-300 cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}>Pediatricians</p>
           <p onClick={()=>{speciality === 'Neurologist' ? navigate('/doctors'): navigate('/doctors/Neurologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-300 cursor-pointer ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}>Neurologist</p>
           <p onClick={()=>{speciality === 'Gastroenterologist' ? navigate('/doctors'): navigate('/doctors/Gastroenterologist')}} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all duration-300 cursor-pointer ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}>Gastroenterologist</p> 
     </div>
        <div className='grid w-full gap-4 grid-cols-auto gap-y-6 '>
            {
              filterDoc.map((item, index) => (
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-lg cursor-pointer overflow-hidden hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt={`${item.name} `} />
                    <div className='p-3'>
                        <div className='flex items-center gap-2 text-sm text-center'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                        </div>
                        <p className='text-lg font-medium text-gray-700'>{item.name}</p>
                        <p className='text-sm text-gray-600'>{item.speciality}</p>
                    </div>
                </div>
            ))
            }
        </div>
      </div>
    </div>
  )
}

export default Doctors