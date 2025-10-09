import Image from "next/image";
import React from "react";

const HomeSectionSeven = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="w-full mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:justify-start gap-y-12 lg:gap-x-20 relative">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 lg:pl-[clamp(50px,10vw,200px)] lg:pb-[230px] text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl leading-tight common-heading">
            <span className="text-[#006EFF] font-bold"> Easy </span>
            <span className="text-[#0F3D62] font-medium"> Deposits</span>
            <br className="hidden sm:block" />
            <span className="text-[#006EFF] font-bold"> Quick </span>
            <span className="text-[#0F3D62] font-medium"> Withdrawals </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto lg:mx-0">
            Fund your account with trusted methods. Fast processing, clear times,
            and no hidden fees from MY MAA Markets.
          </p>

          {/* ✅ Mobile / Tablet Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md sm:max-w-2xl lg:hidden mx-auto">
            <div className="bg-white shadow-md rounded-xl p-5 text-center">
              <h4 className="text-[#0F3D62] font-bold text-lg">
                Trusted <br /> Methods
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Bank transfer, major cards, and popular e-wallets.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5 text-center">
              <h4 className="text-[#0F3D62] font-bold text-lg">
                No <br /> surprises
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Clear processing times and no hidden platform fees from us.
              </p>
            </div>

            <div className="bg-white shadow-md rounded-xl p-5 text-center sm:col-span-2">
              <h4 className="text-[#0F3D62] font-bold text-lg">
                Security <br /> First
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                All transactions are safeguarded with secure payment gateways.
              </p>
            </div>
          </div>

          {/* ✅ Desktop Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-8 max-w-3xl">
            <div>
              <h4 className="text-[#0F3D62] font-bold mb-[10px]">
                Trusted <br /> Methods
              </h4>
              <p className="text-gray-400 text-sm">
                Bank transfer, major cards, and popular e-wallets.
              </p>
            </div>
            <div>
              <h4 className="text-[#0F3D62] font-bold mb-[10px]">
                No <br /> surprises
              </h4>
              <p className="text-gray-400 text-sm">
                Clear processing times and no hidden platform fees from us.
              </p>
            </div>
            <div>
              <h4 className="text-[#0F3D62] font-bold mb-[10px]">
                Security <br /> First
              </h4>
              <p className="text-gray-400 text-sm">
                All transactions are safeguarded with secure payment gateways.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#19C69A] hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full mt-6">
              DEPOSIT NOW
            </button>
          </div>

          <div className="hidden lg:block mt-10 lg:absolute bottom-0 z-10 custom-phone-img">
            <img
              src="/images/phone_img.png"
              alt="Mobile App"
              className=""
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex flex-col items-center lg:items-end lg:right-0">
          <Image
            src="/images/img-1.png"
            alt="Payment methods"
            width={960}
            height={905}
            className="rounded-s-2xl w-full sm:w-[80%] lg:w-auto"
          />

          <div className="mt-10 mb-16 flex flex-wrap justify-center items-center gap-4 lg:gap-6 w-full">
            <Image
              src="/images/rating.png"
              alt="Trustpilot"
              width={160}
              height={40}
              className="w-[120px] sm:w-[160px]"
            />
            <Image
              src="/images/yellow_rating.png"
              alt="Rating"
              width={140}
              height={40}
              className="w-[100px] sm:w-[140px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionSeven;
