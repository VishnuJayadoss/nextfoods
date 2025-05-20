// components/SpecialOffersSection.tsx

import Image from "next/image";

export default function SpecialOffersSection() {
    return (
      <section className="pt-3 my-10">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
  
            {/* Left Column */}
            <div className="lg:w-1/2">
              <h5 className="text-[#ce1212] font-bold text-[20px] mb-1">From The Menu</h5>
              <h2 className="font-bold text-3xl mb-4">SPECIAL OFFERS</h2>
  
              {/* Offer Item */}
              {[
                {
                  img: "/asset/pexels-alexy-almond-3756498.jpg",
                  title: "Party Menu",
                  desc: "We provide meals for breakfast, lunch, snacks, office happy hours and dinners."
                },
                {
                  img: "/asset/pexels-catscoming-955137.jpg",
                  title: "Regular Menu",
                  desc: "Delicious food catering for all parties, functions, and events. Check out our menu for all your options."
                },
                {
                  img: "/asset/pexels-goumbik-952353.jpg",
                  title: "Birthday Menu",
                  desc: "We are ready to give best food service for your B'day or Any Parties."
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start mb-4">
                  <Image src={item.img} alt={item.title} width={1000} height={1000} className="w-[70px] h-[70px] object-cover rounded-[10px] mr-3" />
                  <div className="flex-grow">
                    <h6 className="text-[#ce1212] font-bold text-[20px] mb-1">{item.title}</h6>
                    <p className="text-sm m-0">{item.desc}</p>
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <span className="w-[35px] h-[35px] bg-[#eee] rounded-full inline-flex justify-center items-center text-[18px] font-bold text-[#333]">
                      &gt;
                    </span>
                  </div>
                </div>
              ))}
            </div>
  
            {/* Right Column */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((_, idx) => (
                <div key={idx} className="relative">
                  <Image
                    src="/asset/pexels-alexy-almond-3756498.jpg"
                    alt="Menu Item"
                    width={1000}
                    height={1000}
                    className="rounded w-full h-auto"
                  />
                  {idx === 1 && (
                    <div className="absolute z-6 lg:top-[160px] top-[85px] transform -translate-x-1/2 text-center">
                      <div className="bg-white px-2 py-[30px] rounded-full text-[18px] leading-none text-[#ce1212] shadow-md">
                        Explore<br /><strong>THE MENU</strong>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  