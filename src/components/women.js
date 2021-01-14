import React from 'react'
import womenimg1 from '../assets/womenimg1.png'
import womenimg2 from '../assets/womenimg2.png'
import womenimg3 from '../assets/womenimg3.png'
import womenimg4 from '../assets/womenimg4.png'
const Women = () => {
  return (
    <div className='min-h-screen w-screen flex flex-col justify-center'>
      <div className='flex flex-col items-center mt-12'>
        <h1 className='font-Poppins font-sm font-semibold'>WOMEN'S FASHION</h1>
        <p className='font-Poppins'>Shop our new arrivals from established brands</p>
      </div>
      <div className='min-h-screen w-auto flex flex-col lg:flex-row mt-12 md:p-8 lg:p-20'>
        <div className='px-2'>
          <img src={womenimg1} alt='' className='w-screen h-1/2' />
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
          <img src={womenimg2} alt='' className='w-screen h-1/2' />
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
          <img src={womenimg3} alt='' className='w-screen h-1/2' />
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
          <img src={womenimg4} alt='' className='w-screen h-1/2' />
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
export default Women
