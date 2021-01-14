import React from 'react'
import bgimage from '../assets/bgimage.png'
import Maskgroup from '../assets/Maskgroup.png'
import Maskgroup1 from '../assets/Maskgroup1.png'
import Maskgroup2 from '../assets/Maskgroup2.png'

const HomePage = () => {
  return (
    <div className='min-h-screen w-screen flex flex-col'>
      <div className='relative'>
        <img src={bgimage} alt='' className='w-screen'/>
      </div>
      <div className='flex flex-col justify-end absolute md:self-end md:px-56 md:py-32 lg:self-end lg:mt-48'>
        <h1 className='font-Poppins text-sm'>NEW TREND</h1>
        <h1 className='font-bold font-Poppins text-4xl'>COLLISION</h1>
        <p className='font-Poppins'>An exclusive selection of this season's trends.</p>
        <div>
          <span>
            <button className='font-Poppins border-solid border-gray-800 bg-black text-white text-base mr-16 px-4'>DISCOVER</button>
            <button className='font-Poppins border-solid border-gray-800 bg-black text-white text-base px-4'>SHOP NOW</button>
          </span>
        </div>
      </div>
      <div className='min-h-screen w-screen flex flex-col md:px-12 lg:flex-row-reverse'>
        <div>
          <img src={Maskgroup} alt='' className='w-screen mt-4' />
        </div>
        <div>
          <img src={Maskgroup1} alt='' className='w-screen mt-4' />
          <img src={Maskgroup2} alt='' className='w-screen mt-4' />
        </div>
      </div>
    </div>
  )
}
export default HomePage
