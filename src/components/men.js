import React from 'react'
import men1 from '../assets/men1.png'
import men2 from '../assets/men2.png'
import men3 from '../assets/men3.png'
import men4 from '../assets/men4.png'
const Men = () => {
  return (
    <div className='min-h-screen w-screen flex flex-col justify-center'>
      <div className='flex flex-col items-center mt-12'>
        <h1 className='font-Poppins font-sm font-semibold'>MEN'S FASHION</h1>
        <p className='font-Poppins'>Shop our new arrivals from established brands</p>
      </div>
      <div className='min-h-screen w-auto flex flex-col mt-12 md:p-8 lg:p-20 lg:flex-row'>
        <div className='px-2'>
          <img src={men1} alt='' className='w-full h-1/2'/>
          <h1 className='font-Poppins mt-4'>IGURE</h1>
          <p className='font-Poppins font-medium text-sm'>GREEN MUSCLE FIT POLO SHIRT</p>
          <div>
            <span className='flex'> 
              <p className='flex line-through'>$229.00 </p>
              <p className='text-red-700 mx-4'>$129.00</p>
            </span>
          </div>
        </div>
        <div className='px-2'>
          <img src={men2} alt='' className='w-full h-1/2'/>
          <h1 className='font-Poppins mt-4'>IGURE</h1>
          <p className='font-Poppins font-medium text-sm'>GREEN MUSCLE FIT POLO SHIRT</p>
          <div>
            <span className='flex'> 
              <p className='flex line-through'>$229.00 </p>
              <p className='text-red-700 mx-4'>$129.00</p>
            </span>
          </div>
        </div>
        <div className='px-2'>
          <img src={men3} alt='' className='w-full h-1/2'/>
          <h1 className='font-Poppins mt-4'>IGURE</h1>
          <p className='font-Poppins font-medium text-sm'>GREEN MUSCLE FIT POLO SHIRT</p>
          <div>
            <span className='flex'> 
              <p className='flex line-through'>$229.00 </p>
              <p className='text-red-700 mx-4'>$129.00</p>
            </span>
          </div>
        </div>
        <div className='px-2'>
          <img src={men4} alt='' className='w-full h-1/2'/>
          <h1 className='font-Poppins mt-4'>IGURE</h1>
          <p className='font-Poppins font-medium text-sm'>GREEN MUSCLE FIT POLO SHIRT</p>
          <div>
            <span className='flex'> 
              <p className='flex line-through'>$229.00 </p>
              <p className='text-red-700 mx-4'>$129.00</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Men
