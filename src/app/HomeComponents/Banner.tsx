'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../HomeComponents/home.css'
import Image from 'next/image';
const HeroSection = () => {
  return (
    <div className="banner bg-cover bg-gray-700 px-4 py-10 md:py-16 h-screen">
  <section id="hero">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Image Slider - col-span-8 */}
        <div className="lg:col-span-8 w-full shadow-md rounded-xl overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop
            className="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full"
          >
            {['1.png', '2.png', '3.png', '4.png', '3.png'].map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={`/asset/${img}`}
                  alt={`Hero Image ${index + 1}`}
                  width={1000}
                  height={1000}
                  className="w-full h-full "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Contact Form - col-span-4 */}
        <div
          className="lg:col-span-4 w-full bg-white rounded-xl shadow-md p-6 text-center"
          data-aos="zoom-out"
        >
          <form id="contact" action="" method="post" className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Quick Contact</h3>
            <h6 className="!lg:text[12px] text-gray-500">
              Contact us today, and get a reply within 24 hours!
            </h6>
            <input
              type="text"
              placeholder="Your name"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Type your Message Here..."
              required
              className="w-full p-3 border border-gray-300 rounded-md h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-3 rounded-md hover:bg-red-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default HeroSection;
