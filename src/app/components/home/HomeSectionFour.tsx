import Image from 'next/image'
import React from 'react'

const HomeSectionFour = () => {
  return (
    <section className="relative py-10 md:py-16 px-4 md:px-6 bg-white flex justify-center items-center">
      <div className="relative w-full container mx-auto rounded-3xl overflow-hidden shadow-lg border border-gray-100">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-blue-900 opacity-95"></div>

        {/* Background Image */}
        <Image
          src="/images/section4bg.png"
          alt="Abstract financial chart background"
          fill
          className="object-cover opacity-40"
          quality={80}
        />

        {/* Content */}
        <div className="relative z-10 py-8 md:py-16 px-6 md:px-12 lg:px-16 text-white text-center">
          {/* Headings */}
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-[50px] font-medium mb-0 leading-snug leading-[20px] mb-[25px] common-heading">
            Our <span className='font-extrabold'>Results</span> Are Proven <br /> in Numbers
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 md:gap-x-6">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <p className="our--result font-extrabold text-white leading-none">
                $2,500B+
              </p>
              <p className="text-[10px] sm:text-xs md:text-base font-medium text-gray-300 mt-2 uppercase tracking-wider">
                Trading Volume
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <p className="our--result font-extrabold text-white leading-none">
                170,000+
              </p>
              <p className="text-[10px] sm:text-xs md:text-base font-medium text-gray-300 mt-2 uppercase tracking-wider">
                Active Clients
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <p className="our--result font-extrabold text-white leading-none">
                35M+
              </p>
              <p className="text-[10px] sm:text-xs md:text-base font-medium text-gray-300 mt-2 uppercase tracking-wider">
                Executed Orders
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <p className="our--result font-extrabold text-white leading-none">
                12,000+
              </p>
              <p className="text-[10px] sm:text-xs md:text-base font-medium text-gray-300 mt-2 uppercase tracking-wider">
                Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSectionFour
