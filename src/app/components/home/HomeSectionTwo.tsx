import Image from "next/image";

export default function HomeSectionTwo() {
  return (
    <section className="bg-white py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-12 xl:px-16">
      <div className="xl:max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* LEFT TEXT CONTENT */}
        <div className="flex flex-col justify-center items-center text-center lg:justify-start lg:items-start lg:text-start w-full lg:w-[45%]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-[#0F3D62] mb-3 common-heading">
            Invest in the <br />
            <span className="text-blue-600 font-extrabold">Best Performing</span>
            <br /> Markets
          </h2>
          <p className="mt-3 sm:mt-5 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            You can trade on major markets <br className="hidden sm:block" />
            across 5 asset classes including <br className="hidden sm:block" />
            Forex, Indices, Metals, Stocks and Crypto.
          </p>
        </div>

        {/* RIGHT CARDS (Top Row) */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full justify-center place-items-center lg:pr-12">
          {/* Forex Card */}
          <div className="bg-[#f7fafc] rounded-3xl p-4 sm:p-6 shadow-md flex flex-col w-full">
            <div className="text-[#1a3553] text-lg sm:text-xl md:text-2xl font-Outfit font-bold mb-2">Forex</div>
            <div className="text-[#1a3553] font-medium mb-4 text-xs sm:text-sm md:text-base">
              40+ currency pairs – majors, crosses & exotics
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/rectangle129.png"
                alt="Forex"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
                unoptimized
              />
              <span className="absolute bottom-3 right-3 bg-[#0b3553] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg cursor-pointer">
                <img src="/images/group1597880849.png" alt="" width="55" height="55" />
              </span>
            </div>
          </div>

          {/* Metals Card */}
          <div className="bg-[#f7fafc] rounded-3xl p-4 sm:p-6 shadow-md flex flex-col w-full">
            <div className="text-[#1a3553] text-lg sm:text-xl md:text-2xl font-Outfit font-bold mb-2">Metals</div>
            <div className="text-[#1a3553] font-medium mb-4 text-xs sm:text-sm md:text-base">
              40+ currency pairs – majors, crosses & exotics
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/rectangle126.png"
                alt="Metals"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
                unoptimized
              />
              <span className="absolute bottom-3 right-3 bg-[#0b3553] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg cursor-pointer">
                <img src="/images/group1597880849.png" alt="" width="55" height="55" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA + LOWER ROW */}
      <div className="xl:max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-start gap-10 mt-10">
        {/* CTA BUTTON */}
        <div className="flex md:flex-col items-center lg:items-start justify-start mb-6 md:mb-0 w-full lg:w-auto">
          <button className="bg-[#19c69a] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold text-sm sm:text-base shadow hover:bg-[#17b08e] transition">
            OPEN LIVE ACCOUNT
          </button>
        </div>

        {/* LOWER CARDS */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {/* Shares */}
          <div className="bg-[#f7fafc] rounded-3xl p-4 sm:p-6 shadow-md flex flex-col">
            <div className="text-[#1a3553] text-lg sm:text-xl md:text-2xl font-Outfit font-bold mb-2">Shares</div>
            <div className="text-[#1a3553] font-medium mb-4 text-xs sm:text-sm md:text-base">
              40+ currency pairs – majors, crosses & exotics
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/rectangle131.png"
                alt="Shares"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
                unoptimized
              />
              <span className="absolute bottom-3 right-3 bg-[#0b3553] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg cursor-pointer">
                <img src="/images/group1597880849.png" alt="" width="55" height="55" />
              </span>
            </div>
          </div>

          {/* Indices */}
          <div className="bg-[#f7fafc] rounded-3xl p-4 sm:p-6 shadow-md flex flex-col">
            <div className="text-[#1a3553] text-lg sm:text-xl md:text-2xl font-Outfit font-bold mb-2">Indices</div>
            <div className="text-[#1a3553] font-medium mb-4 text-xs sm:text-sm md:text-base">
              40+ currency pairs – majors, crosses & exotics
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/4.png"
                alt="Indices"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
                unoptimized
              />
              <span className="absolute bottom-3 right-3 bg-[#0b3553] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg cursor-pointer">
                <img src="/images/group1597880849.png" alt="" width="55" height="55" />
              </span>
            </div>
          </div>

          {/* Crypto */}
          <div className="bg-[#f7fafc] rounded-3xl p-4 sm:p-6 shadow-md flex flex-col">
            <div className="text-[#1a3553] text-lg sm:text-xl md:text-2xl font-Outfit font-bold mb-2">Crypto</div>
            <div className="text-[#1a3553] font-medium mb-4 text-xs sm:text-sm md:text-base">
              40+ currency pairs – majors, crosses & exotics
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/5.png"
                alt="Crypto"
                width={400}
                height={250}
                className="w-full h-auto object-cover"
                unoptimized
              />
              <span className="absolute bottom-3 right-3 bg-[#0b3553] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg cursor-pointer">
                <img src="/images/group1597880849.png" alt="" width="55" height="55" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
