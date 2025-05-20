import Image from "next/image";

export default function Serviceone() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-10 px-4 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="text-center lg:text-left">
            <p className="text-lg text-gray-600 font-medium text-center">Delightful Moments Await</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-2 text-center">
              Unforgettable Wedding Catering from Warna Caterers
            </h2>
          </div>

          <div className="flex justify-center lg:justify-center">
            <Image
              src="/star.png"
              alt="Wedding Catering Service"
              width={160}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          <div className="text-justify lg:text-left text-gray-700 text-[18px] leading-relaxed space-y-4">
            <p>
              At Warna Caterers, we pride ourselves on being the epitome of excellence in wedding catering services throughout Sri Lanka. With a legacy of culinary mastery and a commitment to exceeding expectations, we ensure that your special day is nothing short of spectacular.
            </p>
            <p>
              Indulge in a gastronomic journey with our unparalleled culinary creations. From elegant appetizers to sumptuous main courses and exquisite desserts, each dish is meticulously crafted to tantalize your taste buds and leave a lasting impression on your guests.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[300px] md:h-[350px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/buffet.jpg"
            alt="Wedding Catering Service"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
