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
      <div class="container px-5 py-24 mx-auto">
        <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          {about.map((items=>(
          <>
            <h2 class="text-red-900 font-medium title-font tracking-wider text-5xl">About Us</h2>
            <span class="inline-block h-1 w-32 rounded bg-red-500 mt-8 mb-6"></span>
            <p class="leading-relaxed text-lg">{items.para2}</p>
            </>
          )))}
        </div>
      </div>
    </section>
    <section class="bg-gray-300 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="object-cover object-center rounded" alt="hero" src={ceo}/>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-900">CEO's Note
          </h1>
          <p class="mb-8 leading-relaxed">
          --  We are a boutique logistics company with a focus on innovating captivating business experiences In order to produce commercial solutions, covering your needs with an inventive workforce.  --
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;