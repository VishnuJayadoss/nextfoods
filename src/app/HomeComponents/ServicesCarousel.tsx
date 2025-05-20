"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
// import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Wedding Event",
    description:
      "We make a memorable experience for your guests by pampering their taste buds with delightful dishes.",
    image: "/asset/pexels-alexy-almond-3756498.jpg",
  },
  {
    title: "Corporate Event",
    description:
      "Tailored catering that leaves a lasting impression on your colleagues and clients alike.",
    image: "/asset/pexels-alexy-almond-3756498.jpg",
  },
  {
    title: "Birthday Party",
    description:
      "Celebrate joyfully with amazing food and vibrant flavors curated for your party theme.",
    image: "/asset/pexels-catscoming-955137.jpg",
  },
  {
    title: "Festival Event",
    description:
      "Indulge in cultural and traditional feasts crafted to elevate your festival spirit.",
    image: "/asset/pexels-catscoming-955137.jpg",
  },
  {
    title: "Private Event",
    description:
      "Enjoy personalized catering in an intimate setting with premium culinary delights.",
    image: "/asset/pexels-goumbik-952353.jpg",
  },
];

export default function ServicesCarousel() {
  return (
    <section className="py-12 text-center bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <h6 className="uppercase text-gray-400 mb-2 tracking-widest">
          What we do.
        </h6>
        <h2 className="text-4xl font-bold mb-8 uppercase">Premium catering services</h2>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 2000 }}
            loop
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="p-4">
                <div className="h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative w-full h-56">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1000}
                      height={1000}
                      className="object-cover h-50"
                    />
                  </div>
                  <div className="p-5 text-left">
                    <h5 className="font-bold mb-2 text-lg">{service.title}</h5>
                    <p className="text-gray-500 text-sm">{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          {/* <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
            <button className="custom-prev bg-red text-white p-2 rounded-full hover:bg-gray-800">
              <FaLongArrowAltLeft size={20}  />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <button className="custom-next bg-red text-white p-2 rounded-full hover:bg-gray-800">
              <FaLongArrowAltRight size={20} />
            </button>
          </div> */}





        </div>

        <Link
          href="#"
          className="inline-block mt-8 px-6 py-2 border border-black text-black font-semibold rounded hover:bg-black hover:text-white transition duration-300"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
