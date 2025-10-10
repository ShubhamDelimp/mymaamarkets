"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

const HomeSectionSeven = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section ref={ref} className="relative w-full bg-white overflow-hidden">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={container}
        className="w-full mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:justify-start gap-y-12 lg:gap-x-20 relative"
      >
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 lg:pl-[clamp(50px,10vw,200px)] lg:pb-[230px] text-center lg:text-left">
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl leading-tight common-heading"
          >
            <span className="text-[#006EFF] font-bold"> Easy </span>
            <span className="text-[#0F3D62] font-medium"> Deposits</span>
            <br className="hidden sm:block" />
            <span className="text-[#006EFF] font-bold"> Quick </span>
            <span className="text-[#0F3D62] font-medium"> Withdrawals </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-gray-400 max-w-xl mx-auto lg:mx-0">
            Fund your account with trusted methods. Fast processing, clear times,
            and no hidden fees from MY MAA Markets.
          </motion.p>

          {/* Mobile / Tablet Cards */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md sm:max-w-2xl lg:hidden mx-auto"
          >
            {[
              {
                title: "Trusted Methods",
                desc: "Bank transfer, major cards, and popular e-wallets.",
              },
              {
                title: "No surprises",
                desc: "Clear processing times and no hidden platform fees from us.",
              },
              {
                title: "Security First",
                desc: "All transactions are safeguarded with secure payment gateways.",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className={`bg-white shadow-md rounded-xl p-5 text-center ${idx === 2 ? "sm:col-span-2" : ""}`}
              >
                <h4 className="text-[#0F3D62] font-bold text-lg">{card.title}</h4>
                <p className="text-gray-400 text-sm mt-2">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Cards */}
          <motion.div
            variants={fadeUp}
            className="hidden lg:grid grid-cols-3 gap-8 max-w-3xl"
          >
            {[
              {
                title: "Trusted Methods",
                desc: "Bank transfer, major cards, and popular e-wallets.",
              },
              {
                title: "No surprises",
                desc: "Clear processing times and no hidden platform fees from us.",
              },
              {
                title: "Security First",
                desc: "All transactions are safeguarded with secure payment gateways.",
              },
            ].map((card, idx) => (
              <motion.div key={idx} variants={fadeUp}>
                <h4 className="text-[#0F3D62] font-bold mb-[10px]">{card.title}</h4>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
            <button className="bg-[#19C69A] hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-full mt-6">
              DEPOSIT NOW
            </button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="hidden lg:block mt-10 lg:absolute bottom-0 z-10 custom-phone-img"
          >
            <img src="/images/phone_img.png" alt="Mobile App" />
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div variants={fadeUp} className="relative flex flex-col items-center lg:items-end lg:right-0">
          <Image
            src="/images/img-1.png"
            alt="Payment methods"
            width={960}
            height={905}
            className="rounded-s-2xl w-full sm:w-[80%] lg:w-auto"
          />

          <motion.div variants={fadeUp} className="mt-10 mb-16 flex flex-wrap justify-center items-center gap-4 lg:gap-6 w-full">
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
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeSectionSeven;
