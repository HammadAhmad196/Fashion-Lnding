import React from 'react'
import avon1 from '../assets/avon1.png'
import avon2 from '../assets/avon2.png'
import avon3 from '../assets/avon3.png'
const Avon = () => {
  return (
    <div className='min-h-screen w-screen flex flex-col justify-center '>
      <div className='flex flex-col items-center mt-8'>
        <h1 className='font-Poppins font-sm font-semibold'>AVON STYLE'S</h1>
        <p className='font-Poppins'>Choose your favourite color</p>
      </div>
      <div className='min-h-screen w-auto flex mt-8 md:p-8 lg:p-20'>
        <div>
          <img src={avon1} alt='' className='w-full mt-12 h-1/2 p-2' />
        </div>
        <div className='flex flex-col items-end'>
          <img src={avon2} alt='' className='w-full mt-2 h-1/2 p-2'/>
          <img src={avon3} alt='' className='w-1/2 -mt-16 border-t-8 border-white border-l-8'/>
          <h1 className='text-xs font-Poppins border border-b border'>SHOW WOMEN'S DRESS</h1>
        </div>
      </div>
    </div>
  )
}
export default Avon
