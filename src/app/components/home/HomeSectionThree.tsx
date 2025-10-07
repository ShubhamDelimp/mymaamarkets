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
        <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg md:text-xl leading-snug tading-mobile-app">
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed tading-mobile-app-p">
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
    <section className="relative bg-white py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        
        {/* LEFT SIDE IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="relative w-[260px] sm:w-[350px] md:w-[450px] lg:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden rounded-[28px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(244,246,248,1) 0%, rgba(0,0,0,0) 50%)",
            }}
          >
            <Image
              src="/images/section3.png"
              alt="iPhone showing trading application"
              fill
              className="object-contain z-10"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-14 lg:gap-x-12">
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

          {/* Logos + CTA Row */}
          <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 mt-6">
            {/* Logos */}
            <div className="flex items-center justify-center sm:justify-start gap-6 flex-wrap">
              <Image
                src="/images/sec3_2.png"
                alt="Financial Services Commission Mauritius Logo"
                width={120}
                height={30}
                className="object-contain w-28 sm:w-32 md:w-36 h-auto"
              />
              <Image
                src="/images/sec3_3.png"
                alt="Dubai Chamber of Commerce Logo"
                width={120}
                height={30}
                className="object-contain w-28 sm:w-32 md:w-36 h-auto"
              />
            </div>

            {/* Button */}
            <Link href="https://cp.mymaamarkets.com/Home/Signup" passHref>
              <button className="mt-4 sm:mt-0 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-[#1bbf8a] text-white font-semibold rounded-full shadow hover:bg-green-600 transition uppercase text-xs sm:text-sm md:text-base whitespace-nowrap">
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
