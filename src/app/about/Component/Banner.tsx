import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-black">
            <Image
                src="/about.jpg"
                width={1000}
                height={1000}
                quality={100}
                priority
                alt="Banner"
                className="object-cover w-full h-full"
            />
            <div className="absolute text-center text-white">
                <h1 className="text-4xl font-bold lg:text-[70px] !text-white">About</h1>
                <div className="flex items-center justify-center mt-2 text-sm">
                    <Link href='/' className="flex items-center font-semibold text-[16px]  hover:text-red-700">
                        Home
                    </Link>
                    <span className="mx-2 text-white-400">/</span>
                    <span className="text-white-700 font-semibold text-[16px]">About</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
