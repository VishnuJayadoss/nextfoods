'use client';
import { GrLinkNext } from "react-icons/gr";
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    title: 'Minerva Foods',
    type: 'menu',
    image: '/blog/blog-1.jpg',
  },
  {
    title: 'Minerva Foods',
    type: 'menu',
    image: '/blog/blog-2.jpg',
  },
  {
    title: 'Minerva Foods',
    type: 'menu',
    image: '/blog/blog-3.jpg',
  },
];

export default function Cards() {
  return (
    <section className="bg-course py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image */}
              <Image
                src={course.image}
                alt={course.title}
                width={600}
                height={400}
                className="w-full h-78 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h5 className="font-bold text-lg text-gray-800">{course.title}</h5>
                  <span className="bg-red-100 text-red-600  font-medium px-3 py-1 rounded-full">
                    {course.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-6 flex-1 text-sm leading-relaxed">
                Minerva Foods
                </p>

                {/* Button */}
                <Link
                  href="/courses"
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-full text-1xl lg:text-sm lg:font-semibold hover:bg-red-700 transition lg:w-[35%] w-[43%]"
                >
                  Read More
                  <span className="ml-3 lg:ml-4 bg-white text-red-600 rounded-full text-[8px] lg:text-xs px-[11px] py-[10px]">
                  <GrLinkNext />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
