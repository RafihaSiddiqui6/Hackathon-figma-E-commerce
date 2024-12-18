import React from "react";
import Image from 'next/image'
import Uniqueness from "../components/uniqueness"
import Club from "../components/club"
export default function About(){
  return (
    <div>
      
      {/* Hero Section */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-8">
        <div className="md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple text-[#2A254B] ">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="mt-6 md:mt-0">
          <button className="bg-[#2A254B] hover:bg-[#6e65a8] h-12 w-40 rounded-sm text-[#F9F9F9]">
            View our products
          </button>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row w-full  h-auto  items-center justify-around px-4 py-16">
        <div className="bg-[#2A254B] w-full md:w-[634px] md:h-[478px] text-white p-8 md:p-16 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-[#4E4D93] h-12 w-40 rounded-sm  text-white mt-[200px]">
            View Collection
          </button>
        </div>
        <div className="w-full md:w-[630px]">
          <Image
            src="/images/About main.png"
            alt="About main"
            width={900} 
            height={900}
            className="w-full"
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center  py-16 space-y-8 md:space-y-0">
        <Image
          src="/images/About second.png"
          alt="Service"
          width={900} 
          height={900}
          className="w-full md:w-[650px] md:h-[603px]"
        />
        <div className="border-2 bg-[#F9F9F9] w-full md:w-[720px] h-[603px] p-8 md:p-20">
          <h1 className="text-xl md:text-2xl text-[#2A254B]">
            Our service isn&lsquo;t just personal, it&lsquo;s actually hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6 text-[#505977]">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market.<br/>Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-52 text-[#2A254B] hover:bg-[#6e65a8] ">Get in Touch</button>
        </div>
      </div>

      {/* {Other Sections} */}
      <Uniqueness/>
      <Club/>
       </div>
  );
};


