import Image from 'next/image';
import Link from 'next/link';


const Banner = () => {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-black">
            <Image
                src="/contactus.jpg"
                width={1000}
                height={1000}
                quality={100}
                priority
                alt="Banner"
                className="object-cover w-full h-full"
            />
            <div className="absolute text-center text-white">
                <h1 className="text-4xl !text-white">CONTACT-US</h1>
                <div className="flex items-center justify-center mt-2 text-sm">
                    <Link href='/' className="flex items-center text-[16px] hover:text-red-700">
                        HOME
                    </Link>
                    <span className="mx-2 text-white-600">/</span>
                    <span className="text-white-400">CONTACT-US</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
