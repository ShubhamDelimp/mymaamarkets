import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  const leftColumn = testimonials.filter((_, i) => i % 2 === 0);
  const rightColumn = testimonials.filter((_, i) => i % 2 === 1);

  return (
    <div
      className="w-full from-blue-50 via-white to-blue-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/client-say-bg.png')" }}
    >
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Side - Heading & Button */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 py-12 sm:py-16 md:py-20 lg:py-21">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium text-[#0F3D62] mb-2 common-heading">
                See What Our <br /> <span className="font-bold text-[#006EFF]"> Clients </span> Say
              </h2>
            </div>

            {/* Rating Logos */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 w-full max-w-md mx-auto">
              <Image
                src="/images/rating_02.png"
                alt="Image 1"
                width={189}
                height={121}
                className="rounded-lg object-contain w-[150px] sm:w-[180px]"
              />
              <Image
                src="/images/yellow_rating.png"
                alt="Image 2"
                width={189}
                height={95}
                className="rounded-lg object-contain w-[150px] sm:w-[180px]"
              />
            </div>

            {/* CTA Button */}
            <Link href="https://cp.mymaamarkets.com/Home/Signup" passHref>
              <button className="bg-[#19C69A] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base uppercase tracking-wide mt-10 sm:mt-14">
                OPEN LIVE ACCOUNT
              </button>
            </Link>
          </div>

          {/* Right Side - Testimonials */}
          <div className="lg:col-span-8 flex gap-6">
            {/* Left Column */}
            <div className="flex-1 overflow-hidden relative h-[600px]">
              <div className="marqueeDown flex flex-col gap-6">
                {[...leftColumn, ...leftColumn].map((testimonial, index) => (
                  <div
                    key={index}
                    className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-gradient-to-b from-sky-50 to-blue-300 shadow-lg backdrop-blur-md bg-white/10 border border-white/50"
                  >
                    <span className="text-blue-900 font-bold text-sm sm:text-base">
                      {testimonial.name}
                    </span>
                    <div className="flex items-start justify-between mb-3">
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
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 overflow-hidden relative h-[600px]">
              <div className="marqueeUp flex flex-col gap-6">
                {[...rightColumn, ...rightColumn].map((testimonial, index) => (
                  <div
                    key={index}
                    className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-gradient-to-b from-sky-50 to-blue-300 shadow-lg backdrop-blur-md bg-white/10 border border-white/50"
                  >
                    <span className="text-blue-900 font-bold text-sm sm:text-base">
                      {testimonial.name}
                    </span>
                    <div className="flex items-start justify-between mb-3">
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
                    <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marqueeDown {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marqueeUp {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .marqueeDown {
          animation: marqueeDown 30s linear infinite;
        }
        .marqueeUp {
          animation: marqueeUp 30s linear infinite;
        }
        .marqueeDown:hover, .marqueeUp:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HomeSectionTen;
