import { useState } from "react";
import {  itemHeadingProducts,
    category1Data,
    category2Data,
    category3Data,
    category4Data,} from '../data/services'

const Services_ = () => {
  const [current, setCuurent] = useState("Option 1");
  return (
    <div className="flex flex-col p-24 items-center px-3">
      <span className="text-6xl font-semibold text-[#ab1616]">Our Services</span>
      <div className="flex justify-center mt-12 w-full md:w-1/2">
        {itemHeadingProducts.map((item) => {
          return (
            <div className="flex flex-col justify-center items-center flex-1">
              <div
                className="flex items-center justify-center cursor-pointer"
                onClick={() => setCuurent(item.heading)}
              >
                <div
                  className={`${
                    current === item.heading ? "bg-[#ab1616]" : "bg-[#3E3E3E]"
                  } w-2 h-2 md:w-4 md:h-4 rounded-full mx-2`}
                ></div>
                <span
                  className={`${
                    current === item.heading
                      ? "text-[#ab1616]"
                      : "text-[#3E3E3E]"
                  } text-[16px] cursor-pointer`}
                >
                  {item.heading}
                </span>
              </div>
              <div
                className={`${
                  current === item.heading ? "bg-[#ab1616]" : "bg-[#3E3E3E]"
                } w-full h-[2px] bg-[#1287AF] mt-7`}
              ></div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className={`${current === "Option 1" ? "flex" : "hidden"} flex-wrap md:w-2/3 mt-10 items-center justify-center`}>
          {category1Data.map((item) => {
            return (
                <section class="text-gray-600 body-font">
                    <div class="container px-5  mx-auto flex flex-wrap flex-col">
                        <img class="xl:w-[40%] lg:w-2/3 md:w-full w-full block mx-auto mb-10 object-cover object-center rounded" alt="hero" src={item.img}/>
                        <div class="flex flex-col text-center w-full">
                        <h1 class="text-[32px] font-bold title-font mb-4 text-gray-900">{item.title}</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{item.desc}</p>
                        </div>
                    </div>
                </section>
            );
          })}
        </div>

        <div className={`${current === "Option 2" ? "flex" : "hidden"} flex-wrap md:w-2/3 mt-10 items-center justify-center`}>
          {category2Data.map((item) => {
            return (
              <section class="text-gray-600 body-font">
              <div class="container px-5  mx-auto flex flex-wrap flex-col">
                  <img class="xl:w-[40%] lg:w-2/3 md:w-full w-full block mx-auto mb-10 object-cover object-center rounded" alt="hero" src={item.img}/>
                  <div class="flex flex-col text-center w-full">
                  <h1 class="text-[32px] font-bold title-font mb-4 text-gray-900">{item.title}</h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{item.desc}</p>
                  </div>
              </div>
          </section>
            );
          })}
        </div>

        <div className={`${current === "Option 3" ? "flex" : "hidden"} flex-wrap md:w-2/3 mt-10 items-center justify-center`}>
          {category3Data.map((item) => {
            return (
              <section class="text-gray-600 body-font">
              <div class="container px-5  mx-auto flex flex-wrap flex-col">
                  <img class="xl:w-[40%] lg:w-2/3 md:w-full w-full block mx-auto mb-10 object-cover object-center rounded" alt="hero" src={item.img}/>
                  <div class="flex flex-col text-center w-full">
                  <h1 class="text-[32px] font-bold title-font mb-4 text-gray-900">{item.title}</h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{item.desc}</p>
                  </div>
              </div>
          </section>
            );
          })}
        </div>

        <div className={`${current === "Option 4" ? "flex" : "hidden"} flex-wrap md:w-2/3 mt-10 items-center justify-center`}>
          {category4Data.map((item) => {
            return (
              <section class="text-gray-600 body-font">
              <div class="container px-5  mx-auto flex flex-wrap flex-col">
                  <img class="xl:w-[40%] lg:w-2/3 md:w-full w-full block mx-auto mb-10 object-cover object-center rounded" alt="hero" src={item.img}/>
                  <div class="flex flex-col text-center w-full">
                  <h1 class="text-[32px] font-bold title-font mb-4 text-gray-900">{item.title}</h1>
                  <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{item.desc}</p>
                  </div>
              </div>
          </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services_;