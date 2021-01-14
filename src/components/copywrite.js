import React from 'react'

export default function Copywrite() {
  return (
    <div>
      <div className='w-auto h-12 flex justify-center items-center rounded-b-full bg-blue-400'>
        <h1 className='font-Poppins text-xs'>Copywrite <span dangerouslySetInnerHTML={{ "__html": "&copy;" }}/> 2020.Your company name.All rights reserverd</h1>
      </div>
    </div>
  )
}
