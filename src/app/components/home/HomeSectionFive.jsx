"use client";

import React from 'react';
import { Monitor, Globe, Smartphone } from 'lucide-react';
import Image from 'next/image';

const PlatformIcon = ({ icon: Icon, label }) => (
  <div className="flex space-x-3">
    <Icon className="w-9 h-9 text-blue-500 flex-shrink-0" strokeWidth={2} />
    <span className="text-gray-700 text-lg font-medium">{label}</span>
  </div>
);

const DownloadButton = ({ platform }) => (
  <a href="#" className="flex border border-gray-300 p-2 rounded-lg transition hover:shadow-md">
    <div className="flex flex-col justify-center items-center text-center">
      <span className="text-[10px] text-gray-600 leading-none">Download on the</span>
      <span className="text-sm font-semibold text-gray-800 leading-tight">
        {platform === 'AppStore' ? 'App Store' : 'Google Play'}
      </span>
    </div>
  </a>
);

const StaticImage = ({ src, alt, className, style }) => (
  <Image src={src} alt={alt} className={className} width={500}
 height={500} style={{ ...style, objectFit: 'contain' }} />
);

const HomeSectionFive = () => {
  const IMAGES = {
    LAPTOP_BASE: "/images/sec5.png",
    QR_CODE: "/images/qr.png",
  };

  return (
    <section className="py-16 bg-white overflow-hidden px-4">
      <div className="flex container flex-col w-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-medium text-gray-900 leading-tight meta-trade-head">
            MetaTrader 5
          </h1>
          <h2 className="text-4xl font-extrabold text-blue-600 mt-2 mb-6">
            — Your Way
          </h2>
          <p className="text-gray-400 max-w-xl text-center sm:text-left">
            We understand that different clients have different needs. Therefore, we
            offer a wide selection of trusted, <span className="border-b ">award-winning platforms</span> and account
            types to choose from.
          </p>
        </div>

        <div className=" mx-auto px-2 sm:px-8 relative flex flex-col sm:flex-row items-center justify-center gap-8 w-full">

          {/* Laptop Image */}
          <div className="relative flex-3 w-full max-w-[900px] sm:pl-30">
            <StaticImage
              src={IMAGES.LAPTOP_BASE}
              alt="MetaTrader 5 devices mockup"
              style={{ width: '100%', height: 'auto' }}
            />
            {/* Download Button on the mockups */}
            <button className="absolute bottom-[5%] right-[5%] transform -translate-x-1/2 -translate-y-1/2 px-10 py-3 cursor-pointer bg-[#1bbf8a] text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition uppercase text-lg z-20">
              DOWNLOAD
            </button>
          </div>

          {/* Platform Icons and QR Code Section */}
          <div className="flex-1 text-center sm:text-left">
            <p className="text-gray-700 font-semibold mb-4">Available on:</p>
            <div className="space-y-4 mb-10 available-on">
            <p>
              <img src="/images/g1.png" alt="Icon" className="inline-block w-4 h-4 mr-2" />
              <span>Desktop App</span>
            </p>
            <p>
              <img src="/images/g2.png" alt="Icon" className="inline-block w-4 h-4 mr-2" />
              <span>Web Platform</span>
            </p>

            <p>
              <img src="/images/g3.png" alt="Icon" className="inline-block w-4 h-4 mr-2" />
              <span>Mobile App</span>
            </p>
            </div>

            {/* QR Code and Download Buttons */}
            <p className="text-gray-700 font-semibold mb-4">Scan to download:</p>
            <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
              {/* QR Code */}
              <div className="w-24 h-24 flex-shrink-0">
                <StaticImage
                  src={IMAGES.QR_CODE}
                  alt="QR code to download trading app"
                  style={{ width: '96px', height: '96px' }}
                />
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col space-y-2">
              <img src="/images/and.png" alt="Icon" className="inline-block w-30 mr-2" />
              <img src="/images/ios.png" alt="Icon" className="inline-block w-30 mr-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSectionFive;
