import Image from "next/image";
import Link from "next/link";
import { CiUser } from "react-icons/ci";

export default function FoodSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
      {/* Main Content */}
      <div className="md:col-span-8">
        <div className="max-w-4xl lg:mx-auto lg:px-4">
          <div className="bg-white">
            <div className="rounded-lg overflow-hidden shadow-lg relative w-full h-40 lg:h-96">
              <Image
                src="/blog/asia.jpg"
                alt="Delicious Recipes"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap text-sm text-gray-500 mb-4 gap-4">
                <span className="flex items-center gap-1">
                  <CiUser /> By Chef Minerva
                </span>
                <span className="flex items-center gap-1">
                  <i className="far fa-calendar"></i> 6/5/2025
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-4">Popular Food Recipes</h2>

              <p className="mb-4 text-gray-700">
                Our recipes are crafted to blend taste and nutrition. From traditional favorites to modern gourmet meals, enjoy cooking with easy-to-follow steps and everyday ingredients. Whether you’re a beginner or a seasoned cook, there’s something delicious for everyone.
              </p>

              <h4 className="text-xl font-semibold mb-2">Why Try Our Recipes?</h4>
              <ul className="pl-5 space-y-1 mb-4 text-gray-700">
                <li>✔️ Easy to follow with step-by-step instructions</li>
                <li>✔️ Budget-friendly and nutritious</li>
                <li>✔️ Suitable for all occasions</li>
                <li>✔️ Loved by kids and adults alike</li>
              </ul>

              <h4 className="text-xl font-semibold mb-2">Popular Dishes</h4>
              <ul className="pl-5 space-y-1 mb-4 text-gray-700">
                <li><b>Paneer Butter Masala</b> – A creamy and spicy Indian classic</li>
                <li><b>Grilled Chicken Salad</b> – Healthy and refreshing</li>
                <li><b>Spaghetti Aglio e Olio</b> – Simple, yet delicious Italian</li>
                <li><b>Chocolate Lava Cake</b> – A gooey dessert favorite</li>
                <li><b>Vegetable Biryani</b> – Fragrant and filling rice dish</li>
              </ul>

              <h4 className="text-xl font-semibold mb-2">Benefits of Home Cooking</h4>
              <ul className="pl-5 space-y-1 mb-4 text-gray-700">
                <li>⭐ Control ingredients and nutrition</li>
                <li>⭐ Cost-effective and healthier</li>
                <li>⭐ Great bonding activity for families</li>
                <li>⭐ Experiment with diverse cuisines</li>
              </ul>

              <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-600">
                <p>&lsquo;Cooking is love made visible.&lsquo;</p>
                <p className="text-sm font-light mt-1">– Anonymous</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="md:col-span-4">
        <div className="sticky top-27 space-y-8">
          {/* Image Card with Overlay */}
          <div className="relative rounded-[1rem] overflow-hidden shadow-lg">
            <Image
              src="/blog/card.jpg"
              alt="Special Offer"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-6">
              <h3 className="text-3xl font-extrabold mb-4 text-white">
                Get Your Favorite Dishes
              </h3>
              <Link
                href="/order"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Order Now
              </Link>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-yellow-500 shadow-md rounded-[1rem] p-6 relative text-black">
            <div className="absolute right-[33px] top-[30px] bg-yellow-500 rounded-full h-[60px] w-[60px] flex items-center justify-center shadow-md">
              <Image src="/red.svg" alt="Icon" width={60} height={60} />
            </div>
            <h5 className="font-bold text-4xl mb-[25px]">Call to Order</h5>
            <a href="tel:+91**********" className="block font-semibold mb-[25px]">
              +91 **********
            </a>
            <a href="mailto:orders@minervafood.com" className="block mb-[25px]">
              orders@minervafood.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
