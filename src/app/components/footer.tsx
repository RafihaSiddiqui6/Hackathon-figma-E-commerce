import {Poppins } from "next/font/google";
import { BsPinterest } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";  
import { GrSkype } from "react-icons/gr";    
import { RiInstagramLine } from "react-icons/ri";  
import { RiFacebookBoxFill } from "react-icons/ri";  
import { AiFillLinkedin } from "react-icons/ai";       



const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className=" bg-[#2A254B] text-white px-14 py-[60px] md:w-[full] lg:h-[380px] w-[1440px]   justify-between"> 
    <div className=" sm:flex flex-col-2 md:flex flex-col-2  lg:flex-row-4 sm:space-x-10  lg:space-x-28">
      {/* Menu Section */}
      <div className=" sm: flex flex-row md:flex-row sm:space-x-10 lg:space-x-28 "> 
        <div className="space-y-4 w-[150px]">
        <h5 className="font-semibold text-lg">Menu</h5>
        <ul className={`${poppins.className} space-y-2 text-sm`}>
          <li>New arrivals</li>
          <li>Best sellers</li>
          <li>Recently viewed</li>
          <li>Popular this week</li>
          <li>All products</li>
        </ul>
      </div>

      {/* Categories Section */}
      <div className="space-y-4 w-[150px]">
        <h5 className="font-semibold text-lg">Categories</h5>
        <ul className={`${poppins.className} space-y-2 text-sm`}>
          <li>Crockery</li>
          <li>Furniture</li>
          <li>Homeware</li>
          <li>Plant pots</li>
          <li>Chairs</li>
          <li>Crockery</li>
        </ul>
      </div>
      </div>

      {/* Our Company Section */}
      <div className="space-y-4 w-[150px] ">
        <h5 className="font-semibold text-lg">Our company</h5>
        <ul className={`${poppins.className} space-y-2 text-sm`}>
          <li>About us</li>
          <li>Vacancies</li>
          <li>Contact us</li>
          <li>Privacy</li>
          <li>Returns policy</li>
        </ul>
      </div>

    
{/* Join Mailing List Section */}
<div className="space-y-4">
  <h5 className="font-semibold text-lg">Join our mailing list</h5>
  <div className="flex items-center w-[509px]  lg:h-[56px] border border-white rounded-lg overflow-hidden">
    {/* Input field for email */}
    <input
      type="email"
      placeholder="your@email.com"
      className="bg-transparent text-white px-4 py-3 flex-grow focus:outline-none md:w-[509px]  lg:w-[509px]"
    />
    {/* Sign up button */}
    <button className="bg-white text-[#2A254B] h-[56px]  w-[118px] font-medium px-6 py-3">
      Sign up
    </button>
    </div>
  </div>
  
</div>

     {/* Footer Bottom */}
      <div className="sm:w-[full] lg:[full] border-t border-gray-500 mt-8 pt-4 flex justify-between items-center pr-11">
        <p className="text-sm ">Copyright © 2022 Avion LTD</p>
        <div className="flex space-x-4  ">
          {/* Social Media Icons */}
          <a href="#" className="text-white">
            <AiFillLinkedin size={24} />
          </a>
          <a href="#" className="text-white">
            <RiFacebookBoxFill size={24} />
          </a>
          <a href="#" className="text-white ">
            <RiInstagramLine size={24} />
          </a>
          <a href="#" className="text-white ">
            <GrSkype size={24} />
          </a>
          <a href="#" className="text-white">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white ">
            <BsPinterest size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}
