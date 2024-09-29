import React from 'react'
import Nav from './Nav'
import Featured from './Featured'
import Footer from "./Footer"
import MobileNav from "./MobileNav"
import DeskTopNav from "./DeskTopNav"
import Aboutimg from '../assets/about.jpg'

import {  FaInstagram, FaWifi, FaYoutube } from 'react-icons/fa'


function About() {
  return (
    <>
    <div id="page">
      <div  className="bg-no-repeat bg-[url('../public/food-blogger-hero-bg-grad.svg')] bg-contain bg-[70vw]  ">
        <Nav />
        <DeskTopNav />

        <div className="mt-[4em] px-6  flex flex-col-reverse md:flex-row items-center justify-center relative  ">
            <div className="absolute inset-0  md:right-0 " />
            <div className="relative md:w-[33vw] p-6 z-10 md:pt-40  ">
            <div className="flex items-center my-4">
        </div>
                <h1 className=" text-2xl md:text-5xl font-bold text-gray-800 mb-10">
                    About Me
                </h1>
               
                <p className="text-gray-600 mb-6 text-md md:text-2xl">
                Diam urna ornare leo facilisis suspendisse eu rutrum id augue cursus tincidunt nisl eget ornare pharetra ac pharetra, pulvinar ipsum sed amet diam morbi amet cursus blandit augue feugiat arcu aliquet egestas id diam rhoncus, mollis arcu pharetra quis duis morbi a nunc diam mauris ut tortor.
                </p>
               
                <div className="flex mt-10  md:mt-[10vw] space-x-8 md:space-x-24">
                    <div className="text-center">
                        <FaYoutube className="text-[#be7c68] text-4xl md:text-5xl mx-auto mb-2" />
                        <h3 className="font-semibold text-lg text-[black] md:text-4xl">1.2M+</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider md:text-lg text-[gray]">Subscribers</p>
                    </div>
                    <div className="text-center">
                        <FaInstagram className="text-[#be7c68]  text-4xl md:text-5xl mx-auto mb-2" />
                        <h3 className="font-semibold text-lg  text-[black] md:text-4xl">1.8M+</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider md:text-lg text-[gray]">Followers</p>
                    </div>
                    <div className="text-center">
                        <FaWifi className="text-[#be7c68]  text-4xl md:text-5xl mx-auto mb-2" />
                        <h3 className="font-semibold text-lg text-[black] md:text-4xl">800K+</h3>
                        <p className="text-xs font-semibold uppercase tracking-wider  md:text-lg text-[gray]">Readers</p>
                    </div>
                </div>
            </div>
            <div className="md:w-[40vw] p-8 z-10 ">
                <img
                    src={Aboutimg}
                    alt="Dianna Adams"
                    className="shadow-lg"
                    width={'90%'}
                    height={552}
                />
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
    </>
  
  )
}

export default About