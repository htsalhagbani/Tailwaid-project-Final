import React from 'react'
import Nav from './Nav'
import Featured from './Featured'
import Footer from "./Footer"
import MobileNav from "./MobileNav"
import DeskTopNav from "./DeskTopNav"
import Aboutimg from '../assets/about.jpg'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <div id="page">
    <div  className="bg-no-repeat bg-[url('../public/food-blogger-hero-bg-grad.svg')] bg-contain bg-[70vw]  ">
      <Nav />
      <DeskTopNav />

      <div className="mt-[4em] px-6  flex flex-col-reverse md:flex-row items-center justify-center relative  ">
          <div className="absolute inset-0  md:right-0 " />
          <div className="relative md:w-[33vw] p-6 z-10 md:pt-40  ">
          <div className="flex items-center my-4">
      </div>
              <h1 className=" text-2xl md:text-8xl font-bold text-gray-800 mb-10">
              Contact
              </h1>
             
              <p className="text-gray-600 mb-6 text-md md:text-2xl">
              Massa urna magnis dignissim id euismod porttitor vitae etiam viverra at adipiscing sit morbi aliquet mauris porttitor nisi, senectus pharetra, ac porttitor orci.
              </p>
             
              <div className="md:w-[30vw] mx-auto p-4 md:mt-12 flex flex-col items-start ">
            <div className="flex items-center  mb-4 md:mb-12">
                <FaMapMarkerAlt className="w-8 h-8 md:w-12 md:h-12 mr-2 md:mr-8  text-[#BE7C68]" />
                <div>
                    <h3 className="text-xl font-bold  text-[#BE7C68] md:text-3xl">Location</h3>
                    <p className="text-gray-600">123 Main St, City, Country</p>
                </div>
            </div>
            <div className="flex items-center mb-4 md:mb-12">
                <FaPhoneAlt className="w-8 h-8  md:w-12 md:h-12 mr-2 md:mr-8 text-[#BE7C68]" />
                <div>
                    <h3 className="text-xl md:text-3xl font-bold text-[#BE7C68]">Phone</h3>
                    <p className="text-gray-600">+1 (234) 567-8900</p>
                </div>
            </div>
            <div className="flex items-center mb-4 md:mb-12">
                <FaEnvelope className="w-8 h-8  md:w-12 md:h-12 mr-2 md:mr-8 text-[#BE7C68]" />
                <div>
                    <h3 className="text-xl md:text-3xl font-bold text-[#BE7C68]">Email</h3>
                    <p className="text-gray-600">example@example.com</p>
                </div>
            </div>
        </div>
          </div>
          <div className="md:w-[30vw] w-full p-8 z-10 bg-white shadow-lg rounded-md">
            <h2 className="text-2xl font-bold mb-6 text-center md:text-4xl">Let's Talk</h2>
            <form  className="space-y-4">
                <div>
                    <label className="block mb-1" htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block mb-1" htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        required
                        rows="4"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-[#be7c68] rounded-md hover:bg-white hover:text-[#be7c68] focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Send Message
                </button>
            </form>
          </div>
      </div>

    </div>
    <div id="content" className="site-content">
    
           <div className="flex max-w-full  py-0  lg:flex lg:flex-col ">
        <div className="w-full mx-0 my-[4em] p-0 lg:m-0 lg:px-0 lg:py-[1.5em] Smyubx" id="primary">
          <main className="block " id="main">
            <article id="post-17" className="post-17 page type-page status-publish ast-article-single">
              <header className=" mt-[4em] mb-[1.2em] mx-auto pl-0 pr-5 " />
              <div className=" after:table after:clear-both after:content-[''] ">
                <div className="mb-0 " data-elementor-id={17} data-elementor-type="wp-page">
                

               
                  <Featured></Featured>

                


                 
                 
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>


    </div>

    {/* footer section  */}
    <div className=" bg-[#be7c68] text-white">
      <div className="w-full h-[600px] flex items-center justify-center">
        <div className="text-center px-12  flex justify-center flex-col items-center">
          <h2 className="font-semibold text-3xl py-12 mb-5 md:text-7xl ">
            Invite me to your restaurant.
            <br />
            Get exposure of millions food lovers.
          </h2>
          <p className="text-[#f6ecea] md:w-[40vw] text-lg md:text-xl text-wrap mb-12">
            Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing integer amet eget blandit phasellus est natoque blandit facilisi eleifend.
          </p>
          <p
            className="text-[#BE7C68]  bg-white font-bold text-[15px] uppercase tracking-[2px] px-6 py-3 md:px-10 md:py-5 rounded-[3px] border border-white hover:text-white hover:bg-transparent"
          >
            Let's Talk
          </p>
        </div>
      </div>
    </div>
    <MobileNav />
    <Footer/>
  </div>
  )
}

export default Contact