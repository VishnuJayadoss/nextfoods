'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function MenuCardSection() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activePart, setActivePart] = useState(1); // 1 or 2

  const menuData = {
    breakfast: {
      title: 'Breakfast Menu',
      items: ['Idli', 'Dosa', 'Pongal', 'Vada', 'Upma', 'Sambar', 'Chutney', 'Filter Coffee'],
    },
    lunch: {
      title: 'Lunch Menu',
      items: ['Sambar', 'Rasam', 'Poriyal', 'Kootu', 'Vatha Kuzhambu', 'Appalam', 'Curd', 'Payasam'],
    },
    dinner: {
      title: 'Dinner Menu',
      items: ['Malay sandwich', 'Tomato soup', 'Vellali Pub', 'Baby corn chili', 'Thayir Semiya', 'Buttermilk Chili', 'Pickles', 'Tomato Chutney'],
    },
    sweet: {
      title: 'Sweet Menu',
      items: ['Mysore Pak', 'Laddu', 'Jangiri', 'Rasagulla', 'Halwa', 'Badam Kheer', 'Milk Sweet', 'Coconut Burfi'],
    },
    seer: {
      title: 'Seer Bhakshanam',
      items: ['Murukku', 'Sev', 'Thattai', 'Adhirasam', 'Manoharam', 'Mixture', 'Ribbon Pakoda', 'Kai Murukku'],
    },
  };

  const handleMenuClick = (menuKey) => {
    setActiveMenu(menuKey);
    setActivePart(1);
  };

  const handleBackClick = () => {
    setActiveMenu(null);
    setActivePart(1);
  };

  const changePart = (part) => {
    setActivePart(part);
  };

  return (
    <section id="menucardd" className="bg-[url('/menubg.jpg')] bg-[length:100%] bg-center py-10">
      <div className="mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Title */}
          <div className="lg:w-1/12 w-full flex justify-center lg:block">
            <div className="menuucardd relative flex justify-center lg:justify-start">
              <h4 className="text-4xl font-normal text-[#da3036] lg:text-[62px] lg:leading-[64.17px] lg:absolute lg:-left-20 lg:top-[230px] lg:-rotate-90">
                Menucard
              </h4>
            </div>
          </div>

          {/* Menu Links */}
          <div className="lg:w-10/12 w-7/8">
            <div className="old bg-[url('/old.webp')] bg-cover bg-center p-4 sm:p-6 rounded-lg h-full w-full lg:w-6/8" data-aos="flip-left" data-aos-duration="1500">
              <h4 className="text-2xl sm:text-3xl lg:text-4xl mb-6 text-center">Menu List</h4>
              <div className="space-y-4 varietie justify-center text-xl sm:text-2xl lg:text-3xl pt-4 sm:pt-[50px] px-[50px] lg:px-[100px]">

                {Object.keys(menuData).map((key) => (
                  <p key={key}>
                    <button
                      onClick={() => handleMenuClick(key)}
                      className="flex items-center gap-3 hover:underline w-full text-left"
                    >
                      <Image src="/try11.png" alt={menuData[key].title} width={100} height={100} className="w-10 h-10 sm:w-[70px] sm:h-[70px] lg:w-[100px] lg:h-[80px]" />
                      {menuData[key].title}
                    </button>
                  </p>
                ))}

              </div>
            </div>
          </div>

          {/* Right Section (Images or Menu Items) */}
          <div className="lg:w-6/12 w-full space-y-6">
            {activeMenu === null ? (
              <>
                <div className="designn1" data-aos="fade-right" data-aos-duration="1500">
                  <Image src="/plate1.png" alt="Design 1" width={800} height={500} className="w-full h-auto rounded-lg" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="designn3" data-aos="fade-down" data-aos-duration="2000">
                    <Image src="/plate2.png" alt="Design 2" width={400} height={300} className="w-full h-auto rounded-lg" />
                  </div>
                  <div className="designn3" data-aos="fade-down" data-aos-duration="2500">
                    <Image src="/plate2.png" alt="Design 3" width={400} height={300} className="w-full h-auto rounded-lg" />
                  </div>
                </div>
              </>
            ) : (
              <div className="rounded-lg p-6 bg-white bg-opacity-80 lg:mt-[200px]" data-aos="fade-left" data-aos-duration="1500">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-[#da3036] w-full text-center">
                    {menuData[activeMenu].title} - {activePart === 1 ? 'I' : 'II'}
                  </h3>
                  <button onClick={handleBackClick} className="text-sm text-[#da3036] ml-4 shrink-0 hover:text-black">Back</button>
                </div>

                {/* Menu I & Menu II Tab Buttons */}
                <div className="flex justify-center gap-4 mb-6">
                  <button
                    onClick={() => changePart(1)}
                    className={`px-4 py-2 rounded border ${activePart === 1 ? 'bg-[#da3036] text-white' : 'bg-white text-[#da3036] border-[#da3036]'}`}
                  >
                    Menu I
                  </button>
                  <button
                    onClick={() => changePart(2)}
                    className={`px-4 py-2 rounded border ${activePart === 2 ? 'bg-[#da3036] text-white' : 'bg-white text-[#da3036] border-[#da3036]'}`}
                  >
                    Menu II
                  </button>
                </div>

                {/* Items - Horizontal Row */}
                <ul className="flex flex-wrap gap-4 justify-center text-lg">
                  {(activePart === 1
                    ? menuData[activeMenu].items.slice(0, Math.ceil(menuData[activeMenu].items.length / 2))
                    : menuData[activeMenu].items.slice(Math.ceil(menuData[activeMenu].items.length / 2))
                  ).map((item, index) => (
                    <li key={index} className="flex items-center gap-2 border px-3 py-1 rounded shadow-sm bg-[#f9f9f9]">
                      🍴 {item}
                    </li>
                  ))}
                </ul>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
