'use client';

import { ChevronUp, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export default function FloatingButtons() {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed z-50 bottom-5 right-5 flex flex-col space-y-3">
     

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/919999999999" 
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </Link>

      {/* Phone Call Button */}
      <Link
        href="tel:+919999999999" 
        className="w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center"
        aria-label="Call us"
      >
        <Phone />
      </Link>
       {/* Scroll to Top Button */}
       <button
        onClick={handleScroll}
        className="w-12 h-12 bg-red-700 text-white rounded-full shadow-lg hover:bg-red-800 transition flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ChevronUp />
      </button>
    </div>
  );
}
