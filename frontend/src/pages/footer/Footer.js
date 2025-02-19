import React from "react";
import footer from "../../assets/footer.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneSquareAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="relative">
        <img className="w-full h-72 object-cover" src={footer} alt="Footer Background" />

        {/* Content Container - Now using flex-col on small screens to keep it aligned */}
        <div className="absolute inset-0 flex flex-col md:flex-row gap-6 justify-center items-center text-center md:text-left px-6 md:px-12">
          
          {/* About Company */}
          <div className="w-full md:w-1/3 px-4">
            <p className="text-xl font-semibold mb-2">ABOUT COMPANY</p>
            <p className="text-sm mb-4">
              Top Orion delivers custom website development, optimizing design and content to boost visibility and drive organic traffic.
            </p>
            <div className="flex justify-center md:justify-start gap-4 text-lg">
              <Link to="https://www.facebook.com/toporionNew"><FaFacebook /></Link>
              <Link to="https://www.linkedin.com/in/toporionbd/"><FaLinkedin /></Link>
              <Link to="https://x.com/toporionbd"><FaTwitter /></Link>
              <Link to="https://www.instagram.com/toporionnew/"><FaInstagram /></Link>
              <Link to="https://www.youtube.com/@TopOrionBD"><FaYoutube /></Link>
            </div>
          </div>

          {/* Address Section */}
          <div className="w-full md:w-1/3 px-4">
            <p className="font-bold mb-2">Address</p>
            <p className="flex justify-center md:justify-start items-center gap-2">
              <IoLocationSharp className="text-yellow-400 text-xl" />
              ka,160/2, Khilkhet, Dhaka-1200, Bangladesh
            </p>
            <p className="flex justify-center md:justify-start items-center gap-2 mt-2">
              <FaPhoneSquareAlt className="text-yellow-400 text-lg" />
              +880-175-2529-602
            </p>
            <p className="flex justify-center md:justify-start items-center gap-2 mt-2">
              <MdMarkEmailRead className="text-yellow-400 text-lg" />
              info@toporion.net
            </p>
          </div>

          {/* Quick Links - Hidden on small screens */}
          <div className="hidden md:block w-1/3 px-4">
            <p className="font-bold mb-2">Quick Links</p>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>

          {/* Newsletter - Hidden on small screens */}
          <div className="hidden md:block w-1/3 px-4">
            <p className="font-bold mb-2">Newsletter</p>
            <p>Subscribe to our newsletter for updates.</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="border rounded p-2 mt-2 w-full text-black"
            />
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center bg-gray-800 p-4 mt-8">
        <p>© {new Date().getFullYear()} - All rights reserved by Top Orion</p>
      </div>
    </div>
  );
};

export default Footer;
