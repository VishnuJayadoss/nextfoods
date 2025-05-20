"use client";

import Image from "next/image";

interface StatItem {
  count: string;
  label: string;
  image: string;
}

const stats: StatItem[] = [
  {
    count: "25+",
    label: "Years Of Excellence",
    image: "/asset/pexels-alexy-almond-3756498.jpg",
  },
  {
    count: "250+",
    label: "Menu Options",
    image: "/asset/front-view-meat-sauce-soup-with-greens-potatoes-dark-desk-soup-meal-sauce-meat.jpg",
  },
  {
    count: "340+",
    label: "Staff",
    image: "/asset/pexels-catscoming-955137.jpg",
  },
  {
    count: "125k",
    label: "Happy Foodies",
    image: "/asset/pexels-goumbik-952353.jpg",
  },
];

export default function StatsSection() {
  return (
    <section className="py-10 bg-white my-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative group rounded-lg overflow-hidden shadow-md"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={stat.image}
                  alt={stat.label}
                  width={1000}
                  height={1000}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Overlay Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-27 text-white">
                <h3 className="text-3xl font-bold">{stat.count}</h3>
                <p className="mt-2 text-sm sm:text-base">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
