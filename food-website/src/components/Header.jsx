import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
     <header className="w-full h-full top-0 left-0 z-50 shadow-lg">
      {/* Top Bar */}
      <div className="bg-gray-700 text-white text-sm px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><FaPhoneAlt /> (414) 857 – 0107</span>
          <span className="flex items-center gap-1"><FaEnvelope /> yummy@bistrobliss</span>
        </div>
        <div className="flex items-center gap-3">
          <FaTwitter className="cursor-pointer hover:text-gray-300" />
          <FaFacebookF className="cursor-pointer hover:text-gray-300" />
          <FaInstagram className="cursor-pointer hover:text-gray-300" />
          <FaGithub className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white text-black px-4 py-3 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-semibold">
          <img src="/images/logo.png" alt="Bistro Bliss Logo" className="h-8 w-8" />
          <span className="italic">Bistro Bliss</span>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-4 mt-3 md:mt-0 text-sm md:text-base">
          <li><Link to="/" className="bg-green-100 text-black rounded-full px-4 py-1">Home</Link></li>
          <li><Link to="about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="menu" className="hover:text-gray-400">Menu</Link></li>
          <li><Link to="pages" className="hover:text-gray-400">Pages</Link></li>
          <li><Link to="contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>

        {/* Button */}
        <a
          href="#"
          className="mt-3 md:mt-0 border rounded-full px-4 py-1 hover:bg-green-100 hover:text-black transition"
        >
          Book A Table
        </a>
      </nav>
    </header>
    </>
  )
}

export default Header