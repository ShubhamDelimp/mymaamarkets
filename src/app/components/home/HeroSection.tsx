"use client";
import Link from "next/link";
import styles from "../../[locale]/home.module.css";
import { HomepageData } from "@/app/types/homepage";
import TradingViewWidget from "../common/TradingViewWidget";
import Image from "next/image";
import { motion } from "framer-motion";

type HeroSectionProps = {
  hero_section: HomepageData["data"]["hero_section"];
};

export default function HeroSection({ hero_section }: HeroSectionProps) {
  const formatWithClass = (text: string) => {
    const [first, ...rest] = text.split(" ");
    return (
      <>
        <span className={styles.headingFirst}>{first}</span>{" "}
        <span className={styles.headingRest}>{rest.join(" ")}</span>
      </>
    );
  };

  return (
    <section
      className="
        bg-[url('/images/hero-bg-new.png')]
        bg-no-repeat
        bg-cover
        bg-center
      "
    >
      <div className="bg-[rgba(0,0,0,0.47)] sm:bg-transparent container-fluid mx-auto px-4 sm:px-6 lg:px-12">
        {/* TOP - centered vertically */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`${styles.topRow} flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12`}
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="content-part"
          >
            <h1 className="common-heading">
              Seamless Access to{" "}
              <span className="font-bold"> Global Markets </span> at Your
              Fingertips
            </h1>

            {/* dotted decorative line to the right */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className={`${styles.dottedLine} my-4 origin-left`}
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className={`${styles.description} text-sm sm:text-base md:text-lg`}
            >
              {hero_section.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center sm:items-center gap-4 mt-6 sm:mt-8"
            >
              <Link href="https://cp.mymaamarkets.com/Home/Signup" passHref>
                <button className={styles.openBtn}>
                  {hero_section.button1}
                </button>
              </Link>
              <Link
                href="https://cp.mymaamarkets.com/Home/Signup"
                className="ml-0 lg:ml-[20px] underline"
                passHref
              >
                {hero_section.button2}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Spacer / Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`${styles.rightSpacer} w-full lg:w-1/2`}
          />
        </motion.div>

        {/* BOTTOM STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className={`${styles.bottomStrip} sm:mt-8 counter-strip`}
        >
          <div
            className={`${styles.features} flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-12 counter-strip-wrapper`}
          >
            {hero_section.feature.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + i * 0.2 }}
                className={`${styles.featureItem}`}
              >
                <p
                  className={`${styles.featureTitle} text-sm sm:text-base counter-title`}
                >
                  {f.title}
                </p>
                <h3 className="text-lg sm:text-xl home-counter">
                  {f.description}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className={`${styles.widgetsGroup} flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-4 mb-4 sm:mt-0`}
          >
            <TradingViewWidget />
            <button className={styles.registerBtn}>REGISTER</button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
