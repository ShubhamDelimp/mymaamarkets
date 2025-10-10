"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 2500, suffix: "B+", label: "Trading Volume" },
  { value: 170000, suffix: "+", label: "Active Clients" },
  { value: 35, suffix: "M+", label: "Executed Orders" },
  { value: 12000, suffix: "+", label: "Partners" },
];

const AnimatedNumber = ({ value, suffix, play }: { value: number; suffix?: string; play: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!play) return; // animation will start only if play = true
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [value, play]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const HomeSectionFour = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // trigger slightly before fully visible

  return (
    <section ref={ref} className="relative py-10 md:py-16 px-4 md:px-6 bg-white flex justify-center items-center">
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
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-4xl lg:text-[50px] font-medium mb-0 leading-snug mb-[25px] common-heading"
          >
            Our <span className="font-extrabold">Results</span> Are Proven <br /> in Numbers
          </motion.h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 md:gap-x-6 mt-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="flex flex-col items-center"
              >
                <p className="our--result font-extrabold text-white leading-none text-2xl sm:text-3xl md:text-4xl">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} play={isInView} />
                </p>
                <p className="text-[10px] sm:text-xs md:text-base font-medium text-gray-300 mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionFour;
