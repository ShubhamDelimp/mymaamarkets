import Image from "next/image";
import React from "react";
 
const events = [
  { id: 1, imgUrl: "/images/image_02.jpg", title: "Event Name", subtitle: "Location - Date" },
  { id: 2, imgUrl: "/images/image_03.jpg", title: "Event Name", subtitle: "Location - Date" },
  { id: 3, imgUrl: "/images/image_04.jpg", title: "Event Name", subtitle: "Location - Date" },
  { id: 4, imgUrl: "/images/image_01.jpg", title: "Event Name", subtitle: "Location - Date" },
  { id: 5, imgUrl: "/images/image_01.jpg", title: "Event Name", subtitle: "Location - Date" },
  { id: 6, imgUrl: "/images/image_05.jpg", title: "Event Name", subtitle: "Location - Date" },
  { id: 7, imgUrl: "/images/image_01.jpg", title: "Event Name", subtitle: "Location - Date" },
  { id: 8, imgUrl: "/images/image_06.jpg", title: "Event Name", subtitle: "Location - Date" },
];
 
const HomeSectionSix = () => {
  return (
    <div className="w-full flex justify-center pb-16 px-4 bg-white hidden">
      <div className="relative w-full flex flex-col gap-8">
        {/* First Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Card event={events[3]} size="small" translateY="-1/4" />
          <Card event={events[0]} size="medium" translateY="-1/6" />
          <Card event={events[1]} size="big" />
          <Card event={events[2]} size="medium" translateY="-1/6" />
          <Card event={events[4]} size="small" translateY="-1/4" />
        </div>
 
        {/* Second Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Spacer for Event 4 */}
          <div className="hidden sm:block sm:w-[374px]"></div>
 
          {/* Event 6 - space from bottom */}
          <Card event={events[5]} size="medium" translateY="-1/6" className="sm:mb-8 mb-4" />
 
          {/* Event 7 - space from top */}
          <Card event={events[6]} size="medium" className="sm:mt-8 mt-4" />
 
          {/* Event 8 - space from bottom */}
          <Card event={events[7]} size="medium" translateY="-1/6" className="sm:mb-8 mb-4" />
 
          {/* Spacer for Event 5 */}
          <div className="hidden sm:block sm:w-[374px]"></div>
        </div>
      </div>
    </div>
  );
};
 
type CardProps = {
  event: { id: number; imgUrl: string; title: string; subtitle: string };
  size: "small" | "medium" | "big";
  translateY?: string;
  className?: string;
};
 
const Card: React.FC<CardProps> = ({ event, size, translateY = "0", className = "" }) => {
  const sizes = {
    small: { w: "w-full sm:w-[374px]", h: "h-auto sm:h-[245px]", img: "w-full sm:w-[200px] h-auto sm:h-[320px]" },
    medium: { w: "w-full sm:w-[374px]", h: "h-auto sm:h-[245px]", img: "w-full sm:w-[200px] h-auto sm:h-[370px]" },
    big: { w: " w-full sm:w-[524px]", h: "sm:h-[370px]", img: "w-full sm:w-[270px] sm:h-[280px]" },
  };
 
  const translateClass =
    translateY === "-1/6"
      ? "sm:-translate-y-1/6"
      : translateY === "-1/4"
      ? "sm:-translate-y-1/4"
      : "";
 
  return (
    <div
      className={`
        relative rounded-xl m-1 shadow-lg bg-gradient-to-t from-blue-500 to-blue-200 p-1 px-5 flex flex-col items-center justify-end
        transition-all duration-300
        ${sizes[size].w} ${sizes[size].h}
        ${translateClass}
        ${size === "big" ? "z-10" : ""}
        ${className}
      `}
    >
     
      <Image
        src={event.imgUrl}
        alt={event.title}
        className={`object-cover rounded-lg mt-4 ${sizes[size].img}`}
        width={900}
        height={800}
      />
      <div className="text-center px-4 py-4">
        <h4 className="font-bold text-white text-base mb-1">{event.title}</h4>
        <p className="text-xs text-white">{event.subtitle}</p>
      </div>
    </div>
  );
};
 
export default HomeSectionSix;
 
 