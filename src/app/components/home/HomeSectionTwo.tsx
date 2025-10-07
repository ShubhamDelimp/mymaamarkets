// "use client";

// import { HomepageData } from "@/app/types/homepage";
// import { ArrowUpRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";


// type HomeSectionTwoProps = {
//   HomeSectionTwo: HomepageData["data"]["HomeSectionTwo"];
// };

// type CardType = {
//   id: number;
//   title: string;
//   description: string;
//   image: {
//     name: string;
//     url: string;
//   };
// };


// function Card({
//   title,
//   description,
//   image,
//   alt,
// }: {
//   title: string;
//   description: string;
//   image: string;
//   alt?: string;
// }) {
//   return (
//     <div className="p-3 sm:p-4 bg-gray-50 rounded-3xl shadow-lg transition hover:shadow-xl h-full flex flex-col">

//       {/* Top Text Content Area */}
//       <div className="p-2 pb-4 sm:pb-6">
//         <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{title}</h3>
//         <p className="text-gray-700 text-sm sm:text-base">{description}</p>
//       </div>

//       {/* Image Area */}
//       <div className="relative w-full aspect-[3/2] sm:aspect-[4/3] mt-auto">
//         <Image
//           src={image}
//           alt={alt || title}
//           className="w-full h-full rounded-2xl object-cover"
//           width={900}
//           height={800}
//         />

//         {/* Arrow Icon Button */}
//         <button
//           className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 p-2 sm:p-3 bg-blue-900 rounded-full shadow-lg transition hover:bg-blue-800"
//           aria-label={`Explore ${title}`}
//         >
//           <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//         </button>
//       </div>
//     </div>

//   );
// }
// export default function HomeSectionTwo({
//   HomeSectionTwo,
// }: HomeSectionTwoProps) {
//   if (!HomeSectionTwo) return null;

//   const section = HomeSectionTwo[0]; // First element in the array
//   const cards: CardType[] = section.cards; // <-- strongly typed
//   console.log("HomeSectionTwo----Cards---->", cards); return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
//         {/* LEFT SIDE */}
//         <div className="pt-8 flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-start">
//           <h2 className="text-5xl font-extrabold leading-tight text-gray-900 text-center lg:text-start">
//             {section.title1} <br />
//             <span className="text-blue-600">{section.title2}</span>
//             {section.title3 && (
//               <>
//                 <br /> {section.title3}
//               </>
//             )}
//           </h2>
//           <p className="mt-5 text-gray-600">{section.description}</p>
//           <Link href="https://cp.mymaamarkets.com/Home/Signup" className="flex justify-center lg:justify-start" passHref>
//             <button className="text-center mt-8 px-6 py-3 bg-[#1bbf8a] text-white text-sm font-semibold rounded-full shadow hover:bg-green-600 transition uppercase cursor-pointer">
//               {section.button_name}
//             </button>
//           </Link>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex flex-col gap-6 w-full pt-4">
//           <div className="grid grid-cols-2 gap-6 text-black">
//             {cards.slice(0, 2).map((card) => (
//               <Card
//                 key={card.id}
//                 title={card.title}
//                 description={card.description}
//                 image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.image.url}`}
//                 alt={card.image.name}
//               />
//             ))}
//           </div>
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 text-black">
//             {cards.slice(2).map((card) => (
//               <Card
//                 key={card.id}
//                 title={card.title}
//                 description={card.description}
//                 image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.image.url}`}
//                 alt={card.image.name}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
 
export default function HomeSectionTwo() {
  return (
    <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
      <div className="xl:max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Left Content */}
        <div className="pt-8 flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-start">
  <h2 className="text-5xl font-extrabold leading-tight text-gray-900 text-center lg:text-start">
    Invest in the{/* */} <br />
    <span className="text-blue-600">Best Performing</span>
    <br /> {/* */}Markets
  </h2>
  <p className="mt-5 text-gray-600">
  You can trade on major markets <br/> across  5 assets classes including <br/>Forex, Indices, Metals, Stocks and Crypto.
  </p>
 
</div>
 
 
        {/* Right Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-auto justify-center place-items-center lg:pr-[100px]">
 
          {/* Card 1: Forex */}
          <div className="bg-[#f7fafc] rounded-3xl p-4 sm:p-6 shadow-md flex flex-col">
            <div className="text-[#1a3553] text-lg sm:text-xl md:text-2xl font-Outfit font-bold mb-2">Forex</div>
            <div className="text-[#1a3553] font-medium mb-4 text-xs sm:text-sm md:text-base">
              40+ currency pairs – majors, crosses & exotics
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/rectangle129.png"
                alt="Forex"
                width={220}
                height={140}
                className="w-full h-auto object-cover"
                unoptimized
              />
              <span className="absolute bottom-3 right-3 bg-[#0b3553] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg cursor-pointer">
              <img alt="" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" className="app_hpChild14__IHH_m"  src="/images/group1597880849.png" />
              </span>
            </div>
          </div>
 
          {/* Card 2: Metals */}
          <div className="bg-[#f7fafc] rounded-3xl p-4 sm:p-6 shadow-md flex flex-col">
            <div className="text-[#1a3553] text-lg sm:text-xl md:text-2xl font-Outfit font-bold mb-2">Metals</div>
            <div className="text-[#1a3553] font-medium mb-4 text-xs sm:text-sm md:text-base">
              40+ currency pairs – majors, crosses & exotics
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/rectangle126.png"
                alt="Metals"
                width={220}
                height={140}
                className="w-auto h-auto object-cover"
                unoptimized
              />
              <span className="absolute bottom-3 right-3 bg-[#0b3553] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg cursor-pointer">
              <img alt="" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" className="app_hpChild14__IHH_m"  src="/images/group1597880849.png" />
              </span>
            </div>
          </div>
        </div>
      </div>
 
      {/* CTA + Other Cards */}
      <div className="xl:max-w-7xl  w-full mx-auto flex flex-col lg:flex-row items-start gap-10 mt-10 px-0">
        {/* CTA Button */}
        <div className="flex md:flex-col items-start justify-start mb-6 md:mb-0">
          <button className="bg-[#19c69a] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow hover:bg-[#17b08e] transition">
            OPEN LIVE ACCOUNT
          </button>
        </div>
       
        {/* Right Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 w-auto">
          {/* Shares Card */}
          <div className="bg-[#f7fafc] rounded-3xl p-4 sm:p-6 shadow-md flex flex-col">
            <div className="text-[#1a3553] text-lg sm:text-xl md:text-2xl font-Outfit font-bold mb-2">Shares</div>
            <div className="text-[#1a3553] font-medium mb-4 text-xs sm:text-sm md:text-base">
              40+ currency pairs – majors, crosses & exotics
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/rectangle131.png"
                alt="Shares"
                width={220}
                height={140}
                className="w-auto  h-auto object-cover"
                unoptimized
              />
              <span className="absolute bottom-3 right-3 bg-[#0b3553] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg cursor-pointer">
              <img alt="" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" className="app_hpChild14__IHH_m"  src="/images/group1597880849.png" />
              </span>
            </div>
          </div>
 
          {/* Indices Card */}
          <div className="bg-[#f7fafc] rounded-3xl p-4 sm:p-6 shadow-md flex flex-col">
            <div className="text-[#1a3553] text-lg sm:text-xl md:text-2xl font-Outfit font-bold mb-2">Indices</div>
            <div className="text-[#1a3553] font-medium mb-4 text-xs sm:text-sm md:text-base">
              40+ currency pairs – majors, crosses & exotics
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/4.png"
                alt="Indices"
                width={220}
                height={140}
                className="w-auto  h-auto object-cover"
                unoptimized
              />
              <span className="absolute bottom-3 right-3 bg-[#0b3553] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg cursor-pointer">
              <img alt="" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" className="app_hpChild14__IHH_m"  src="/images/group1597880849.png" />
              </span>
            </div>
          </div>
 
          {/* Crypto Card */}
          <div className="bg-[#f7fafc] rounded-3xl p-4 sm:p-6 shadow-md flex flex-col">
            <div className="text-[#1a3553] text-lg sm:text-xl md:text-2xl font-Outfit font-bold mb-2">Crypto</div>
            <div className="text-[#1a3553] font-medium mb-4 text-xs sm:text-sm md:text-base">
              40+ currency pairs – majors, crosses & exotics
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/5.png"
                alt="Crypto"
                width={220}
                height={140}
                className="w-auto h-auto object-cover"
                unoptimized
              />
              <span className="absolute bottom-3 right-3 bg-[#0b3553] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg cursor-pointer">
              <img alt="" loading="lazy" width="55" height="55" decoding="async" data-nimg="1" className="app_hpChild14__IHH_m"  src="/images/group1597880849.png" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
 