// import React from 'react'

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";


const Appointment = () => {

  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];



  const [docInfo, setDocInfo] = useState(null);
  const [docSlot, setDocSlot] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setslotTime] = useState('');






  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    // console.log(docInfo);

  }
  const getAvailableSlot = async () => {
    setDocSlot([])

    //date

    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate()+i)

      let endDate = new Date();
      endDate.setDate(today.getDate()+i);
      endDate.setHours(21,0,0,0);

      //
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10? currentDate.getHours() + 1: 10);
        currentDate.setMinutes(currentDate.getMinutes()> 30 ? 30:0)

      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlot = [];
      while (currentDate < endDate) {
        let formattedTime = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
       
        timeSlot.push({
          dateTime: new Date(currentDate),
          time: formattedTime
        })
        
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      };

      setDocSlot(prev => ([...prev, timeSlot]))
    }
  };
  // 
  useEffect(() => {
  fetchDocInfo();

  },[doctors,docId]);
  
  useEffect(() => {
    getAvailableSlot();
  
    }, [docInfo]);

    useEffect(() => {
      console.log(docSlot);
    
      }, [docSlot]);


  return docInfo && (
    <div>

      {/*_____________Doctor's  detail________________ */}
      <div  className="flex flex-col gap-4 sm:flex-row">
        <div>
          <img className="w-full rounded bg-primary sm:mrounded-lg" src={docInfo.image} />
        </div>
        {/*_____________Doctor's info: experience , name and...________________ */}
        <div className="flex-1 p-8 py-12 mx-2 border border-gray-400 rounded-xl mt-[-80px] bg-white sm:mt-0 sm:mx-0">
          <p className="flex items-center gap-2 font-medium text-gray-900 fontext-2xl">{docInfo.name} <img className="w-5" src={assets.verified_icon} /></p>
          <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
            <p>{docInfo.degree}-{docInfo.speciality}</p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
          </div>
          <div>
            <p className="flex items-center gap-1 mt-3 text-sm font-medium text-gray-900">About<img src={assets.info_icon}/></p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
          </div>
          <div className="mt-4 font-medium text-gray-500">
            <p>Apppointment Fee: <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span></p>
          </div>
        </div>
      </div>
      {/* --BOOK SLOT----- */}
      <div className="mt-4 sm:ml-96 sm:pl-4 font-medium text-gray-700">
        <p>Booking Slots</p>
        <div className="flex items-center mt-4 gap-3 w-full overflow-x-scroll">
          {
            docSlot.length && docSlot.map((items, index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                <p>{items[0] && daysOfWeek[items[0].dateTime.getDay()]}</p>
                <p>{items[0] && items[0].dateTime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className="flex items-center mt-4 gap-3 w-full overflow-x-scroll">
          {
            docSlot.length && docSlot[slotIndex].map((item, index)=>(
                <p onClick={()=>setslotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>{item.time.toLowerCase()}</p>
             
            ))
          }
      </div>
      <button className="bg-primary text-white text-sm font-light px-14 py-3 my-6 rounded-full">Book An Appointment</button>
      </div>
      {/* ======Listing the related doctors========= */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointment