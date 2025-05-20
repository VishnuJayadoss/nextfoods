"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import type { Swiper as SwiperType } from "swiper/types"; // ✅ Import Swiper type

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    text: "The service was kind, efficient, and helpful. Food was delicious and well-presented!",
  },
  {
    name: "Jane Smith",
    image: "https://www.w3schools.com/howto/img_avatar2.png",
    text: "Perfect in every way. The food and service were both excellent. Highly recommended!",
  },
  {
    name: "Alex Green",
    image: "https://www.w3schools.com/howto/img_avatar.png",
    text: "The experience was amazing! The staff was really helpful and pleasant throughout.",
  },
  {
    name: "Sara Lee",
    image: "https://www.w3schools.com/howto/img_avatar2.png",
    text: "Everything was on point! Friendly staff and fantastic food presentation!",
  },
];

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">WHAT CLIENT SAY</h2>

        <div className="relative">
          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute top-1/2 lg:-left-5 left-3 z-20 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="absolute top-1/2 lg:-right-5 right-5 z-20 transform -translate-y-1/2 bg-red-500 text-white p-3 rounded-full shadow-md hover:bg-red-600 transition"
          >
            <FaArrowRight />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            loop
            centeredSlides
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onBeforeInit={(swiper: SwiperType) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.navigation.update();
              });
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-6xl mx-auto"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col items-center relative px-4">
                  <div className="absolute z-10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={96}
                      height={96}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="mt-16 bg-gray-100 rounded-xl p-6 pt-16 shadow-md text-center w-full max-w-sm mx-auto transition-opacity duration-300 ease-in-out hover:opacity-80">
                    <h5 className="text-xl font-semibold text-red-600 mb-2">{testimonial.name}</h5>
                    <p className="text-gray-600 text-sm">{testimonial.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .swiper-slide {
          transition: opacity 0.3s ease;
        }

        .swiper-slide-active {
          opacity: 1 !important;
        }

        .swiper-slide-next,
        .swiper-slide-prev {
          opacity: 0.9 !important;
        }
      `}</style>
    </section>
  );
}
