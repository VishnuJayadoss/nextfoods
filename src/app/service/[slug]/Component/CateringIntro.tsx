import Image from "next/image";

export default function FloatedImageContent() {
  return (
    <div className="p-6 bg-gradient-to-br from-white min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 md:p-10 max-w-6xl w-full">
        <div className="md:clearfix">
          {/* Image: Floated on md+, stacked on small screens */}
          <div className="w-full max-w-[500px] h-[250px] md:h-[500px] relative md:float-left md:mr-8 mb-6 md:mb-4 mx-auto md:mx-0 rounded-xl overflow-hidden">
            <Image
              src="/cake.jpg" // Ensure this image exists in the /public folder
              alt="Cake"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority
            />
          </div>

          {/* Text content */}
          <div className="text-gray-800">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Delight in Culinary Elegance</h2>
            <p className="text-justify text-base md:text-lg mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac.
            </p>
            <p className="text-justify text-base md:text-lg leading-relaxed">
              In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
            </p>

            <p className="text-justify text-base md:text-lg leading-relaxed">
              In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
            </p>

            <p className="text-justify text-base md:text-lg leading-relaxed">
              In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
