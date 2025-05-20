import Image from "next/image";
export default function FAQSection() {
    return (
        <section className="bg-gray-100 py-16 px-4 text-center">
            <div className="max-w-3xl mx-auto">
                <p className="text-sm text-gray-600 mb-2">Frequently Asked Question</p>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">FIND QUICK ANSWERS</h2>
                <div className="mb-8">
                 <div className="w-full flex justify-center items-center">
           
                               <Image
                                   src="/star.png"
                                   alt="Wedding Catering Service"
                                   quality={100}
                                   width={1000}
                                   height={1000}
                                   className='lg:w-1/3 h-10 '
                                   priority
                               />
                               </div>
                </div>

                <div className="space-y-4 text-left">
                    <details className="bg-white rounded shadow-sm">
                        <summary className="cursor-pointer py-3 px-5 font-medium hover:bg-gray-50">
                            What services are included in Warna Caterer&apos;s wedding catering packages?
                        </summary>
                        <div className="px-5 pb-4 text-gray-600">
                            Our packages include full-service catering, table setup, wait staff, and customized menu options.
                        </div>
                    </details>

                    <details className="bg-white rounded shadow-sm">
                        <summary className="cursor-pointer py-3 px-5 font-medium hover:bg-gray-50">
                            Can we schedule a tasting before finalizing our wedding menu?
                        </summary>
                        <div className="px-5 pb-4 text-gray-600">
                            Yes, we offer complimentary tastings to help you finalize your selections with confidence.
                        </div>
                    </details>

                    <details className="bg-white rounded shadow-sm">
                        <summary className="cursor-pointer py-3 px-5 font-medium hover:bg-gray-50">
                            How do you handle last-minute changes to the guest count?
                        </summary>
                        <div className="px-5 pb-4 text-gray-600">
                            We are flexible with changes up to 72 hours before the event. Just contact our team directly.
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}
