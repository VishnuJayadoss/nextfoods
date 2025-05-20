import Link from 'next/link'
import { MapPin, Phone, Clock } from 'lucide-react'
import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import ScrollTopButton from '../ScrollTopButton';



export default function Footer() {
  return (
    <footer className="bg-[#1f1f23] text-white pt-10 relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Address */}
        <div>
          <div className="flex items-center gap-2 text-red-600">
            <MapPin />
            <h4 className="text-lg font-bold text-white">Address</h4>
          </div>
          <p className="mt-2 text-gray-300">demo address<br />demo address</p>
        </div>

        {/* Contact */}
        <div>
          <div className="flex items-center gap-2 text-red-600">
            <Phone />
            <h4 className="text-lg font-bold text-white">Contact</h4>
          </div>
          <p className="mt-2 text-gray-300">
            <strong>Phone:</strong> +91 00000 000000<br />
            <strong>Email:</strong> info@example.com
          </p>
        </div>

        {/* Opening Hours */}
        <div>
          <div className="flex items-center gap-2 text-red-600">
            <Clock />
            <h4 className="text-lg font-bold text-white">Opening Hours</h4>
          </div>
          <p className="mt-2 text-gray-300">
            <strong>Mon-Sat:</strong> 11AM - 23PM<br />
            <strong>Sunday:</strong> Closed
          </p>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-default/50 text-default/50 text-[16px] mr-2 transition-all duration-300 hover:text-red-500 transition">
              <FaXTwitter />
            </Link>
            <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-default/50 text-default/50 text-[16px] mr-2 transition-all duration-300 hover:text-red-500 transition">
              <FaFacebook />
            </Link>
            <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-default/50 text-default/50 text-[16px] mr-2 transition-all duration-300 hover:text-red-500 transition">
              <FaInstagram />
            </Link>
            <Link href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-default/50 text-default/50 text-[16px] mr-2 transition-all duration-300 hover:text-red-500 transition">
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 my-6" />

      <div className="text-center pb-10 text-gray-400 text-sm">
        © Copyright <span className="font-bold text-white">Minerva Foods</span> All Rights Reserved<br />
        Designed by <span className="text-red-600">TechnoX</span>
      </div>

      {/* Scroll to Top Button */}
      <ScrollTopButton />

    </footer>
  )
}
