import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Common/Banner";
AOS.init();

const About = () => {
  return (
    <>
    <Banner />
      <section
        className=" body-font"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h1 className="text-4xl font-bold inline border-b-4 border-red-700 mb-8">
              About Us
            </h1>
            <p
              className="text-black my-8"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              We are one of the leading logistic company in Sri Lanka, providing
              smooth and easy Import, Export & customs clearance for all our
              customers, with reliable, efficient & Prompt service. We help ease
              import & export regulations and paperwork in record time for all
              of your shipments. Handling all the trade compliance and
              procedures, we help clear consignments by sea, land and air more
              efficiently understanding local rules.
              <br />
              <br />
              Additionally, we work hard to create a special platform that will
              give gem dealers, collectors, and end users worldwide direct
              access to the finest Ceylon gemstones in accordance with their
              unique needs, thereby matching demand with the appropriate supply
              at the appropriate moment.
            </p>
            <span className="inline-block h-1 w-10 rounded bg-red-700 mt-8 mb-6"></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;