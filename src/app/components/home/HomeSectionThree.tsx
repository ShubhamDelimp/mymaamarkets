"use client";

import Image from "next/image";
import LearnMoreButton from "../common/LearnMoreButton";
import Link from "next/link";



interface FeatureBlockProps {
  title: string;
  description: string;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col h-full">
      <div>
     <h3 className="font-bold text-gray-900 mb-2 tading-mobile-app">
  {title}
</h3>
<p className="tading-mobile-app-p">
  {description}
</p>

      </div>
      <div className="text-right mt-auto">
        <LearnMoreButton />
      </div>
    </div>
  );
};

const HomeSectionThree = () => {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        <div className="flex justify-center lg:justify-start">
          <div className="">
            <div className="relative w-[300px] lg:w-[600px] h-[500px] lg:h-[700px]  overflow-hidden flex items-center justify-center "style={{
                background: "linear-gradient(180deg, rgba(244, 246, 248, 1) 0%, rgba(0,0,0,0) 50%)",
              }}>

              <Image
                src="/images/section3.png"
                alt="iPhone showing trading application"
                fill
                className="z-10 rounded-[28px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Features and CTAs */}
        <div className="grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-16">
          <FeatureBlock
            title="Regulated Broker"
            description="Our platform is regulated by the FSC (Financial Services Commission - Mauritius)."
          />

          <FeatureBlock
            title="Instant Withdrawals"
            description="Get your funds out quickly and easily with instant withdrawals."
          />

          <FeatureBlock
            title="Low Spreads & Zero Commissions"
            description="Cut your trading costs with our low spreads and zero commissions."
          />

          <FeatureBlock
            title="Advanced Trading Tools"
            description="Enhance your strategy with cutting-edge trading technology."
          />

          {/* Logos + Button Row */}
        <div className="col-span-2 flex flex-col sm:flex-row items-center justify-between gap-8 mt-4">
  {/* Logos */}
  <div className="flex items-center space-x-6">
    <Image
      src="/images/sec3_2.png"
      alt="Financial Services Commission Mauritius Logo"
      width={120}
      height={30}
      className="object-contain"
    />
    <Image
      src="/images/sec3_3.png"
      alt="Dubai Chamber of Commerce Logo"
      width={120}
      height={30}
      className="object-contain"
    />
  </div>

  {/* Button */}
  <Link href="https://cp.mymaamarkets.com/Home/Signup" passHref>
  <button className="mt-4 sm:mt-0 px-6 py-3 bg-[#1bbf8a] text-white font-semibold rounded-full shadow hover:bg-green-600 transition uppercase text-sm whitespace-nowrap cursor-pointer">
    OPEN LIVE ACCOUNT
  </button>
  </Link>
</div>

        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;





// "use client";

// import Image from "next/image";
// import LearnMoreButton from "../common/LearnMoreButton";
// import { HomepageData } from "@/app/types/homepage";


// interface FeatureBlockProps {
//   title: string;
//   description: string;
// }

// const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, description }) => {
//   return (
//     <div className="flex flex-col h-full">
//       <div>
//         <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
//         <p className="text-gray-600 text-base mb-4">{description}</p>
//       </div>
//       <div className="mt-auto">
//         <LearnMoreButton />
//       </div>
//     </div>
//   );
// };

// interface HomeSectionThreeProps {
//   home_section_three: HomepageData["data"]["home_section_three"];
// }
// const HomeSectionThree: React.FC<HomeSectionThreeProps> = ({ home_section_three }) => {
//   console.log("fihome_section_three----", home_section_three)
//   return (
//     <section className="relative py-20 bg-white">
//       <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//         {/* LEFT SIDE: iPhone Mockup */}
//         <div className="flex justify-center lg:justify-start pt-4">
//           <div className="bg-gray-50 rounded-[44px] p-4 shadow-xl">
//             <div className="relative w-72 h-[480px] bg-white border-[12px] border-gray-900 rounded-[40px] shadow-2xl overflow-hidden flex items-center justify-center">
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-xl z-20"></div>

//               <Image
//                 src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${home_section_three.image.image.url}`}
//                 alt={home_section_three.image?.image.name || "Default Image"}
//                 fill
//                 className="z-10 rounded-[28px] object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE: Features and CTAs */}
//         <div className="pt-16 grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-16">
//           {home_section_three.features.map((feature) => (
//             <FeatureBlock
//               key={feature.id}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}

//           {/* Logos + Button Row */}
//           <div className="col-span-2 flex items-center justify-start gap-16 mt-4">
//             <div className="flex items-center space-x-6">
//               {home_section_three.logos.map((logo) => (
//                 <Image
//                   key={logo.id}
//                   src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${logo.url}`}
//                   alt={logo.name}
//                   width={120}
//                   height={30}
//                   className="object-contain"
//                 />
//               ))}
//             </div>

//             <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow hover:bg-green-600 transition uppercase text-sm whitespace-nowrap">
//               {home_section_three.cta_button.text}
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeSectionThree;
