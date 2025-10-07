import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
 
const testimonials = [
    {
        name: "Name Surname",
        rating: 5.0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "Name Surname",
        rating: 5.0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "Name Surname",
        rating: 5.0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "Name Surname",
        rating: 5.0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "Name Surname",
        rating: 5.0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "Name Surname",
        rating: 5.0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];
 
const HomeSectionTen = () => {
    return (
        <div className="w-full from-blue-50 via-white to-blue-50 py-12 sm:py-16 md:py-20 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/Group1597881029.jpg')",}}>
            {/* Background Decorative Elements */}
           
            <div className="container mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start py-20">
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:sticky lg:top-8">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-2">
                                See What Our
                            </h2>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600">
                                Clients Say
                            </h2>
                        </div>
 
                        <div className="flex flex-col justify-between md:flex-row justify-start  items-center gap-6 w-full max-w-6xl mx-auto">
                            <div className=" ">
                                <Image
                                    src="/images/rating_02.png"
                                    alt="Image 1"
                                    width={189}
 height={121}
                                    className="rounded-lg object-cover"
                                />
                            </div>
 
                            {/* Image 2 */}
                            <div className=" ">
                                <Image
                                    src="/images/yellow_rating.png"
                                    alt="Image 2"
                                    width={189}
 height={95}
                                    className="w-full h-auto rounded-lg object-cover"
                                />
                            </div>
                        </div>
 
 
 
<Link href="https://cp.mymaamarkets.com/Home/Signup" passHref>
                        <button className="bg-[#1bbf8a] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base uppercase tracking-wide mt-20 cursor-pointer">
                            OPEN LIVE ACCOUNT
                        </button>
                        </Link>
                    </div>
 
 
                    <div className="lg:col-span-8 relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-5 md:gap-x-6 relative z-10">
 
                            <div className="space-y-4 sm:space-y-5 md:space-y-6">
                                {testimonials.filter((_, i) => i % 2 === 0).map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="relative rounded-2xl sm:rounded-3xl  bg-gradient-to-b from-sky-50 to-blue-300 p-5 sm:p-6 md:p-7 shadow-lg transition-all duration-300  backdrop-blur-xl bg-white/10 border border-white/50"
                                    >
                                        <span className="text-blue-900  font-bold text-sm sm:text-base">
                                            {testimonial.name}
                                        </span>
 
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                                        viewBox="0 0 24 24"
                                                        fill="#3B82F6"
                                                    >
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                ))}
                                            </div>
 
                                            <span className="text-blue-600 font-bold text-base sm:text-lg">
                                                {testimonial.rating.toFixed(1)}
                                            </span>
                                        </div>
 
 
                                        <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-5">
                                            {testimonial.text}
                                        </p>
 
 
                                        <div className="flex items-center justify-between">
 
 
                                        </div>
                                    </div>
                                ))}
                            </div>
 
 
                            <div className="space-y-4 sm:space-y-5 md:space-y-6 sm:mt-12 md:mt-16 lg:mt-20">
                                {testimonials.filter((_, i) => i % 2 === 1).map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7   bg-gradient-to-b from-sky-50 to-blue-300 shadow-lg transition-all duration-300  backdrop-blur-md bg-white/10 border border-white/50"
                                    >
                                        <span className="text-blue-900 font-bold text-sm sm:text-base">
                                            {testimonial.name}
                                        </span>
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-4 h-4 sm:w-5 sm:h-5"
                                                        viewBox="0 0 24 24"
                                                        fill="#3B82F6"
                                                    >
                                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="text-blue-600 font-bold text-base sm:text-lg">
                                                {testimonial.rating.toFixed(1)}
                                            </span>
                                        </div>
 
                                        {/* Testimonial Text */}
                                        <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-5">
                                            {testimonial.text}
                                        </p>
 
 
 
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default HomeSectionTen;
 
 