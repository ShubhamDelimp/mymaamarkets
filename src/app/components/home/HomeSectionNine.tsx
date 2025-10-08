import React, { useState } from "react";

const carouselImages = [
  "/images/awd_1.png",
  "/images/awd_2.png",
  "/images/awd_3.png",
  "/images/awd_4.png",
  "/images/awd_5.png",
  "/images/awd_6.png",
  "/images/awd_7.png",
  "/images/awd_8.png",
  "/images/awd_9.png",
  "/images/awd_10.png",
];

const educationItems = [
  { title: "Seminars", image: "/images/image_01.png" },
  { title: "Webinars", image: "/images/image_02.png" },
  { title: "Try Free Demo", image: "" },
  { title: "Trading Courses", image: "/images/image_03.png" },
];

const HomeSectionNine: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 8;
      if (window.innerWidth >= 1024) return 6;
      if (window.innerWidth >= 768) return 4;
      if (window.innerWidth >= 640) return 3;
      return 2;
    }
    return 8;
  };

  const visibleCount = getVisibleCount();
  const maxIndex = Math.max(0, carouselImages.length - visibleCount);

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div>
    <div className="relative container  bg-white pt-12 sm:pt-35">
      <h2 className=" text-[#0F3D62] font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl lg:text-start text-center px-5 common-heading">
        Our Latest{" "}
        <span className="text-[#006EFF] font-bold">Recognitions</span>
      </h2>
    </div>
    <div className="relative w-full  bg-white sm:pb-16">     

      <div className="pt-8 sm:pt-10 w-full mx-auto flex flex-col items-center sm:px-4 md:px-6 lg:px-8 space-y-10">

        <div className="relative w-full mt-10 flex flex-col items-center justify-center">
          <div className="overflow-hidden w-full max-w-[100%] lg:max-w-[100%]">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4"
              style={{
                transform: `translateX(-${currentIndex * (240 + 16)}px)`,
              }}
            >
              {carouselImages.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[200px] sm:w-[220px] md:w-[240px] h-[180px] sm:h-[200px] md:h-[220px] rounded-2xl overflow-hidden shadow-md"
                >
                  <img
                    src={img}
                    alt={`Recognition ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full container flex justify-center lg:justify-start items-center gap-4" >
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`border rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-xl transition-all mt-[50px] ${
                currentIndex === 0
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-[#0F3D62] text-[#0F3D62] hover:bg-[#006EFF] hover:text-white"
              }`}
            >
              ←
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`border rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-xl transition-all mt-[50px] ${
                currentIndex >= maxIndex
                  ? "border-gray-300 text-gray-300 cursor-not-allowed"
                  : "border-[#0F3D62] text-[#0F3D62] hover:bg-[#006EFF] hover:text-white"
              }`}
            >
              →
            </button>
          </div>
        </div>   
        <div className="container relative overflow-hidden bg-cover bg-center px-6 sm:px-10 md:px-16 lg:px-[100px] py-10 sm:py-14 md:py-[80px] rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] mx-auto" style={{ backgroundImage: "url('/images/hub-bg.png');" }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-[#006EFF] mb-8 common-heading">
            Education <span className="text-[#0F3D62] font-medium">Hub</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {educationItems.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] shadow-lg overflow-hidden cursor-pointer h-[220px] sm:h-[280px] md:h-[320px] lg:h-[371px]"
              >
                {idx === 2 ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex flex-col items-center justify-center p-6 relative">
                    <h4 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-4 pt-[50px]">
                      Try Free <br /> Demo
                    </h4>
                    <p className="text-white text-xs sm:text-sm md:text-base text-center mb-6 max-w-[280px] leading-relaxed ">
                      Learn to trade the markets or test your trading strategies.
                    </p>
                    <button className="text-[#006EFF] mt-auto bg-white rounded-full w-[45px] sm:w-[50px] md:w-[55px] h-[45px] sm:h-[50px] md:h-[55px] text-[28px] sm:text-[34px] md:text-[38px] flex items-center justify-center">
                      ↗
                    </button>
                  </div>
                ) : (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#006EFF]/90 via-[#006EFF]/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex justify-between items-end text-white">
                      <h4 className="font-bold text-sm sm:text-base md:text-lg">
                        {item.title}
                      </h4>
                      <button className="text-[#006EFF] bg-white rounded-full w-[45px] sm:w-[50px] md:w-[55px] h-[45px] sm:h-[50px] md:h-[55px] text-[28px] sm:text-[34px] md:text-[38px] flex items-center justify-center">
                        ↗
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="relative rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] shadow-lg overflow-hidden cursor-pointer h-[240px] sm:h-[280px] lg:h-[315px] w-full lg:w-[491px]">
              <img
                src={educationItems[3]?.image}
                alt="Trading Courses"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center text-white">
                <h4 className="font-bold text-base sm:text-lg md:text-xl">
                  Trading Courses
                </h4>
                <button className="text-[#006EFF] bg-white rounded-full w-[45px] sm:w-[50px] md:w-[55px] h-[45px] sm:h-[50px] md:h-[55px] text-[28px] sm:text-[34px] md:text-[38px] flex items-center justify-center">
                  ↗
                </button>
              </div>
            </div>

            <div className="bg-white rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] shadow-lg p-4 sm:p-6 h-auto min-h-[260px] sm:min-h-[300px] lg:h-[313px] w-full lg:w-[700px] flex flex-col">
              <h3 className="text-base sm:text-lg md:text-sm font-bold text-[#0F3D62] mb-4 text-[30px]">
              </h3>

              <h4 className="font-bold text-base sm:text-lg md:text-xl text-[#0F3D62] mb-4">
                Upcoming Events
              </h4>

              <button className="w-full bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 rounded-lg mb-3 flex items-center justify-between hover:bg-blue-700 transition-colors text-xs sm:text-sm">
                <span className="truncate mr-2">20.08 DUBAI EXPO</span>
                <span className="text-base sm:text-lg">↗</span>
              </button>

              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between py-2 sm:py-2.5 border rounded-lg px-3 sm:px-4 border-[#B0BCC9]">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-600">
                      21.08
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0F3D62]">
                      WEBINAR
                    </span>
                  </div>
                  <button className="text-blue-600 text-base sm:text-lg font-bold hover:text-blue-700">
                    ↗
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center border border-[#B0BCC9] rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 gap-2 sm:gap-0">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-600">
                      25.08
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0F3D62]">
                      KUWAIT ROADSHOW
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-[10px] sm:text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline ml-auto"
                  >
                    ALL EVENTS
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
       {/* <img
                src="./images/bull.png"
                alt="MetaTrader 5 devices mockup"
                className="w-full h-full object-contain hidden lg:block absolute bull-img z-10"
              /> */}
    </div>
    </div>
  );
};

export default HomeSectionNine;
