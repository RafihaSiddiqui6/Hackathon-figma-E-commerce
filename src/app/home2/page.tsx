import React from 'react'
import Image from 'next/image'
import Club from '../components/club';
import Uniqueness from '../components/uniqueness';
export default function Home2(){
    return (
        <div>
            <div>
                <div className="w-[100%] h-auto">
                    <Image
                        src={'/images/home top.png'}
                        height={900}
                        width={900}
                        alt="home top"
                        className="w-full h-[80%] object-cover"
                    />
                </div>
            </div>
              <Uniqueness/>
            
                <div className="px-4 md:px-8 py-2 text-[#2A254B] pt-5">


                    {/* Product Items */}
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 space-y-5">
                        {/* Product 1 */}
                        <div className="w-full h-auto mt-5">
                            <Image
                                src={'/images/chair.png'}
                                height={700}
                                width={700}
                                alt="chair"
                                className="w-full h-auto object-cover "
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
                                className="w-full h-auto object-cover"
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
                                className="w-full h-auto object-cover "
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
                                className="w-full h-auto object-cover "
                            />
                            <div className="mt-4 text-[#2A254B]">
                                <p className="py-2">The Lucky Lamp</p>
                                <p>$399</p>
                            </div>
                        </div>
                         </div>
                          {/* View Collection Button */}
          <div className="mb-0 mt-4  flex justify-center items-center">
            <a  href="/productlist" className="bg-[#F9F9F9] py-4 px-6 rounded-[5px] font-semibold text-[#2A254B] hover:bg-[#6e65a8]">
              View collection
            </a>
          </div>

               {/* Story Section */}
           <div className="flex flex-col md:flex-row w-full  h-auto  items-center justify-around px-4 py-16 gap-4">
        <div className="bg-[#2A254B] w-full md:w-[634px] md:h-[478px] text-white p-8 md:p-16 mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl">It started with a small idea</h1>
          <p className="mt-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-[#4E4D93] h-12 w-40 rounded-sm  text-white mt-[200px]">
            View Collection
          </button>
        </div>
        <div className="w-full md:w-[634px] md:h-[478px]">
          <Image
            src="/images/About main.png"
            alt="About main"
            width={900} 
            height={900}
            className="w-full md:h-[478px]"
          />
        </div>
      </div>
                        
        {/* Newsletter Section */}
            <Club/>
        </div>
        </div>
    )
}

