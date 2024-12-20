import Image from 'next/image'
import { MdOutlineArrowDropDown } from "react-icons/md";
import React from 'react'


export default function ProductList2(){
  return (
    <div> 


     <div className='w-full h-auto group'>
              <Image
                src={'/images/product2top.png'}
                height={1200}
                width={1200}
                alt='frame'
                className='w-full h-[10%] object-cover'/>
             </div>
     
  

     <div className='flex flex-col md:flex-row justify-between h-[64px] w-full p-2'>
  {/* {first} */}
  <div className="w-full md:w-[557px] h-[48px] flex justify-start items-center">
    <ul className='flex flex-row flex-wrap'>
      <li className='pl-2 md:pl-5'>Category</li>
      <li className='mt-1'><MdOutlineArrowDropDown /></li>
      <li className='pl-2 md:pl-5'>Product type</li>
      <li className='mt-1'><MdOutlineArrowDropDown /></li>
      <li className='pl-2 md:pl-5'>Price</li>
      <li className='mt-1'><MdOutlineArrowDropDown /></li>
      <li className='pl-2 md:pl-5'>Brand</li>
      <li className='mt-1'><MdOutlineArrowDropDown /></li>
    </ul>
  </div>
  {/* {second} */}
  <div className="flex justify-start mt-2 md:mt-0">
    <ul className='flex flex-row justify-end items-center w-full md:w-[237px] h-[48px]'>
      <li className='pl-3'>Sorting by:</li>
      <li className='pl-2 md:pl-5'>Date added</li>
      <li className='mt-1'><MdOutlineArrowDropDown /></li>
    </ul>
  </div>
</div>
<div>
              
            <section>
        <div className="px-4 md:px-8 py-2 text-[#2A254B] pt-5">
        {/* Product Items 1*/}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ">
            {/* Product 1 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/chair.png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%] object-cover "
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Dendy Chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/vase.png'}
                height={700}
                width={700}
                alt="vase"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">Rustic VaseSet</p>
                <p>$155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/silky.png'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover "
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Silky Vase</p>
                <p>$125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/lamp.png'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover "
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Lucky Lamp</p>
                <p>$399</p>
              </div>
            </div>
          </div>

        
        </div>
      </section>
  
</div>
<div>
<section>
        <div className="px-4 md:px-8 py-2 text-[#2A254B] pt-5">
        

          {/* Product Items 2 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ">
            {/* Product 1 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/Photo1.png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%] object-cover "
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Dendy Chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/Photo2.png'}
                height={700}
                width={700}
                alt="vase"
                className="w-full h-[80%] object-cover "
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">Rustic VaseSet</p>
                <p>$155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/Photo3.png'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover "
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Silky Vase</p>
                <p>$125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/Photo4.png'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover "
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Lucky Lamp</p>
                <p>$399</p>
              </div>
            </div>
          </div>

        
        </div>
      </section>
  
</div>
<div>
<section>
        <div className="px-4 md:px-8 py-2 text-[#2A254B] pt-5">
        

          {/* Product Items 3*/}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Product 1 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/chair.png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%] object-cover"
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Dendy Chair</p>
                <p>$250</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/vase.png'}
                height={700}
                width={700}
                alt="vase"
                className="w-full h-[80%] object-cover "
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">Rustic VaseSet</p>
                <p>$155</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/silky.png'}
                height={700}
                width={700}
                alt="silky vase"
                className="w-full h-[80%] object-cover "
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Silky Vase</p>
                <p>$125</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/lamp.png'}
                height={700}
                width={700}
                alt="lamp"
                className="w-full h-[80%] object-cover "
              />
              <div className="mt-4 text-[#2A254B]">
                <p className="py-2">The Lucky Lamp</p>
                <p>$399</p>
              </div>
            </div>
          </div>

        
        </div>
      </section>
  
</div>
    </div>
  )
}










