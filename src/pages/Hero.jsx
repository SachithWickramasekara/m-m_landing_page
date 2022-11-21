import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AimVisiom from "../components/AimVisiom";
import Services from "../components/services";
import Testimonials from "../components/Testimonials";
import MainBanner from "../components/MainBanner";

AOS.init();

const Hero = () => {
  return (
    <div>
      <MainBanner />
      <section
        className=" body-font"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container px-5 pt-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#BC1823] mb-8">
              Who We Are
            </h1>
            <p
              className="text-black mt-8"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              We are one of the leading logistic companies in Sri Lanka,
              providing smooth and easy Import, Export,Gem dealing & customs
              clearance for all our customers, with reliable, efficient & Prompt
              service.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-[#BC1823] mt-8 mb-6"></span>
          </div>
        </div>
      </section>
      <AimVisiom/>
      <Services />
      <Testimonials />
    </div>
  );
};

export default Hero;