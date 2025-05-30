import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({speciality, docId}) => {


  const navigate = useNavigate();
  const {doctors} = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);

  useEffect(()=>{
      if (doctors.length > 0 && speciality) {
        const doctorData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
        setRelDoc(doctorData);
      }
  }, [doctors, speciality, docId])
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium' >Top Doctors to Book</h1>
        <p className='text-sm text-center sm:w-1/3 '>Simply browse through our extensive list of trusted doctors.</p>
        <div className='grid w-full gap-4 px-3 pt-8 grid-cols-auto gap-y-6 sm:px-0'>
            {
                relDoc.slice(0, 10).map((item, index) => (
                    <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-lg cursor-pointer overflow-hidden hover:translate-y-[-10px] transition-all duration-500' key={index}>
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
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 mt-10 rounded-full px-12 py-3 text-gray-600'>More</button>
    </div>
)

 
}

export default RelatedDoctors