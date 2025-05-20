"use client";
import Image from "next/image";

const AboutFoodSection = () => {
    return (
<section className="relative lg:pb-20 pb-10 overflow-hidden">
            <div className="mx-auto px-4 max-w-7xl">
                <div className="flex flex-wrap gap-20 mt-10">
                    <div className="relative lg:w-5/12 2xl:w-/12 lg:h-2/5">
                        <div className="relative shadow-lg rounded-lg overflow-hidden">
                            <Image
                                src="/meal.jpeg"
                                alt="About Food Img"
                                width={700}
                                height={500}
                                className="w-full h-2/5"
                            />
                        </div>
                    </div>
                    <div className="w-12/12 lg:w-4/8">
                        <p className="text-gray-700 text-lg text-justfy lg:mt-10">
                            At Flavor Haven, we are passionate about crafting unforgettable culinary
                            experiences using the freshest, locally-sourced ingredients. Our chefs blend
                            tradition with innovation to serve dishes that delight both the palate and
                            the soul.
                        </p>
                        <p className="text-gray-700 text-lg text-justfy lg:mt-10">
                            Whether you crave comforting classics or gourmet specialties, every meal is
                            a celebration of flavor, quality, and hospitality.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-lg mt-6">
                            {["Farm-Fresh Ingredients", "Artisan Recipes", "Warm Ambience", "Skilled Chefs"].map(
                                (item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <span className="text-yellow-400 text-xl">➜</span>
                                        <span>{item}</span>
                                    </div>
                                )
                            )}
                        </div>

                        <button className="mt-10 flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300">
                            <span className="bg-gray-800 p-2 rounded-full">
                                <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </span>
                            Explore Menu
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFoodSection;
