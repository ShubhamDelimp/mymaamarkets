import Image from 'next/image';
import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => (
  <div className="flex items-center gap-3 sm:gap-4">
    <div className="border-l-2 border-[#0070f3] h-12 sm:h-16" />
    <div>
      <div className="text-[#0070f3] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{value}</div>
      <div className="text-[#1a3553] text-xs sm:text-sm md:text-base font-medium">
        {label.split(' ').map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </div>
    </div>
  </div>
);

export default function GlobalPresenceSection() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-transparent 
        lg:bg-[#d2e0e9]
        bg-[url('/images/globe.jfif')]
        bg-no-repeat bg-center bg-cover
      "
    >
      <div className="relative z-10 container mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left image (desktop only) */}
        <div className="hidden lg:flex justify-center items-center">
          <Image
            src="/images/globe.png"
            alt="Globe"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </div>

        {/* Right content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-full lg:max-w-xl space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1a3553] leading-tight">
            <span className="text-[#0070f3] font-bold">Global</span> Presence
            <br />
            <span className="text-[#0070f3] font-bold">Local</span> Support
          </h2>

          <p className="text-gray-500 text-sm sm:text-base md:text-base">
            At MY MAA MARKETS LTD, we specialize in connecting markets and facilitating
            trade across the globe. Our commitment to excellence and customer
            satisfaction sets us apart in the competitive world of international trade.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-6 sm:gap-y-8 w-full">
            <StatItem value="$2,500B+" label="Trading Volume" />
            <StatItem value="170,000+" label="Active Clients" />
            <StatItem value="35M+" label="Executed Orders" />
            <StatItem value="12,000+" label="Partners" />
          </div>

          <button className="bg-[#19c69a] text-white px-8 sm:px-10 py-3 sm:py-3 rounded-full font-bold text-sm sm:text-base shadow hover:bg-[#17b08e] transition w-fit">
            OPEN LIVE ACCOUNT
          </button>
        </div>

      </div>
    </section>
  );
}
