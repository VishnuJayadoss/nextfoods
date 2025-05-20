'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { PiChefHatBold } from "react-icons/pi";
import MobileMenu from '../Mobilemenu/page';

export default function Header() {
  return (
    <header className='top-0 z-50 sticky bg-white shadow-md w-full'>
      <div className='flex mx-auto lg:mx-[60px] items-center justify-between lg:px-2 px-4 py-3'>
        {/* Logo - Left */}
        <Link href='/' className=''>
          <Image
            src='/RED.svg'
            alt='Logo'
            width={200}
            height={85}
            priority
            className='h-[80px] w-[100px] lg:w-[200px]'
          />
        </Link>

        {/* Menu - Center (Visible on lg and up) */}
        <nav className='hidden lg:flex flex-1 justify-center space-x-6 text-gray-700'>
          <Link href='/' className='pt-4 hover:border-b-2 hover:border-red-700 border-transparent border-b-2 transition duration-200'>Home</Link>
          <Link href='/about' className='pt-4 hover:border-b-2 hover:border-red-700 border-transparent border-b-2 transition duration-200'>About Us</Link>
          <Link href='/menu' className='pt-4 hover:border-b-2 hover:border-red-700 border-transparent border-b-2 transition duration-200'>Menu</Link>

          {/* Dropdown */}
          <div className='relative group'>
            <Link
              href='/service'
              className='flex items-center pt-4 hover:border-b-2 hover:border-red-700 border-transparent border-b-2 transition duration-600'
            >
              Service <ChevronDown size={16} className='ml-1' />
            </Link>
            <div className='absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg mt-1 py-1 rounded-md w-70 z-10'>
              <Link href='/service' className='block hover:bg-gray-100 px-4 py-2'>Service</Link>
              <Link href='/service/ig' className='block hover:bg-gray-100 px-4 py-2'>Service1</Link>
              <Link href='/service/hf' className='block hover:bg-gray-100 px-4 py-2'>Service2</Link>
            </div>
          </div>

          <Link href='/blog' className='pt-4 hover:border-b-2 hover:border-red-700 border-transparent border-b-2 transition duration-200'>Blog</Link>
          <Link href='/gallery' className='pt-4 hover:border-b-2 hover:border-red-700 border-transparent border-b-2 transition duration-200'>Gallery</Link>
          <Link href='/contact' className='pt-4 hover:border-b-2 hover:border-red-700 border-transparent border-b-2 transition duration-200'>Contact Us</Link>
        </nav>

        {/* Contact - Right (Visible on lg and up) */}
        <div className='hidden lg:block'>
          <Link
            href='/contact'
            className='flex items-center gap-2 bg-red-600 px-6 py-3 rounded-full text-white hover:bg-red-500 transition'
          >
            <PiChefHatBold className='h-6 w-6' />
            <span className='text-[18px]'>Contact us</span>
          </Link>
        </div>

        {/* Mobile Menu Button (Visible on <lg) */}
        <div className='lg:hidden'>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
