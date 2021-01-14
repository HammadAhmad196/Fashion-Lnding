import React from 'react'
import YOURLOGO from '../assets/YOURLOGO.svg'
import search from '../assets/search.svg'
const Navigation = () => {
  return (
    <div className='max-h-screen w-screen bg-gray-200 flex flex-col justify-center md:flex-row md:rounded-t-full'>
      <div className='flex justify-center items-center'>
        <img src={YOURLOGO} alt='logo' />
      </div>
      <div className='flex flex-col items-center md:flex-row md:justify-between'>
        <nav className='flex flex-col items-center md:flex-row md:justify-between lg:mx-8'>
          <ul className='text-xs p-2'>HOME</ul>
          <ul className='text-xs p-2'>SHOP</ul>
          <ul className='text-xs p-2'>LOOKBOOK</ul>
          <ul className='text-xs p-2'>FEATURES</ul>
          <ul className='text-xs p-2'>PAGES</ul>
          <ul className='text-xs p-2'>BLOG</ul>
        </nav>
      </div>
      <div className='flex justify-center items-center'>
        <img src={search} alt=''/>
      </div>
    </div>
  )
}
export default Navigation