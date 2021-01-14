import React from 'react'
import footericons from '../assets/footericons.png'
const Footer = () => {
  return (
    <div className='flex flex-col-reverse justify-around bg-gray-200 md:flex-row md:px-16 md:justify-between lg:px-32'>
      <div className='my-16 md:my-32 mx-6 md:mx-0 md:w-1/2'>
        <h1 className='font-Poppins text-xl font-bold'>YOUR LOGO</h1>
        <br />
        <p className='font-Poppins text-xs break-words'>
         We earned a reputation of being good at we do.
         Let us take your online shop to new dimension in success. 
        </p>
        <br />
        <h1 className='font-Poppins text-sm'>Comila, Bangladesh 3500</h1>
        <h1 className='font-Poppins text-xs underline'>kawaserahmed0210@gmail.com</h1>
        <h1 className='font-Poppins text-xs'>01647470457</h1>
        <br />
        <img src={footericons} alt='' className='w-1/4 h-1/4'/>
      </div> 
      <div className='my-16 md:my-32 mx-6 md:mx-0 md:w-2/5'>
        <h1 className='font-Poppins text-xl font-bold'>RECEIVE EMAIL UPDATES</h1>
        <br />
        <div className='flex'>
        <input type='email' placeholder='Your Email Address' className='flex placeholder-gray-800 rounded text-xs px-4 py-2 w-full'/>
        </div>
        <div className='flex mt-8 justify-between'>
          <div>
            <h1 className='font-Poppins text-sm font-medium'>SHOP</h1>
            <br />
            <h1 className='font-Poppins text-xs'>Shop</h1>
            <br />
            <h1 className='font-Poppins text-xs'>Collection</h1>
            <br />
            <h1 className='font-Poppins text-xs'>Outlet</h1>
            <br />
            <h1 className='font-Poppins text-xs'>Lookbook</h1>
          </div>
          <div
            // className='ml-4 md:ml-0'
            className='flex md:block flex-col items-center'
          >
            <h1 className='font-Poppins text-sm font-medium text-center lg:text-left'>HELP</h1>
            <br />
            <h1 className='font-Poppins text-xs text-center lg:text-left'>FAQ</h1>
            <br />
            <h1 className='font-Poppins text-xs text-center lg:text-left'>Privacy policy</h1>
            <br />
            <h1 className='font-Poppins text-xs text-center lg:text-left'>Terms and Conditions</h1>
            <br />
            <h1 className='font-Poppins text-xs text-center lg:text-left'>Return and Exchanges</h1>
          </div>
          <div className=''>
            <h1 className='font-Poppins text-sm font-medium'>ABOUT</h1>
            <br />
            <h1 className='font-Poppins text-xs'>Journal</h1>
            <br />
            <h1 className='font-Poppins text-xs'>Our Story</h1>
            <br />
            <h1 className='font-Poppins text-xs'>Contact</h1>
            <br />
            <h1 className='font-Poppins text-xs'>Store Location</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer