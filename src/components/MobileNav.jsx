import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


export default function MobileNav (){

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative md:hidden"> 
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 text-2xl text-gray-600 focus:outline-none"
        aria-label="Toggle menu"
      >
        {!isOpen ? (
          <GiHamburgerMenu className= "p-4 rounded-full" />
        ) : (
          <IoMdClose />
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white text-center text-lg flex flex-col items-center justify-center space-y-8">
          <p  className="hover:text-gray-500">Home</p>
          <p  className="hover:text-gray-500">About</p>
          <p  className="hover:text-gray-500">Reviews</p>
          <p  className="hover:text-gray-500">Videos</p>
          <p  className="hover:text-gray-500">Contact</p>
        </div>
      )}
    </div>
  )
}