import Image from 'next/image'
import React from 'react'

export default function Brand(){
  return (
    <div>
      <section>
        <div className='px-8 py-12 mx-0'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-[60%] h-auto md:h-[584px] border border-black bg-[#2A254B] text-white px-4 md:px-12 py-6 md:py-12 flex flex-col justify-between'>
              <div className="mt-[60px]">
                <h1 className='text-xl md:text-3xl md:text-left'>
                  The furniture brand for the future with <br /> the timeless designs
                </h1>
                <div className='flex justify-center md:justify-start'>
                  <a href="/productlist" className='w-[170px] h-[56px] font-semibold text-white border bg-gray-600 border-gray-600 mt-12 hover:bg-[#6e65a8] text-center p-4'>
                    View collection
                  </a>
                </div>
              </div>

              <div className='my-4 md:my-0'>
                <p className='text-sm md:text-base md:text-left mt-20'>
                  A new era in eco-friendly furniture with Avion, the French luxury retail brand
                  <br /> with sleek fonts, full colors, and a beautiful way to display things digitally
                  <br /> using modern web technologies.
                </p>
              </div>
            </div>

            <div className='w-full md:w-[40%] h-auto md:h-[584px] bg-white flex justify-center items-end mx-0'>
              <Image src={'/images/chair.png'}
               width={700} 
               height={700} 
               alt='right'
               className='md:h-[584px] md:w-[100%] '
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
