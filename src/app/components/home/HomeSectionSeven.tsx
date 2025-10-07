import Image from "next/image";
import React from "react";
 
const HomeSectionSeven = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="w-full mx-auto gap-x-20 px-6 flex flex-col lg:flex-row lg:items-center lg:justify-start space-y-12 lg:space-y-0 relative">
        {/* Left Content */}
        <div className="lg:w-1/2  space-y-6 deposit-sec lg:pl-[200px] lg:pb-[230px]">
          <h2 className="text-4xl font-semibold lg:text-start text-center">
            <span className="text-[#006EFF] font-bold">Easy </span> <span className="text-[#0F3D62] font-medium">Deposits</span><br />
            <span className="text-[#006EFF] font-bold">Quick</span> <span className="text-[#0F3D62] font-medium">Withdrawals</span>
          </h2>
 
            <p className="text-gray-400 lg:max-w-lg lg:text-start text-center">
              Fund your account with trusted methods. Fast processing, clear times,
              and no hidden fees from MY MAA Markets.
            </p>
  
            {/* Features grid */}
          {/* ✅ Mobile / Tablet Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full lg:hidden">
            <div className="bg-white shadow-md rounded-xl p-4 text-center">
              <h4 className="text-[#0F3D62] font-extrabold text-lg">
                Trusted <br /> Methods
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Bank transfer, major cards, and popular e-wallets.
              </p>
            </div>
          
            <div className="bg-white shadow-md rounded-xl p-4 text-center">
              <h4 className="text-[#0F3D62] font-extrabold text-lg">
                No <br /> surprises
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                Clear processing times and no hidden platform fees from us.
              </p>
            </div>
          
            <div className="bg-white shadow-md rounded-xl p-4 text-center sm:col-span-2">
              <h4 className="text-[#0F3D62] font-extrabold text-lg">
                Security <br /> First
              </h4>
              <p className="text-gray-400 text-sm mt-2">
                All transactions are safeguarded with secure payment gateways.
              </p>
            </div>
          </div>
  
          {/* ✅ Desktop Layout (previous design) */}
          <div className="hidden lg:grid grid-cols-3 gap-8 max-w-3xl">
            <div>
              <h4 className="text-[#0F3D62] font-extrabold">
                Trusted <br /> Methods
              </h4>
              <p className="text-gray-400 text-sm">
                Bank transfer, major cards, and popular e-wallets.
              </p>
            </div>
            <div>
              <h4 className="text-[#0F3D62] font-extrabold">
                No <br /> surprises
              </h4>
              <p className="text-gray-400 text-sm">
                Clear processing times and no hidden platform fees from us.
              </p>
            </div>
            <div>
              <h4 className="text-[#0F3D62] font-extrabold">
                Security <br /> First
              </h4>
              <p className="text-gray-400 text-sm">
                All transactions are safeguarded with secure payment gateways.
              </p>
            </div>
          </div>
  
          <div className="flex justify-center items-center lg:items-start lg:justify-start">
            <button className="bg-[#19C69A] hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full max-w-max mt-6">
              DEPOSIT NOW
            </button>
          </div>
          <div className="mt-10 lg:absolute bottom-0 z-10">
            <Image
              src="/images/phone_img.png"
              alt="Mobile App"
              width={890}
              height={602}
              className=" mx-auto lg:mx-0"
            />
          </div>
        </div>
 
        {/* Right Content */}
        <div className="lg:right-0 rounded-s-2xl lg:top-0 lg:h-full flex flex-col items-end relative">
          {/* Payment logos */}
          <Image
            src="/images/img-1.png"
            alt="Payment methods"
            width={960}
 height={905}
            className="rounded-s-2xl"
          />
 
          {/* Overlay 2-column grid */}
         
 
          {/* Ratings */}
          <div className="lg:bottom-30 mt-20 mb-[100px] flex items-center justify-center space-x-6 w-full">
            <Image src="/images/rating.png" alt="Trustpilot" className="w-50"  width={800}
                  height={900} />
            <Image
              src="/images/yellow_rating.png"
              alt="Rating"
              className="w-40"
                                    width={800}
                height={900}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default HomeSectionSeven;
 
 