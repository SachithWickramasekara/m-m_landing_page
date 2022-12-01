import React from 'react'
import serv1 from '../images/serv1.jpg'
import serv2 from '../images/serv2.jpg'
import serv3 from '../images/serv3.jpg'
import serv4 from '../images/serv4.jpg'

export const service_r = [
    {
      img:serv1,
      title:"Export Facilities",
      desc: "We at M & M international have built a reputation for exporting high quality, organically certified natural spices across the World. Throughout our journey, we have created a loyal clientele for our products across Dubai, India, Mauritius, kuwait if name a few. This has elevated us to become one of the leading Spices exporters in Sri Lanka."
    },
    {
        img:serv3,
        title:"Gem Dealing",
        desc: "We guarantee that our customers will receive a huge range of premium gemstones and top-notch service at M & M International in Colombo, Sri Lanka. We do this by having understanding of the industry and by treating one another with respect and trust."
    },
    {
      img:serv2,
      title:"Import Dealing",
      desc: "Importing in to the company requires specialist knowledge and some instances connections with relevant authorities and service providers.Our import service bring in Machinery, Fabrics, electrical items and raw materials. Some of them may consider to import a product of our customer's choice through our operation"
    },
    {
      img:serv4,
      title:"Custom House Agent" ,
      desc: "We are an experienced Custom House Agents who engaged in Clearing and Forwarding, Freight Forwarding, Import and Export Consultation, Providing Domestic Cargo Transportation and Hiring all kind of HeavyMachinates. We are specialized in importing, clearing and delivering of all type of cargo including vehicle and general cargo."
    }
    
  ]

const services = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
             {service_r.map((item=>(
              <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                 <img class="object-cover object-center rounded" alt="hero" src={item.img}/>
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                 <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{item.title}</h1>
                 <p class="mb-8 leading-relaxed">{item.desc}</p>
              </div>
           </div>
             )))}
        </section>
    </div>
  )
}

export default services