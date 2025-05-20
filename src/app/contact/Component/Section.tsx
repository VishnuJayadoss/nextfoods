import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebookMessenger, FaXTwitter } from "react-icons/fa6";




export default function Section() {
  return (
    <div className="mx-auto">
      <div className="grid grid-cols-12">
        {/* section 1 start*/}

        <div className="col-span-12 md:col-span-12 lg:col-span-7  mt-10">
          <div className="md:p-10 p-8">
            <h2 className="text-2xl font-themefont uppercase font-black text-red">
              Get in Touch
            </h2>
            <p className="mt-4 text-justify">
              You need more information? Check what other persons are saying
              about our product. They are very happy with their purchase.You
              need more information? Check what other persons are saying about
              our product. They are very happy with their purchase. You need
              more information? Check what other persons are saying about our
              product. They are very happy with their purchase.
            </p>
          </div>

          {/* section 2 start */}
          <div className="md:mt-2 p-8 md:px-10">
            <div className="flex items-center gap-2">
              {" "}
              <IoMail className="fill-theme-secondary text-theme-primary size-[23px]" />
              <p className="text-[16px] font-themefont font-black">
                <Link href="mailto:example@gmail.com">example@gmail.com</Link>
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4">
              {" "}
              <FaPhoneAlt className="fill-theme-secondary text-theme-primary size-[23px]" />
              <p className="text-[16px] font-themefont font-black">
                <Link href="tel:+911234567890"> +91 1234567890</Link>
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              {" "}
              <FiMapPin className="fill-theme-secondary text-theme-primary size-[23px]" />
              <p className="text-[16px] font-themefont font-black text-justify">
                D.No. 54, 1st Floor, Above Hang Out, Bharathi Park Rd, 7th
                cross, Saibaba colony, Coimbatore-641011.
              </p>
            </div>
          </div>
          {/* section 2 end */}

          {/* section 3 start */}
          <div className="md:mt-10 md:mx-2 mx-12 md:px-10">
            <div className="flex items-center gap-2">
              {" "}
              <FaInstagram className="fill-theme-secondary text-theme-primary size-[40px] border rounded-full border-white p-2" />
              <FaFacebookMessenger className="fill-theme-secondary text-theme-primary  size-[40px] border rounded-full border-white p-2" />
              <FaXTwitter className="fill-theme-secondary text-theme-primary  size-[40px] border rounded-full border-white p-2" />
            </div>
          </div>
          {/* section 4 end */}
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-5  my-10">
          <section className="flex justify-center items-center md:p-10 p-6">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-2xl w-full max-w-lg">
              <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800 uppercase">
                Contact Us
              </h2>
              <form className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="1234567890"
                    maxLength={10}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-red-500 focus:outline-none"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:ring-2 focus:ring-red-500 focus:outline-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>

        </div>
      </div>
    </div>

  );
}
