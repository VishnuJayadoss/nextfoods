'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
      <Image
        src="/buffet.jpg" 
        alt="Wedding Catering Service"
        quality={100}
        width={1000}
        height={1000}
        className='object-cover w-full h-full'
        priority
      />
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          Wedding Catering Service <br /> in Colombo, Sri Lanka
        </h1>
        <p className="text-white text-sm md:text-lg mt-4 max-w-2xl">
          Delight in our unique wedding catering service in Colombo, Sri Lanka,
          blending culinary excellence and personalized service for an unforgettable celebration.
        </p>
      </div>
    </div>
  );
};

export default Banner;
