import Image from 'next/image';
import React from 'react';
import Uniqueness from '../components/uniqueness';
import Club from '../components/club';

export default function ProductList(){
 return (
    <div>
      <section>
        <div className=" py-8 md:py-12">
          {/* Main Product Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-[721px] md:h-[759px]">
              <Image
                src={'/images/Image Left.png'}
                height={1000}
                width={1000}
                alt="chair"
                className="w-[721px] h-[759px] object-cover"
              />
            </div>
            <div className="w-full md:w-[602px] px-4 md:px-10 py-6 flex flex-col justify-center">
              <div>
                <p className="text-xl md:text-2xl font-semibold text-[#2A254B]">The Dandy Chair</p>
                <p className="py-2 text-lg md:text-xl text-[#2A254B]">$250</p>
              </div>
              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold">Description</h1>
                <div className="my-4 md:my-6">
                  <p>
                    A timeless design, with premium materials features as one of our most popular
                    and iconic pieces. The dandy chair is perfect for any stylish living space with
                    beech legs and lambskin leather upholstery.
                  </p>
                </div>
                <div className="ml-4">
                  <ul className="list-disc space-y-1">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div>
                  <div className="my-8">
                    <h1 className="font-semibold">Dimensions</h1>
                  </div>
                  <div className="flex gap-12 md:gap-20 text-sm md:text-base">
                    <div>
                      <h1>Height</h1>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h1>Width</h1>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h1>Depth</h1>
                      <p>50cm</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center mt-8">
                    <div className="flex items-center gap-4">
                      <h1>Amount:</h1>
                      <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                        <span  className="hover:bg-[#6e65a8]">+</span> 1 <span className="hover:bg-[#6e65a8]">-</span>
                      </button>
                    </div>
                    <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white mt-4 md:mt-0">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Suggestions Section */}
          <h1 className="text-xl md:text-2xl font-semibold mt-12 ml-7 text-[#505977]">You might also like</h1>
          <div>
      <section>
        <div className="px-4 md:px-8  text-[#2A254B] mt-12">
          
          {/* Products*/}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {/* Product 1 */}
            <div className="w-full h-auto">
              <Image
                src={'/images/chair.png'}
                height={700}
                width={700}
                alt="chair"
                className="w-full h-[80%]"
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
                className="w-full h-[80%] "
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
                className="w-full h-[80%]"
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
                className="w-full h-[80%] "
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
        </div>
      </section>
    </div>
          {/* Uniqueness and club Section */}
          <Uniqueness/>
          <Club/>
         </div>
      </section>
    </div>
);
};

