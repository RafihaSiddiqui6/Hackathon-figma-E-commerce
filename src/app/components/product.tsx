'use client'
import Image from 'next/image'
import React from 'react'


export default function Products(){
  return (
    <div>
      <section>
        <div className='px-8 py-12 text-[#2A254B] mt-12'>
          <h1 className='text-2xl'>Our popular products</h1>
          <div className='flex flex-col md:flex-row gap-8 mt-8'>
            
            {/* Product 1 */}
            <div className='w-full md:w-[700px] h-auto group'>
              <Image
                src={'/images/Large.png'}
                height={800}
                width={800}
                alt='sofa'
                className='w-full h-[80%]'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The popular suede sofa</p>
                <p>$980</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className='w-full md:w-[350px] h-auto group'>
              <Image
                src={'/images/chair.png'}
                height={800}
                width={800}
                alt='chair'
                className='w-full h-[80%]'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className='w-full md:w-[350px] h-auto group'>
              <Image
                src={'/images/chair1.png'}
                height={900}
                width={900}
                alt='chair'
                className='w-full h-[80%]'
              />
              <div className='mt-4 text-[#2A254B]'>
                <p className='py-2'>The Dandy chair</p>
                <p>$250</p>
              </div>
            </div>

          </div>

          {/* {button} */}
          <div className='mb-0 mt-4 flex justify-center items-center'>
            <a href="/productlist" className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] font-semibold text-[#2A254B] hover:bg-[#6e65a8]'>
              View products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}


