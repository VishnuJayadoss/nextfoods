"use client";
import Image from "next/image";

const AboutFoodSection = () => {
    return (
        <section className="relative pt-16 lg:pb-20 overflow-hidden">
            {/* Decorative Circle */}
            <div className="hidden 3xl:block top-0 left-0 absolute">
                <div className="border-2 border-yellow-400 rounded-full w-12 h-12"></div>
            </div>

            {/* Container */}
            <div className="mx-auto px-4 max-w-7xl">
                {/* Title Section */}
                <div className="flex flex-col justify-center text-center">
                    <div className="vs-circle"></div>
                    <div className="text-center">
                        <span className="block text-red-600 font-semibold text-3xl uppercase tracking-wide">
                            WELCOME TO OUR KITCHEN
                        </span>
                        <h2 className="mt-2 font-bold text-gray-900 text-3xl md:text-4xl">
                            Experience Culinary Excellence at Flavor Haven
                        </h2>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-wrap gap-10 mt-10">
                    {/* Image Section */}
                    <div className="relative w-7/12 lg:w-6/12">
                    <p className="text-gray-700 text-lg text-justfy lg:mt-10">
                            At Flavor Haven, we are passionate about crafting unforgettable culinary
                            experiences using the freshest, locally-sourced ingredients. Our chefs blend
                            tradition with innovation to serve dishes that delight both the palate and
                            the soul.
                        </p>
                        <p className="mt-4 text-gray-700 text-lg text-justfy">
                            Whether you crave comforting classics or gourmet specialties, every meal is
                            a celebration of flavor, quality, and hospitality.
                        </p>
                       
                    </div>

                    {/* Text Section */}
                    <div className="self-center lg:w-5/12 2xl:w-1/3">
                    <div className="relative shadow-lg rounded-lg overflow-hidden mega-hover">
                            <Image
                                src="/about-3.jpg"
                                alt="About Food Img"
                                width={700}
                                height={500}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFoodSection;
