import Image from "next/image";
import React from "react";

const carouselItems = Array(6).fill(null);

const educationItems = [
  { title: "Seminars", image: "/images/image_01.png" },
  { title: "Webinars", image: "/images/image_02.png" },
  { title: "Try Free Demo", image: "" },
  { title: "Trading Courses", image: "/images/image_03.png" },
];

const HomeSectionNine: React.FC = () => {
  return (
    <div className="relative w-full bg-white py-12 sm:py-16 lg:pt-[150px]">
      {/* Heading */}
      <h2 className="container font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-black lg:text-start text-center px-5">
        Our Latest{" "}
        <span className="text-blue-600 font-bold">Recognitions</span>
      </h2>

      {/* Awards Carousel */}
      <div className="pt-8 sm:pt-10 w-full mx-auto flex flex-col items-center sm:px-4 md:px-6 lg:px-8 space-y-10">
        <div className="relative w-full overflow-hidden">
          <div className="tech-slideshow flex py-4 gap-4">
            <div className="mover-1 flex gap-4">
              {[...carouselItems, ...carouselItems].map((_, idx) => (
                <div
                  key={idx}
                  className="relative w-[160px] sm:w-[200px] md:w-[240px] h-[12rem] sm:h-[14rem] md:h-[16rem] flex-shrink-0 rounded-2xl overflow-hidden flex items-center justify-center"
                >
                  {/* Gradient Border */}
                  <div
                    className="w-full h-full rounded-2xl p-[2px] sm:p-[3px]"
                    style={{
                      background:
                        "linear-gradient(180deg, #E0CB68 0%, #B9A150 50%, #DEBC73 100%)",
                    }}
                  >
                    <div
                      className="w-full h-full rounded-2xl flex items-center justify-center relative"
                      style={{
                        background:
                          "linear-gradient(180deg, #1168AE 0%, #0F3D62 38.94%, #114F80 95.67%)",
                      }}
                    >
                      <Image
                        src="/images/Mask group.png"
                        alt="Decoration"
                        width={500}
                        height={500}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-[100px] sm:w-[150px] md:w-[200px] h-full opacity-70"
                      />

                      <Image
                        src="/images/winggsss.png"
                        alt="Golden Wreath"
                        width={500}
                        height={500}
                        className="absolute inset-0 w-[60%] sm:w-[65%] md:w-[70%] h-[60%] sm:h-[65%] md:h-[70%] object-contain opacity-90 mx-auto"
                      />

                      <div className="relative z-10 text-center px-2">
                        <p className="text-white text-[7px] sm:text-[8px] font-extrabold uppercase tracking-widest">
                          TOP
                        </p>
                        <p className="text-white text-[7px] sm:text-[8px] font-extrabold uppercase leading-tight">
                          REGULATED
                        </p>
                        <p className="text-white text-[7px] sm:text-[8px] font-extrabold uppercase leading-tight">
                          BROKER
                        </p>
                        <div className="px-6 sm:px-10 flex justify-center">
                          <Image
                            src="/images/building_logo.png"
                            alt="Dubai Summit"
                            width={80}
                            height={80}
                            className="max-w-[50px] sm:max-w-[70px] md:max-w-[80px] h-auto mb-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Hub Section */}
        <div className="container relative bg-[#EBEDEF] px-6 sm:px-10 md:px-16 lg:px-[100px] py-10 sm:py-14 md:py-[80px] rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] mx-auto overflow-hidden">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-blue-600 mb-8">
            Education Hub
          </h3>

          {/* Top Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {educationItems.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] shadow-lg overflow-hidden cursor-pointer h-[220px] sm:h-[280px] md:h-[320px] lg:h-[371px]"
              >
                {idx === 2 ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex flex-col items-center justify-center p-6 relative">
                    <h4 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-4">
                      Try Free <br /> Demo
                    </h4>
                    <p className="text-white text-xs sm:text-sm md:text-base text-center mb-6 max-w-[280px] leading-relaxed">
                      Learn to trade the markets or test your trading
                      strategies.
                    </p>
                    <div className="bg-white rounded-full h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center">
                      <span className="text-blue-600 text-xl sm:text-2xl font-bold">
                        ↗
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#006EFF]/90 via-[#006EFF]/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex justify-between items-end text-white">
                      <span className="font-bold text-sm sm:text-base md:text-lg">
                        {item.title}
                      </span>
                      <button className="text-[#006EFF] bg-white rounded-full w-[45px] sm:w-[50px] md:w-[55px] h-[45px] sm:h-[50px] md:h-[55px] text-[28px] sm:text-[34px] md:text-[38px] flex items-center justify-center">
                        ↗
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            {/* Trading Courses */}
            <div className="relative rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] shadow-lg overflow-hidden cursor-pointer h-[240px] sm:h-[280px] lg:h-[315px] w-full lg:w-[491px]">
              <Image
                src={educationItems[3]?.image}
                alt="Trading Courses"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center text-white">
                <span className="font-bold text-base sm:text-lg md:text-xl">
                  Trading Courses
                </span>
                <button className="text-[#006EFF] bg-white rounded-full w-[45px] sm:w-[50px] md:w-[55px] h-[45px] sm:h-[50px] md:h-[55px] text-[28px] sm:text-[34px] md:text-[38px] flex items-center justify-center">
                  ↗
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-[25px] sm:rounded-[30px] lg:rounded-[40px] shadow-lg p-4 sm:p-6 h-auto min-h-[260px] sm:min-h-[300px] lg:h-[313px] w-full lg:w-[700px] flex flex-col">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-4">
                Upcoming Events
              </h3>

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

          {/* Background overlay */}
          <Image
            src="/images/overlay_img.png"
            alt="Overlay Image"
            width={700}
            height={700}
            className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-28 md:-bottom-36 md:-right-32 w-[300px] sm:w-[500px] md:w-[650px] lg:w-[540px] rotate-45 opacity-20 pointer-events-none select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionNine;
