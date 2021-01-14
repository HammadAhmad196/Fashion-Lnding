import React from 'react'
import tachenimg from '../assets/tachenimg.png'

const Tachen = () => {
  return (
    <div className='flex flex-col'>
      <div className='relative'>
        <img src={tachenimg} alt='' className='' />
      </div>
      <div className='absolute px-20 md:py-32 lg:py-48'>
        <h1 className='font-Poppins text-xs'>OWN THE DAY</h1>
        <h1 className='font-Poppins font-bold text-4xl'>TACHEN 19</h1>
        <button className='border bg-black text-white px-2'>SHOP COLLECTION</button>
      </div>
    </div>
  )
}
export default Tachen
