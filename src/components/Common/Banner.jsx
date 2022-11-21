import React from 'react'

const Banner = ({heading}) => {
  return (
    <div className='flex items-center justify-center relative h-72 bg-emerald-400'>
      <img src='assets/banner.png' alt='banner image' className='brightness-50 w-full h-full object-cover'/>
      <span className='absolute text-white text-lg tracking-widest max-w-sm md:max-w-md text-center'>
        {heading}
      </span>
    </div>
  )
}

export default Banner