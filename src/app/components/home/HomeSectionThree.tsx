"use client";

import Image from "next/image";
import LearnMoreButton from "../common/LearnMoreButton";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const HomeSectionThree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  // floating + diagonal + rotation animation for background shape
  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [0, 15, 0, -15, 0], // move left-right diagonally
        y: [0, -20, 0, 20, 0], // move up-down diagonally
        rotate: [0, 2, 0, -2, 0], // slight rotation
        transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
      });
    }
  }, [isInView, controls]);

  const features = [
    {
      title: <>Regulated <br /><span className="font-medium">Broker</span></>,
      description: "Our platform is regulated by the FSC (Financial Services Commission - Mauritius).",
    },
    {
      title: <>Instant <br /><span className="font-medium">Withdrawals</span></>,
      description: "Get your funds out quickly and easily with instant withdrawals.",
    },
    {
      title: <>Low <span className="font-medium">Spreads <br /> & </span> Zero <span className="font-medium">Commissions</span></>,
      description: "This is a static description for the feature block. It doesn’t change and is hardcoded.",
    },
    {
      title: <>Advanced <br/><span className="font-medium">Trading Tools</span></>,
      description: "Enhance your strategy with cutting-edge trading technology.",
    },
  ];

  return (
    <section ref={ref} className="relative bg-white py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        
        {/* LEFT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
          className="flex justify-center lg:justify-start relative"
        >
          {/* Background image layer with floating + diagonal + rotation animation */}
          <motion.div
            animate={controls}
            className="absolute sm:top-[-120px] top-[-70px] left-1/2 -translate-x-1/2 z-0 w-[300px] sm:w-[350px] md:w-[450px] lg:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
          >
            <Image
              src="/images/Rectangle-gray.png"
              alt="Background shape"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Main phone image container */}
          <div className="relative z-10 w-[260px] sm:w-[350px] md:w-[450px] lg:w-[600px] h-auto flex items-center justify-center overflow-visible">
            <Image
              src="/images/section3.png"
              alt="iPhone showing trading application"
              className="w-[260px] sm:w-[350px] md:w-[450px] lg:w-[500px] object-contain"
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-14 lg:gap-x-12">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col h-full"
            >
              <div>
                <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg md:text-xl leading-snug tading-mobile-app">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed tading-mobile-app-p">
                  {f.description}
                </p>
              </div>
              <div className="text-right mt-auto">
                <LearnMoreButton />
              </div>
            </motion.div>
          ))}

          {/* Logos + CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 mt-6"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;
