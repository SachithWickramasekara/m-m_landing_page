import React from 'react'
import img1 from '../images/logo2.png'
import img2 from '../images/logo3.png'
import img3 from '../images/logo4.png'
import img4 from '../images/logo1.png'
const services = ({img ,title}) => {
  return (
    <div>
    <section className="text-gray-600 body-font mx-[8%] ">
    <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
            <h1 className=" text-[52px] font-medium title-font mb-2 text-black">Our Services</h1>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                    <div className=" px-4 py-6 rounded-[20px] bg-[#F2D1D3] hover:bg-[#d68f93]">
                        <img src={img1} alt='serv-logo' className='w-[134px] h-[94px] mb-3 inline-block'/>
                        <h2 className="title-font font-medium text-[20px] text-[#BC1823]  mb-5">Export</h2>
                    </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                    <div className=" px-4 py-6 rounded-[20px] bg-[#F2D1D3] hover:bg-[#d68f93]  ">
                        <img src={img2} alt='serv-logo' className='w-[124px] h-[94px] mb-3 inline-block'/>
                        <h2 className="title-font font-medium text-[20px] text-[#BC1823]  mb-5">Import</h2>    
                    </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer ">
                    <div className=" px-4 py-6 rounded-[20px] bg-[#F2D1D3] hover:bg-[#d68f93]   ">
                        <img src={img3} alt='serv-logo' className='w-[84px] h-[94px] mb-3 inline-block'/>
                        <h2 className="title-font font-medium text-[20px] text-[#BC1823]  mb-5">Gem Dealing</h2>
                        
                    </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                    <div className=" px-4 py-6 rounded-[20px] bg-[#F2D1D3] hover:bg-[#d68f93] ">
                        <img src={img4} alt='serv-logo' className='w-[124px] h-[94px] mb-3 inline-block'/>
                        <h2 className="title-font font-medium text-[20px] text-[#BC1823]  mb-5">Custom House Agent</h2>   
                    </div>
                </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default services