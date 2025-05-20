"use client";
import Image from "next/image";

const features = [
  {
    title: "Quality Food Items",
    description:
      "We provide the food with good nutrition and its quality or flavour. We provide the food with good nutrition and its quality or flavour.",
    icon: "https://img.icons8.com/ios-filled/50/ffa500/restaurant.png",
  },
  {
    title: "Professional Chefs",
    description:
      "Food items are the most important aspect of any occasion or gathering. Food items are the most important aspect of any occasion or gathering.",
    icon: "https://img.icons8.com/ios-filled/50/ffa500/restaurant.png",
  },
  {
    title: "Budget-Friendly",
    description:
      "Cooking packages adapted to your budgets. Cooking packages adapted to your budgets.",
    icon: "https://img.icons8.com/ios-filled/50/ffa500/restaurant.png",
  },
  {
    title: "Belief",
    description:
      "We are dedicated to delivering great catering services to our clients. Cooking packages adapted to your budgets.",
    icon: "https://img.icons8.com/ios-filled/50/ffa500/restaurant.png",
  },
  {
    title: "Delivery On Time",
    description:
      "Timely delivery is key in any Caterer-Customer relationship. Timely delivery is key in any Caterer-Customer relationship.",
    icon: "https://img.icons8.com/ios-filled/50/ffa500/restaurant.png",
  },
  {
    title: "Event Planning",
    description:
      "Our catering team is ready to assist you in making your event a success. Our catering team is ready to assist you in making your event a success.",
    icon: "https://img.icons8.com/ios-filled/50/ffa500/restaurant.png",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-4">
          WHY CHOOSE US
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto text-base sm:text-lg">
          We are a divine brand that specializes in providing specialized Food
          Catering services. Our foods are well-prepared. Customers praised the
          taste, nutritional value, and affordability of the food.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 h-full"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h6 className="font-bold text-lg mb-1">{feature.title}</h6>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
