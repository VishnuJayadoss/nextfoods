// components/ServiceList.js
import Image from 'next/image';
import Link from 'next/link';
import { GrCheckmark } from 'react-icons/gr';


export const services = [
  {
    image: '/service/service-1.jpg',
    title: 'Catering Services',
    description: 'Delicious, customized menus crafted for corporate events, weddings, and private parties.',
    features: ['Gourmet Menus', 'On-site Chefs', 'Customizable Packages'],
  },
  {
    image: '/service/service-2.jpg',
    title: 'Food Delivery',
    description: 'Fast and fresh meal deliveries from our kitchen to your doorstep, every day.',
    features: ['Contactless Delivery', 'Wide Menu Selection', 'Real-time Tracking'],
  },
  {
    image: '/service/service-3.jpg',
    title: 'Event Banquet Planning',
    description: 'Comprehensive food and beverage solutions for events of any size and style.',
    features: ['Themed Buffets', 'Beverage Services', 'Professional Staff'],
  },
];

export default function ServiceList() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col overflow-hidden border border-gray-100 group"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={400}
                className="w-full h-70 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>

                <p className="text-gray-600 text-sm mb-4 flex-1 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mb-6 space-y-2 text-sm text-gray-700">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-red-500"><GrCheckmark /></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center py-2.5 px-6 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:from-red-600 hover:to-red-800 transition-all duration-300 ease-in-out w-full"
                >
                  Get Service

                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
