import React,{useRef} from "react";
import Banner from "../components/Common/Banner";
import emailjs from '@emailjs/browser';

const Contactus = () => {
  // const <form a"></form>
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_780qk6k',
      'template_qmp02ps', 
       form.current, 
       '4j0maiMyhZwhI-qcd')
      .then(
        (result) => {
          console.log(result.text);
      },
       (error) => {
          console.log(error.text);
      }
      );
      e.target.reset()
  };
  return (
    <section className="text-[#0d5c63] body-font relative bg-[#e8ebe4]">
      <Banner />
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-[#e8ebe4] rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            className="absolute inset-0"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1980.2930971656933!2d79.86345085588947!3d6.939957159256437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ae25902941f442d%3A0x2b4d85ba4403e9e4!2sCamway%20Plaza%2C%20214%20Sri%20Sumanatissa%20Mawatha%2C%20Colombo%2001000!3m2!1d6.939957!2d79.8649075!5e0!3m2!1sen!2slk!4v1669034107578!5m2!1sen!2slk"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />

          <div className="bg-[#e8ebe4] relative flex flex-wrap py-6 rounded shadow-md text-[#0d5c63]">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">214/3/2/23,<br/>Camway plaza,<br/>Srimath Bandaranayaka mawatha,Colombo 12.</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className=" leading-relaxed">MnM.intrn@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+94 75 777 7472                                                                    </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-[#e8ebe4] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-[#BC1823] text-3xl mb-1 font-medium title-font">
            Contact Us
          </h2>
         <form ref={form} onSubmit={sendEmail}> 
         <div className="relative mb-4">
            <label for="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Full Name"
              name="user_name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></input>
          </div>
          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></input>
          </div>
          <div className="relative mb-4">
          <label for="subject" className="leading-7 text-sm text-gray-600">
            Subject
          </label>
          <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></input>
          </div>
          <div className="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-[#BC1823] border-0 py-2 px-6 focus:outline-none hover:bg-[#f17b83] rounded text-lg"
          type="submit">
            Submit
          </button>
         </form>
        </div>
      </div>
    </section>
  );
};

export default Contactus;