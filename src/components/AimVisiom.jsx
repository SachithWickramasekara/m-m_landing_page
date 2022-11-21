import React from 'react'
import { AimVision } from '../data/data'
const AimVisiom = () => {
  return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="3000">
            <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-wrap bg-[#F2D1D3] mx-[8%]">
                    {AimVision.map((data)=>(
                        <div className="p-12 md:w-1/2 flex flex-col items-center sm:border-[5px] border-[2px]  border-[#BC1823]">
                        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4 ">{data.title}</h2>
                        <p className="leading-relaxed mb-8">{data.text}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default AimVisiom