import Image from "next/image";

const AboutPage = () => {
  const leftItems = [
    {
      title: "Fresh Ingredients",
      text: "We believe in the power of fresh, locally sourced ingredients to create nutritious, flavorful meals for every palate.",
    },
    {
      title: "Global Cuisine",
      text: "From Indian curries to Italian pastas and Asian stir-fries, we bring global flavors to your plate with authentic recipes.",
    },
    {
      title: "Nutritional Value",
      text: "Every dish we offer is crafted with a balance of taste and nutrition to support a healthy and active lifestyle.",
     
    },
  ];

  const rightItems = [
    {
      title: "Quality Standards",
      text: "We maintain rigorous hygiene and safety protocols in our kitchens to ensure the highest quality meals reach our customers.",
    },
    {
      title: "Sustainable Sourcing",
      text: "Our ingredients are sustainably sourced, supporting local farmers and reducing environmental impact wherever possible.",
    },
    {
      title: "Customer Satisfaction",
      text: "Every meal is crafted with care, aiming to exceed your expectations with every bite—because your satisfaction matters most.",
    },
  ];

  return (
    <div className="container mx-auto lg:px-10 px-5 lg:py-10">
             
              <h5 className="text-center lg:text-8xl text-4xl text-red-800 font-bold mb-4">MINERVA FOOD</h5>
      <div className="grid grid-cols-12 lg:gap-4">
        {/* Left Column */}
        <div className="lg:col-span-4 col-span-12 flex flex-col text-justify items-center gap-8 lg:px-5">
          {leftItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center text-center lg:text-start gap-4 group duration-500"
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              <div className="group-hover:-translate-y-2 duration-500 flex justify-center">
                <Image
                  src="/roast.png"
                  alt={item.title}
                  width={100}
                  height={100}
                  className={`w-[60px] h-[60px] lg:w-[44px] lg:h-[25px] duration-700`}
                />
              </div>
              <div>
                <p className="text-2xl text-black/80 lg:mt-5 text-red-700">{item.title}</p>
                <p className="text-[14px] lg:text-[18px] leading-6 text-black/70 mt-3">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div
          className="lg:col-span-4 col-span-12 flex justify-center my-16 lg:my-0"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <Image
            src="/homefood.jpg"
            alt="Delicious Home Food"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 col-span-12 flex flex-col text-justify items-center gap-8 lg:px-5">
          {rightItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center text-center lg:text-start gap-4 group duration-500"
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              <div className="group-hover:-translate-y-2 duration-500 flex justify-center">
                 <Image
                  src="/roast.png"
                  alt={item.title}
                  width={100}
                  height={100}
                  className={"w-[60px] h-[60px] lg:w-[44px] lg:h-[25px] duration-700"}
                />
              </div>
              <div>
                <p className="text-2xl text-black/80 lg:mt-5 text-red-700">{item.title}</p>
                <p className="text-[14px] lg:text-[18px] leading-6 text-black/70 mt-3">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
