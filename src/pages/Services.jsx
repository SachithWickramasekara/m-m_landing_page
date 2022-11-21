import React from "react";
import exportVideo from "../videos/export.mp4";
import importVideo from "../videos/import.mp4";
import gemVideo from "../videos/gem.MOV";
import agentVideo from "../videos/houseagent.mov";
import Banner from "../components/Common/Banner";
const Services = () => {
  return (
    <div>
      <Banner/>
      <section class="text-gray-600 body-font bg-red-100">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <video
              src={exportVideo}
              type="video/mp4"
              loop
              autoPlay
              muted
              className="object-cover object-center"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-7xl text-3xl mb-4 font-medium text-slate-900">
              {" "}
              Export facilities
            </h1>
            <p class="mb-8 leading-relaxed text-black">
              We at M & M international have built a reputation for exporting
              high quality, organically certified natural spices across the
              World. Throughout our journey, we have created a loyal clientele
              for our products across Dubai, India, Mauritius, kuwait if name a
              few. This has elevated us to become one of the leading Spices
              exporters in Sri Lanka.
            </p>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-7xl text-3xl mb-4 font-medium text-slate-900">
              Import facilities
            </h1>
            <p class="mb-8 leading-relaxed">
              Importing in to the company requires specialist knowledge and some
              instances connections with relevant authorities and service
              providers.Our import service bring in Machinery, Fabrics,
              electrical items and raw materials. Some of them may consider to
              import a product of our customer's choice through our operation
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <video
              src={importVideo}
              type="video/mp4"
              loop
              autoPlay
              muted
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font bg-red-100">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <video
              src={gemVideo}
              type="video/mp4"
              loop
              autoPlay
              muted
              className="object-cover object-center"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-7xl text-3xl mb-4 font-medium text-slate-900">
              {" "}
              Gem dealing
            </h1>
            <p class="mb-8 leading-relaxed text-black">
              We guarantee that our customers will receive a huge range of
              premium gemstones and top-notch service at M & M International in
              Colombo, Sri Lanka. We do this by having understanding of the
              industry and by treating one another with respect and trust.
            </p>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-7xl text-3xl mb-4 font-medium text-slate-900">
              Custom house agent
            </h1>
            <p class="mb-8 leading-relaxed">
              We are an experienced Custom House Agents who engaged in Clearing
              and Forwarding, Freight Forwarding, Import and Export
              Consultation, Providing Domestic Cargo Transportation and Hiring
              all kind of HeavyMachinates. We are specialized in importing,
              clearing and delivering of all type of cargo including vehicle and
              general cargo.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <video
              src={agentVideo}
              type="video/mp4"
              loop
              autoPlay
              muted
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;