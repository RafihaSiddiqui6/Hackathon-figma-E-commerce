import Image from 'next/image'
import React from 'react'
export default function Last(){
  return (
    <div>
      <section>
        <div className=" text-[#2A254B]  ">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[720px] h-[603px] px-4 md:px-12 py-8 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl md:text-2xl">
                  From a studio in London to a global brand with <br /> over 400 outlets
                </h1>
                <h1 className="py-6 text-lg md:text-xl">
                  When we started Avion, the idea was simple. Make high-quality furniture
                  affordable and available for the mass market.
                </h1>
                <h1 className="text-base md:text-lg">
                  Handmade and lovingly crafted furniture and homeware is what we live, 
                  breathe, and design, so our Chelsea boutique became the hotbed for the 
                  London interior design community.
                </h1>
              </div>
              <div className="my-10">
                <button className="bg-[#F9F9F9] py-4 px-4 rounded-[5px] font-semibold text-[#2A254B] hover:bg-[#6e65a8]">
                  <a href="/contact">Get in touch</a>
                </button>
              </div>
            </div>

             <div className="w-full md:w-[720px] h-auto">
              <Image
                src={'/images/blend.png'}
                height={1500}
                width={1500}
                alt="chair"
                className="w-[720px] md:h-[603px] "
              />
            </div> 
        </div>
        </div>
      </section>
    </div>
  )
}

