import React from "react";
import { about } from "../data/data";
import ceo from '../images/ceo.jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Common/Banner";
AOS.init();

const About = () => {
  return (
    <>
    <Banner />
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
      <h1 className="sm:text-5xl text-5xl font-medium title-font text-center text-red-700 mb10">About Us</h1>
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10 ">
            {about.map((items)=>(
            <>
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8 bg-red-200">
            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <circle cx="12" cy="7" r="4">
                  {/* <img src={ceo}/> */}
                </circle>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Phoebe Caulfield</h2>
              <div className="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
              <p className="text-base text-black">{items.para1}</p>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-red-700 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4 text-black font-normal">{items.para2}</p>
          </div>
            </>
            ))}

          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;