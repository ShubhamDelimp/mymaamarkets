import Image from "next/image";
import React from "react";
 
const carouselItems = Array(6).fill(null); // Carousel cards
const educationItems = [
  { title: "Seminars", image: "/images/image_01.png" },
  { title: "Webinars", image: "/images/image_02.png" },
  { title: "Try Free Demo", image: "" },
  { title: "Trading Courses", image: "/images/image_03.png" },
 
];
 
const HomeSectionNine: React.FC = () => {
  return (
    <div className="pt-[150px] relative w-full bg-white py-16">
     <h2 className="container font-bold bg-white text-lg text-black lg:text-start text-center pl-5">Our Latest <span className="text-blue-600 font-bold">Recognitions</span></h2>
    <div className="pt-[50px] w-full  mx-auto flex flex-col bg-white items-center sm:px-6 space-y-10">
       
      <div className="relative w-full overflow-hidden">
        <div className="tech-slideshow flex py-4 gap-4">
          <div className="mover-1 flex gap-4">
            {[...carouselItems, ...carouselItems].map((_, idx) => (
              <div
                key={idx}
                className="relative w-[200px] sm:w-[240px] h-[14rem] sm:h-[16rem] flex-shrink-0 rounded-2xl overflow-hidden flex items-center justify-center"
              >
                {/* Outer border gradient */}
                <div
                  className="w-full h-full rounded-2xl p-[3px]"
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
                      alt="Leaf Decoration"
                      width={500}
 height={500}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[150px] sm:w-[200px] h-full opacity-70 pointer-events-none"
                    />
             
                    <Image
                      src="/images/winggsss.png"
                      alt="Golden Wreath"
                      width={500}
 height={500}
                      className="absolute inset-0 w-[65%] sm:w-[70%] h-[65%] sm:h-[70%] object-contain opacity-90 mx-auto my-auto"
                    />
                 
                    <div className="relative z-10 text-center px-2">
                      <p className="text-white text-[8px] font-extrabold uppercase tracking-widest drop-shadow broker">
                        TOP
                      </p>
                      <p className="text-white text-[8px] font-extrabold uppercase leading-tight drop-shadow broker">
                        REGULATED
                      </p>
                      <p className="text-white text-[8px] font-extrabold uppercase leading-tight drop-shadow broker">
                        BROKER
                      </p>
                      <div className="px-10 sm:px-20 flex justify-center">
                        <Image
                          src="/images/building_logo.png"
                          alt="Dubai Summit"
                          width={500}
 height={500}
                          className="max-w-[60px] sm:max-w-[80px] h-auto mb-2"
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
 
      {/* Education Hub */}
     <div className="container relative bg-[#EBEDEF] px-[100px] py-[80px] rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] mx-auto overflow-hidden">
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-blue-600 mb-8">
    Education Hub
  </h3>
 
  {/* Top Row - 3 Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 w-full relative z-10">
    {educationItems.slice(0, 3).map((item, idx) => (
      <div
        key={idx}
        className="relative rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-lg overflow-hidden cursor-pointer h-[240px] sm:h-[300px] md:h-[330px] lg:h-[371px]"
      >
     
        {idx === 2 ? (
          <div className="w-full h-full bg-gradient-to-br from-[#0066FF] to-[#0052CC] flex flex-col items-center justify-center p-6 sm:p-8 relative">
         
            <h4 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-center mb-4 sm:mb-6">
              Try Free<br />Demo
            </h4>
           
            <p className="text-white text-xs sm:text-sm md:text-base text-center mb-6 sm:mb-8 max-w-[280px] leading-relaxed">
              Learn to trade the markets or test your trading strategies.
            </p>
           
         
           
              <div className="bg-white rounded-full h-12 w-12 sm:h-14 sm:w-14 flex items-center justify-center mt-3 sm:-mb-7">
                <span className="text-blue-600 text-2xl sm:text-3xl font-bold">↗</span>
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
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex justify-between items-baseline text-white">
              <span className="font-bold text-sm sm:text-base mb-6 md:text-lg">
                {item.title}
              </span>
              <button className="text-[#006EFF] mb-6 bg-white rounded-full w-[55px] h-[55px] text-[38px] flex items-center justify-center">
                ↗
              </button>
            </div>
          </>
        )}
      </div>
    ))}
  </div>
 
        {/* Bottom Row - 2 Cards with Different Sizes */}
        <div className="flex flex-col lg:flex-row gap-6 w-full relative z-10">
          {/* Trading Courses Card - Left (491px width) */}
          <div className="relative rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-lg overflow-hidden cursor-pointer h-[240px] sm:h-[280px] lg:h-[315px] w-full lg:w-[491px] flex-shrink-0">
            <Image
              src={educationItems[3]?.image}
              alt="Trading Courses"
              width={500}
 height={500}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center text-white">
              <span className="font-bold text-lg sm:text-xl md:text-2xl lg:text-xl">
                Trading Courses
              </span>
              <button className="text-[#006EFF] mb-6 bg-white rounded-full w-[55px] h-[55px] text-[38px] flex items-center justify-center">
                ↗
              </button>
            </div>
          </div>
 
          {/* Upcoming Events Card - Right (701px width) */}
         <div className="bg-white rounded-[30px] sm:rounded-[35px] lg:rounded-[40px] shadow-lg p-4 sm:p-5 md:p-6 h-auto min-h-[280px] sm:min-h-[300px] lg:h-[313px] w-full lg:w-[700px] flex flex-col flex-shrink-0">
  {/* Header */}
  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
    Upcoming Events
  </h3>
 
  {/* Today's Event Button */}
  <button className="w-full bg-blue-600 text-white font-semibold py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl mb-3 text-left flex items-center justify-between hover:bg-blue-700 transition-colors text-xs sm:text-sm">
    <span className="truncate mr-2">20.08 DUBAI EXPO</span>
    <span className="text-base sm:text-lg flex-shrink-0">↗</span>
  </button>
 
  {/* Event List */}
  <div className="space-y-2 sm:space-y-2.5 flex-1">
    {/* Event 1 */}
    <div className="flex items-center justify-between py-2 sm:py-2.5 md:py-3 border rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 border-[#B0BCC9]">
      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
        <span className="text-[10px] sm:text-xs font-semibold text-gray-600 flex-shrink-0">21.08</span>
        <span className="text-xs sm:text-sm font-bold text-[#0F3D62] truncate">WEBINAR</span>
      </div>
      <button className="text-blue-600 text-base sm:text-lg font-bold hover:text-blue-700 flex-shrink-0 ml-2">
        ↗
      </button>
    </div>
 
    {/* Event 2 with ALL EVENTS */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center border border-[#B0BCC9] rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 gap-2 sm:gap-0">
      <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0 w-full sm:w-auto">
        <span className="text-[10px] sm:text-xs font-semibold text-gray-600 flex-shrink-0">25.08</span>
        <span className="text-xs sm:text-sm font-bold text-[#0F3D62] truncate">KUWAIT ROADSHOW</span>
      </div>
      <a href="#" className="text-[10px] sm:text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline whitespace-nowrap ml-auto sm:ml-2">
        ALL EVENTS
      </a>
    </div>
 
 
            </div>
          </div>
        </div>
 
        {/* Overlay Big Image in Right-Bottom Corner - Behind cards */}
        <Image
          src="/images/overlay_img.png"
          alt="overlay-img"
          width={500}
 height={500}
          className="absolute -bottom-36 -right-32 w-[500px] sm:w-[600px] md:w-[700px] lg:w-[540px] rotate-45 opacity-20 pointer-events-none select-none z-0"
        />
      </div>
    </div>
    </div>
  );
};
 
export default HomeSectionNine;
 
 