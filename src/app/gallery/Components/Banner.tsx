import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center bg-black border-bottom-banner">
            <Image
                src="/gallery.jpg" 
                alt="Banner"
                width={1000}
                height={1000}
                className="object-cover w-full h-full"
            />

            {/* Overlay Text */}
            <div className="absolute text-center text-white">
                <h1 className="text-4xl font-bold text-[70px] breadcumb-title">Gallery</h1>
                <div className="flex items-center justify-center text-sm">
                    <Link href="/" className="flex items-center text-[14px] gap-1 icon-menu hover:text-red-700">
                        HOME
                    </Link>
                    <span className="mx-2 text-white-400">/</span>
                    <span className="text-white-600">GALLERY</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
