import { Poppins } from "next/font/google";
import { BsPinterest } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";  
import { GrSkype } from "react-icons/gr";    
import { RiInstagramLine, RiFacebookBoxFill } from "react-icons/ri";  
import { AiFillLinkedin } from "react-icons/ai";       

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="bg-[#2A254B] text-white px-4 py-10 md:px-14 md:py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Menu and Categories Section */}
        <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-10">
          <div className="space-y-2 flex-1">
            <h5 className="font-semibold text-lg">Menu</h5>
            <ul className={`${poppins.className} space-y-1 text-sm`}>
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          {/* Categories Section */}
          <div className="space-y-2 flex-1">
            <h5 className="font-semibold text-lg">Categories</h5>
            <ul className={`${poppins.className} space-y-1 text-sm`}>
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
            </ul>
          </div>

          {/* Our Company Section */}
          <div className="space-y-2 flex-1 mt-4 md:mt-0">
            <h5 className="font-semibold text-lg">Our company</h5>
            <ul className={`${poppins.className} space-y-1 text-sm`}>
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>
        </div>

        {/* Join Mailing List Section */}
        <div className="mt-8 md:mt-0 space-y-4 w-full">
          <h5 className="font-semibold text-lg">Join our mailing list</h5>
          <div className="flex items-center w-full border border-white rounded-lg overflow-hidden">
            {/* Input field for email */}
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-transparent text-white px-4 py-3 flex-grow focus:outline-none"
            />
            {/* Sign up button */}
            <button className="bg-white text-[#2A254B] h-full w-[118px] font-medium px-6 py-3">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-500 mt-8 py-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-center sm:text-left">Copyright © 2022 Avion LTD</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          {/* Social Media Icons */}
          <a href="#" className="text-white hover:text-gray-300">
            <AiFillLinkedin size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <RiFacebookBoxFill size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <RiInstagramLine size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <GrSkype size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300"> 
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <BsPinterest size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}







