// 'use client'
// import Image from "next/image";
// import Link from "next/link";
// import styles from "../../[locale]/home.module.css";
// import { HomepageData } from "@/app/types/homepage";
// import TradingViewWidget from '../common/TradingViewWidget'
// // import TradingView from '../common/TradingView'

// type HeroSectionProps = {
//   hero_section: HomepageData["data"]["hero_section"];
// };
// export default function HeroSection({hero_section }: HeroSectionProps) {
//   const formatWithClass = (text: string) => {
//     const [first, ...rest] = text.split(" ");
//     return (
//       <>
//         {first} <span>{rest.join(" ")}</span>
//       </>
//     );
//   };

//   return (
//     <section
//       className={styles.herosection}
//       style={{
//         backgroundImage: hero_section.background_image?.url
//           ? `url(${process.env.NEXT_PUBLIC_STRAPI_URL}${hero_section.background_image.url})`
//           : "none",
//         backgroundSize: "cover",
//         backgroundPosition: "right bottom",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <div className="container py-10 mx-auto">
//         <div className="grid place-items-center gap-4 min-h-[90vh]">
//           <article>
//             <h1>
//               {formatWithClass(hero_section.title1)} <br />
//               {formatWithClass(hero_section.title2)}
//             </h1>
//             <p className="lg:w-1/2 mt-5">{hero_section.description}</p>
//             <div className="flex items-center gap-x-10 mt-10">
//               <button className="btn-gradient-1">{hero_section.button1}</button>
//               <Link href="/demo" className="underline hover:text-primary">
//                 {hero_section.button2}
//               </Link>
//             </div>
//           </article>

//           {/* Features row */}
//           <div className="text-left w-full">
//             <div className="inline-block rounded-md gradient-border">
//               <div className="inner flex gap-x-10 rounded-md pl-5 pr-10 py-2">
//                 {hero_section.feature.map((item, i) => (
//                   <div key={i} className={styles.feature}>
//                     <p>{item.title}</p>
//                     <h2 className="text-gradient-1">{item.description}</h2>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Example bottom cards + register */}
//             <div className="container mx-auto mt-10 flex flex-wrap gap-6 items-center justify-center lg:justify-start">
//               <TradingViewWidget />
//               <TradingViewWidget />
//               {/* <TradingView /> */}
            

//               <button className="btn-gradient-1 px-8 py-4 rounded-md font-bold text-white">
//                 REGISTER
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





"use client";
import Link from "next/link";
import styles from "../../[locale]/home.module.css";
import { HomepageData } from "@/app/types/homepage";
import TradingViewWidget from "../common/TradingViewWidget";
import Image from "next/image";

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
  {/* Your content here */}
{/* </section> */}

  {/* Background globe (absolute) */}
  {/* {hero_section.background_image?.url && (
    <div className={styles.bgWrap}>
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${hero_section.background_image.url}`}
        alt="globe"
        className={styles.bgImage}
        width={600}
        height={600}
      />
    </div>
  )} */}

  <div className="container-fluid mx-auto px-6 lg:px-12">
    {/* TOP - centered vertically */}
    <div className={styles.topRow}>
      <div className={styles.leftContent}>
        <h1 className={styles.heroTitle}>
          {formatWithClass(hero_section.title1)} <br />
          {formatWithClass(hero_section.title2)}
        </h1>

        {/* dotted decorative line to the right */}
        <div className={styles.dottedLine} />

        <p className={styles.description}>{hero_section.description}</p>

        <div className="flex-col items-center mt-8 justify-center">
          <Link href="https://cp.mymaamarkets.com/Home/Signup" passHref>
            <button className={styles.openBtn}>
              {hero_section.button1}
            </button>
          </Link>
          <Link
            href="https://cp.mymaamarkets.com/Home/Signup"
            className={styles.demoLink}
            passHref
          >
            {hero_section.button2}
          </Link>
        </div>
      </div>

      {/* right content is visually the globe background */}
      <div className={styles.rightSpacer} />
    </div>

    {/* BOTTOM STRIP */}
    <div className={styles.bottomStrip}>
      <div className={styles.features}>
        {hero_section.feature.map((f, i) => (
          <div key={i} className={styles.featureItem}>
            <p className={styles.featureTitle}>{f.title}</p>
            <h3 className={styles.featureValue}>{f.description}</h3>
          </div>
        ))}
        <div className={styles.widgetsGroup}>
          <TradingViewWidget />
          <button className={styles.registerBtn}>REGISTER</button>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
