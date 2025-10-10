"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';

const StaticImage = ({ src, alt, className, style }) => (
  <Image
    src={src}
    alt={alt}
    className={className}
    width={500}
    height={500}
    style={{ ...style, objectFit: 'contain' }}
  />
);

const HomeSectionFive = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const IMAGES = {
    LAPTOP_BASE: "/images/sec5.png",
    QR_CODE: "/images/qr.png",
  };

  // Parent variants for stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Common fade-up variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className="py-16 bg-white overflow-hidden px-4">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="flex container flex-col w-full"
      >
        {/* Headings */}
        <motion.div variants={fadeUp} className="flex flex-col justify-center items-center mb-12">
          <h1 className="text-5xl font-medium leading-[20px] meta-trade-head text-[#0F3D62] common-heading">
            MetaTrader 5
          </h1>
          <h2 className="text-4xl font-extrabold text-[#006EFF] mt-2 mb-6 common-heading">
            — Your Way
          </h2>
          <p className="text-gray-400 max-w-xl text-center">
            We understand that different clients have different needs. Therefore, we
            offer a wide selection of trusted, <span className="border-b ">award-winning platforms</span> and account
            types to choose from.
          </p>
        </motion.div>

        {/* Laptop + QR Section */}
        <motion.div
          variants={fadeUp}
          className="mx-auto px-2 sm:px-8 relative flex flex-col sm:flex-row items-center justify-center gap-8 w-full"
        >
          {/* Laptop Image with floating animation */}
          <motion.div
            variants={fadeUp}
            className="relative w-full max-w-[900px] sm:pl-30 sm:py-70"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="hidden lg:block absolute top-[-200px] right-0 z-10 w-[1014px] h-[764px]">
              <StaticImage
                src={IMAGES.LAPTOP_BASE}
                alt="MetaTrader 5 devices mockup"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="block lg:hidden w-full">
              <StaticImage
                src={IMAGES.LAPTOP_BASE}
                alt="MetaTrader 5 devices mockup"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Download Button entrance + hover */}
            <motion.button
              variants={fadeUp}
              className="absolute bottom-[5%] right-[5%] transform -translate-x-1/2 -translate-y-1/2 px-10 py-3 cursor-pointer bg-[#1bbf8a] text-white font-semibold rounded-full shadow-lg uppercase text-lg z-20"
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(27,191,138,0.4)" }}
            >
              DOWNLOAD
            </motion.button>
          </motion.div>

          {/* Platform Icons + QR */}
          <motion.div variants={fadeUp} className="flex-1 text-center sm:text-left">
            <motion.p variants={fadeUp} className="text-gray-700 font-semibold mb-4">
              Available on:
            </motion.p>
            <motion.div variants={fadeUp} className="space-y-4 mb-10 available-on">
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
            </motion.div>

            <motion.p variants={fadeUp} className="text-gray-700 font-semibold mb-4">
              Scan to download:
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0">
              {/* QR Code with pulse animation */}
              <motion.div
                className="w-24 h-24 flex-shrink-0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <StaticImage
                  src={IMAGES.QR_CODE}
                  alt="QR code to download trading app"
                  style={{ width: '96px', height: '96px' }}
                />
              </motion.div>

              {/* App Store Buttons */}
              <div className="flex flex-col space-y-2">
                <img src="/images/and.png" alt="Android" className="inline-block w-30 mr-2" />
                <img src="/images/ios.png" alt="iOS" className="inline-block w-30 mr-2" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSectionFive;
