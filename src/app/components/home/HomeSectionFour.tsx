import Image from 'next/image'
import React from 'react'

const HomeSectionFour = () => {
  return (
    <section className="relative py-16 px-6 bg-white flex justify-center items-center">
      <div className="relative w-full container mx-auto rounded-3xl overflow-hidden shadow-lg border border-gray-100">
        <div className="absolute inset-0 bg-blue-900 opacity-95"></div>

        <Image
          src="/images/section4bg.png" 
          alt="Abstract financial chart background"
          layout="fill"
          objectFit="cover"
          quality={80} 
          className="opacity-40" 
        />

        <div className="relative z-10 py-8 lg:py-16 px-8 md:px-12 lg:px-16 text-white text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-0 leading-snug">
            Our Results Are Proven
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold lg:mb-10 mb-8 leading-snug"> 
            in Numbers
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-6">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none">
                $2,500B+
              </p>
              <p className="text-base font-medium text-gray-300 mt-3 uppercase tracking-wider">
                Trading Volume
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none">
                170,000+
              </p>
              <p className="text-base font-medium text-gray-300 mt-3 uppercase tracking-wider">
                Active Clients
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none">
                35M+
              </p>
              <p className="text-base font-medium text-gray-300 mt-3 uppercase tracking-wider">
                Executed Orders
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center">
              <p className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none">
                12,000+
              </p>
              <p className="text-base font-medium text-gray-300 mt-3 uppercase tracking-wider">
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
