import React from 'react'
import '../App.css'

const MainBanner = () => {
  return (
    <div className='mainBanner   h-[400px] w-full lg:h-screen relative'>
        <img src='assets/banner.png' className='bannerImg w-full h-full brightness-75 z-10'/>
        <div className='absolute top-1/3 lg:top-2/4 ml-10 lg:ml-20 lg:bottom-0 text-white z-30 flex flex-col '>
            <span className='text-3xl lg:text-5xl font-bold tracking-wider'>M&M INTERNATIONAL</span>
            <span className='mt-5 text-base lg:text-lg tracking-widest max-w-3xl'>IMPORTERS, EXPORTERS, LOGISTICS GLOBAL SUPPLY CHAIN SOLUTIONS & GEM DEALERS</span>
            <button className='w-1/3 p-3 border-2 border-white mt-4 hover:bg-white hover:border-black hover:text-black transition-all ease-in-out duration-500 hover:font-semibold'>CONTACT US</button>
        </div>
    </div>
  )
}

export default MainBanner