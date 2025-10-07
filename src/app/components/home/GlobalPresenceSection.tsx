// import React from 'react';


// const StaticImage = ({ src, alt, className, style }) => (
//   <Image src={src} alt={alt} className={className} style={{...style, objectFit: 'contain'}} />
// );

// // Component for the stat boxes on the right side
// const StatItem = ({ value, label }) => (
//   <div>
//     {/* Text color changed to match the bright blue in the source image */}
//     <p className="text-3xl font-extrabold text-blue-600 mb-0 leading-tight">{value}</p>
//     <p className="text-sm text-gray-500 mt-1">{label}</p>
//   </div>
// );


// export default function GlobalPresenceSection() {
//   const IMAGES = {
//     GLOBAL_PRESENCE_BG: "/images/globe.png", 
//   };
  
//   return (
//     <section className="relative bg-white overflow-hidden">
      
//       <div className="absolute inset-0">
//         <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[150%] lg:w-2/4 h-[1000px] lg:h-[700px] pointer-events-none">
//           <StaticImage
//             src={IMAGES.GLOBAL_PRESENCE_BG}
//             alt="3D render of a glowing global network"
//             className="absolute top-0 right-0 w-full h-full object-cover"
//             style={{ 
//               objectPosition: 'right center', 
//               filter: 'brightness(1.1) contrast(1.1)', 
//             }} 
//           />
//         </div>

//       </div>


//       <div className="container mx-auto px-6 relative z-10">
        
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
//           <div className="hidden lg:block h-full">
//           </div>
          
//           <div className="lg:pt-12 bg-gradient-to-r from-[white/10] to-[#f0fcff]">
            
//             {/* Heading */}
//             <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
//               Global Presence
//             </h1>
//             <h2 className="text-5xl font-extrabold text-blue-600 mt-2 mb-6">
//               Local Support
//             </h2>

//             {/* Description Text */}
//             <p className="text-gray-700 max-w-lg text-base mb-12">
//               At MY MAA MARKETS LTD, we specialize in connecting markets and facilitating
//               trade across the globe. Our commitment to excellence and customer satisfaction
//               sets us apart in the competitive world of international trade.
//             </p>

//             {/* Stats Grid (2x2 layout) */}
//             <div className="grid grid-cols-2 gap-y-10 gap-x-8 max-w-md mb-12">
//               <StatItem value="$2,500B+" label="Trading Volume" />
//               <StatItem value="170,000+" label="Active Clients" />
//               <StatItem value="35M+" label="Executed Orders" />
//               <StatItem value="12,000+" label="Partners" />
//             </div>

//             {/* Open Live Account Button */}
//             {/* Corrected button style: subtle shadow, rounded-full, bright green */}
//             <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition uppercase text-sm whitespace-nowrap">
//               OPEN LIVE ACCOUNT
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface StatItemProps {
  value: string;
  label: string;
}
const StatItem = ({ value, label}: StatItemProps ) => (
  <div className="text-center sm:text-left">
    <p className="text-2xl sm:text-3xl font-extrabold text-blue-600 mb-0">{value}</p>
    <p className="text-sm text-gray-500 mt-1">{label}</p>
  </div>
);

export default function GlobalPresenceSection() {
  return (
    <section
      className="
       relative overflow-hidden
    bg-transparent 
    lg:bg-[#d2e0e9]
    bg-[url('/images/globe.jfif')]  // Add your image path
    bg-no-repeat bg-center bg-cover
      "
    >

      <div className="relative z-10 container mx-auto px-6 lg:py-50 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
    
  ">
        {/* Left side image for large screens */}
        <div className="hidden lg:flex justify-center items-center">
          <Image
            src="/images/globe.png"
            alt="Globe"
            width={500}
          height={500}
            className="max-w-full h-auto"
          />
        </div>

        {/* Right side content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl py-30">
            <h2 className="text-5xl font-serif font-normal text-[#1a3553] leading-tight mb-4">
            <span className="text-[#0070f3] font-bold">Global</span> Presence
            <br />
            <span className="text-[#0070f3] font-bold">Local</span> Support
            </h2>
            <p className="text-gray-500 text-base mb-8">
                At MY MAA MARKETS LTD, we specialize in connecting markets and facilitating
                trade across the globe. Our commitment to excellence and customer
                satisfaction sets us apart in the competitive world of international trade.
            </p>
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-10 w-full">
            <div className="flex items-center gap-4">
            <div className="border-l-2 border-[#0070f3] h-12" />
            <div>
            <div className="text-[#0070f3] text-3xl md:text-4xl font-bold leading-tight">
                      $2,500B+
            </div>
            <div className="text-[#1a3553] text-sm font-medium">
                      Trading
            <br />
                      Volume
            </div>
            </div>
            </div>
            <div className="flex items-center gap-4">
            <div className="border-l-2 border-[#0070f3] h-12" />
            <div>
            <div className="text-[#0070f3] text-3xl md:text-4xl font-bold leading-tight">
                      170,000+
            </div>
            <div className="text-[#1a3553] text-sm font-medium">
                      Active
            <br />
                      Clients
            </div>
            </div>
            </div>
            <div className="flex items-center gap-4">
            <div className="border-l-2 border-[#0070f3] h-12" />
            <div>
            <div className="text-[#0070f3] text-3xl md:text-4xl font-bold leading-tight">
                      35M+
            </div>
            <div className="text-[#1a3553] text-sm font-medium">
                      Executed
            <br />
                      Orders
            </div>
            </div>
            </div>
            <div className="flex items-center gap-4">
            <div className="border-l-2 border-[#0070f3] h-12" />
            <div>
            <div className="text-[#0070f3] text-3xl md:text-4xl font-bold leading-tight">
                      12,000+
            </div>
            <div className="text-[#1a3553] text-sm font-medium">Partners</div>
            </div>
            </div>
            </div>
            <button className="bg-[#19c69a] text-white px-10 py-3 rounded-full font-bold text-base shadow hover:bg-[#17b08e] transition w-fit">
                OPEN LIVE ACCOUNT
            </button>
            </div>
      </div>
    </section>
  );
}
