// 'use client'
// import React, { useState } from 'react'
// import { HomepageData } from '../types/homepage'
// import { useRouter, usePathname, useParams } from 'next/navigation';
// import Image from 'next/image';
// import styles from './home.module.css';
// import Link from 'next/link';
// import { gql, useQuery } from '@apollo/client';
// import { ArrowUpRight } from 'lucide-react';

// export type Market = HomepageData["data"]["home_section3"][number];
// export type Trade = HomepageData["data"]["home_section4"]['trade_card'][number]

// type MarketInterface = {
//   markets: Market[],
// }
// type TradeInterface = {
//   trades: Trade[]
// }


// const TradeCard = ({ trades }: TradeInterface) => {
//   console.log(trades);
//   const CheckChange = (num: string) => {
//     if (num.includes('-')) return 'text-red-400'
//     if (num.includes('+')) return 'text-green-400'
//   }
//   return (
//     trades.map((trade, i) => (
//       <div key={i} className="basis-1/4">
//         <div className="gradient-border rounded-md ">
//           <div className='inner rounded-md'>
//             <div className='p-4 rounded-md'>
//               <h5 className='font-semibold'>{trade.symbol}</h5>
//               <div className="flex items-center justify-between">
//                 <h6>{trade.price}</h6>
//                 <p className={`${CheckChange(trade.change_percent)}`}>{trade.change_percent}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))

//   )
// }

// const Markets = ({ markets }: MarketInterface) => {
//   const [active, setactive] = useState(0)
//   return (
//     <div className='inner rounded-md'>
//       <div className='rounded-md bg-no-repeat bg-cover p-10 bg-gray-800 bg-blend-overlay' style={{ backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_URL}${markets[active].image?.url})` }}>
//         <div className='flex items-center justify-center mx-[5%]'>
//           {
//             markets && markets.map((market, i) => (
//               <h6 onClick={() => setactive(i)} className={`${active == i ? '' : ''} cursor-pointer mx-10`} key={i}>{market.title}</h6>
//             ))
//           }
//         </div>
//         <div className='m-[10%] min-h-[20vh]'>
//           <h4 className=' font-semibold'>{markets[active].title}</h4>
//           <p className=' mt-5 lg:w-3/4 max-w-[70%]'>{markets[active].description}</p>
//           <button className='btn-gradient-1 mt-10'>{markets[active].button_name}</button>
//         </div>
//       </div>
//     </div>
//   )
// }


// const Home = ({ data }: HomepageData) => {
//   const { locale } = useParams()
//   const formatWithClass = (text: string) => {
//     const [first, ...rest] = text.split(' ');
//     return (
//       <>
//         {first}{' '}
//         <span className="">{rest.join(' ')}</span>
//       </>
//     );
//   };
// const cards = [
//     {
//       title: "Forex",
//       description: "40+ currency pairs – majors, crosses & exotics",
//       image: "/images/forex.png",
//     },
//     {
//       title: "Metals",
//       description: "40+ currency pairs – majors, crosses & exotics",
//       image: "/images/metals.png",
//     },
//     {
//       title: "Shares",
//       description: "40+ currency pairs – majors, crosses & exotics",
//       image: "/images/shares.png",
//     },
//     {
//       title: "Indices",
//       description: "40+ currency pairs – majors, crosses & exotics",
//       image: "/images/indices.png",
//     },
//     {
//       title: "Crypto",
//       description: "40+ currency pairs – majors, crosses & exotics",
//       image: "/images/crypto.png",
//     },
//   ];
// // --- Card Component ---
// function Card({
//   title,
//   description,
//   image,
//   alt,
// }: {
//   title: string;
//   description: string;
//   image: string;
//   alt: string;
// }) {
//   return (
//     // Card container background and rounded corners
//     <div className="bg-gray-50 p-6 rounded-2xl flex flex-col items-start overflow-hidden relative h-full">
//       {/* Text Content */}
//       <h3 className="font-bold text-lg text-gray-800">{title}</h3>
//       <p className="text-sm text-gray-600 mt-1">{description}</p>
      
//       {/* Image Area - Adjusted height for better proportion */}
//       <div className="mt-4 relative w-full h-32">
//         {/* The images in the original are not true 'object-cover' but look more like rounded-off illustrations. 
//            We use 'object-contain' for a safer placeholder fit, but a real implementation would use custom crops/backgrounds. */}
//         <Image
//           src={image}
//           alt={alt}
//           fill
//           className="object-contain" 
//         />
//       </div>
      
//       {/* Arrow Button - Positioned consistently on the bottom-right of the image area */}
//       <Link
//         href="#"
//         className="absolute bottom-6 right-6 p-2 rounded-full bg-white shadow-lg transition-all duration-300 hover:bg-gray-100 flex items-center justify-center"
//         aria-label={`Learn more about ${title}`}
//       >
//         {/* Used 'stroke-[2.5px]' for a thickness closer to the source image's arrow */}
//         {/* <ArrowUpRight className="w-5 h-5 text-blue-600 stroke-[2.5px]" /> */}
//       </Link>
//     </div>
//   );
// }

// const LearnMoreButton = () => (
//    <Link
//     href="#"
//     className="inline-block px-4 py-1.5 border border-blue-300 text-blue-600 text-sm font-medium rounded-full transition hover:bg-blue-50 whitespace-nowrap"
//   >
//     Learn more
//   </Link>
// );
// const FeatureBlock = ({ title, description }) => (
//   // Use 'flex flex-col' and 'justify-between' to push the button to the bottom 
//   // and ensure the title/description take up the remaining space uniformly.
//   <div className="flex flex-col h-full">
//     <div>
//       <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
//       <p className="text-gray-600 text-base mb-4">
//         {description}
//       </p>
//     </div>
//     {/* The button is always placed at the bottom */}
//     <div className="mt-auto">
//       <LearnMoreButton />
//     </div>
//   </div>
// );

//   return (
//     <>
//       <section className={styles.herosection} style={{
//         backgroundImage: data.hero_section.background_image?.url
//           ? `url(${process.env.NEXT_PUBLIC_STRAPI_URL}${data.hero_section.background_image.url})`
//           : "none",
//         backgroundSize: "cover",
//         backgroundPosition: "right bottom",
//         backgroundRepeat: "no-repeat",

//       }}>
//         {/* <Image className={styles.hero_bg_1} unoptimized={true} width={100} height={100} alt='MT5 trading platform' src='/images/heroSection1.png' />
//         <Image className={styles.hero_bg_2} unoptimized={true} width={100} height={100} alt='MT5 trading platform' src='/images/heroSection1.png' /> */}
//         {/* <Image priority quality={100} className={styles.trading_mobile} width={400} height={400} alt='MT5 trading platform' src='/heroSection1.png' /> */}
//         <div className='container py-10 mx-auto' >
//           <div className="grid place-items-center gap-4 min-h-[90vh]">
//             <article className="" >
//               <h1>{formatWithClass(data.hero_section.title1)}<br />{formatWithClass(data.hero_section.title2)}</h1>
//               <p className='lg:w-1/2 mt-5'>{data.hero_section.description}</p>
//               <div className="flex items-center gap-2 mt-10 gap-x-10">
//                 <button className='btn-gradient-1'>{data.hero_section.button1}</button>
//                 <Link href={`${locale}/demo`} className='underline hover:text-primary'>{data.hero_section.button2}</Link>
//               </div>
//             </article>
//             <div className='text-left w-full '>
//               <div className='inline-block rounded-md gradient-border'>
//                 <div className='inner flex gap-x-10 rounded-md pl-5 pr-10 py-2 '>
//                   {
//                     data.hero_section.feature.map((data: HomepageData["data"]["hero_section"]["feature"][number], i: number) => (
//                       <div key={i} className={styles.feature}>
//                         <p className='text-wrap word-wrap'>{data.title}</p>
//                         <h2 className='text-gradient-1'>{data.description}</h2>
//                       </div>
//                     ))
//                   }
//                 </div>
//               </div>
//               {/* BOTTOM CARDS */}
//               <div className="container mx-auto mt-10 flex flex-wrap gap-6 items-center justify-center lg:justify-start">
//                 {/* Example card 1 */}
//                 <div className="bg-white shadow-lg rounded-lg px-6 py-4 flex items-center gap-4">
//                   <div>
//                     <h4 className="text-sm font-medium">EURUSD</h4>
//                     <p className="text-gray-500 text-xs">EURO / U.S. DOLLAR</p>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900">1.16960</h3>
//                 </div>

//                 {/* Example card 2 */}
//                 <div className="bg-white shadow-lg rounded-lg px-6 py-4 flex items-center gap-4">
//                   <div>
//                     <h4 className="text-sm font-medium">XAUUSD</h4>
//                     <p className="text-gray-500 text-xs">GOLD SPOT / USD</p>
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900">3,640.005</h3>
//                 </div>

//                 {/* Register button */}
//                 <button className="btn-gradient-1 px-8 py-4 rounded-md font-bold text-white">
//                   REGISTER
//                 </button>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>
//   <section className="py-16 bg-white">
//       {/* Main Grid: 2 columns on large screens */}
//       <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
//         {/* LEFT SIDE: Text and Button */}
//         <div className="pt-8">
//           {/* Title: Adjusted size (text-5xl) and font weight (font-bold) for exact match */}
//           <h2 className="text-5xl font-extrabold leading-tight text-gray-900">
//             Invest in the <br />
//             {/* The blue text color is exact */}
//             <span className="text-blue-600">Best Performing</span>
//             <br /> Markets
//           </h2>
          
//           {/* Paragraph: Adjusted text size (default) and line wrapping */}
//           <p className="mt-5 text-gray-600 max-w-sm">
//             You can trade on major markets across 5 assets classes including{" "}
//             <Link href="#" className="text-gray-600 hover:text-blue-600 underline">
//               Forex
//             </Link>
//             ,{" "}
//             <Link href="#" className="text-gray-600 hover:text-blue-600 underline">
//               Indices
//             </Link>
//             ,{" "}
//             <Link href="#" className="text-gray-600 hover:text-blue-600 underline">
//               Metals
//             </Link>
//             ,{" "}
//             <Link href="#" className="text-gray-600 hover:text-blue-600 underline">
//               Stocks
//             </Link>{" "}
//             and{" "}
//             <Link href="#" className="text-gray-600 hover:text-blue-600 underline">
//               Crypto
//             </Link>
//             .
//           </p>
          
//           {/* Button: Exact green color, padding, and rounded-full for the pill shape */}
//           <button className="mt-8 px-6 py-3 bg-green-500 text-white text-sm font-semibold rounded-full shadow hover:bg-green-600 transition duration-300 uppercase">
//             OPEN LIVE ACCOUNT
//           </button>
//         </div>

//         {/* RIGHT SIDE: Card Grid Layout (2-3 split) */}
//         <div className="flex flex-col gap-6 w-full pt-4">
          
//           {/* Row 1: 2 Cards (Forex, Metals) */}
//           <div className="grid grid-cols-2 gap-6">
//             {cards.slice(0, 2).map((card, i) => (
//               <Card key={i} {...card} />
//             ))}
//           </div>

//           {/* Row 2: 3 Cards (Shares, Indices, Crypto) */}
//           <div className="grid grid-cols-3 gap-6">
//             {cards.slice(2).map((card, i) => (
//               <Card key={i} {...card} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
    
//       <section className={styles.section2}>
//         <article className='container mx-auto flex items-center justify-between'>
//           <div>
//             <h3>{data.home_section2.title1}</h3>
//             <p>{data.home_section2.description1}</p>
//           </div>
//           <div className='border-l-2 border-l-primary px-4'>
//             <h3 className='text-gradient-1'>{data.home_section2.title2}</h3>
//             <p>{data.home_section2.description2}</p>
//           </div>
//         </article>
//       </section>
// <section className="relative py-16 bg-white flex justify-center items-center">
//       {/* Outer white rounded container that holds everything */}
//       <div className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-gray-100">
//         {/* Background Overlay - this mimics the dark blue gradient and abstract chart lines */}
//         {/* The image component would ideally be a pre-designed background that captures the blur and light effects. */}
//         <div className="absolute inset-0 bg-blue-900 opacity-95"></div>
        
//         {/* Placeholder for the abstract chart background image */}
//         {/* You MUST replace /images/abstract-chart-bg.png with your actual background image.
//             This image should contain the subtle glowing lines and blurred elements. */}
//         <Image
//           src="/images/abstract-chart-bg.png" // <--- REPLACE THIS WITH YOUR ACTUAL BACKGROUND IMAGE PATH
//           alt="Abstract financial chart background"
//           layout="fill"
//           objectFit="cover"
//           quality={80} // Adjust quality as needed
//           className="opacity-40" // Adjust opacity to match the subtlety
//         />

//         <div className="relative z-10 py-16 px-8 md:px-12 lg:px-16 text-white text-center">
//           {/* Main Heading */}
//           <h2 className="text-3xl md:text-4xl font-extrabold mb-0 leading-snug"> {/* Adjusted line-height */}
//             Our Results Are Proven
//           </h2>
//           <p className="text-3xl md:text-4xl font-extrabold mb-16 leading-snug"> {/* Adjusted line-height and margin */}
//             in Numbers
//           </p>

//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
//             {/* Stat 1 */}
//             <div className="flex flex-col items-center">
//               <p className="text-5xl md:text-6xl font-extrabold text-white leading-none"> {/* Larger and bolder numbers */}
//                 $2,500B+
//               </p>
//               <p className="text-base font-medium text-gray-300 mt-3 uppercase tracking-wider"> {/* Uppercase and tracking */}
//                 Trading Volume
//               </p>
//             </div>

//             {/* Stat 2 */}
//             <div className="flex flex-col items-center">
//               <p className="text-5xl md:text-6xl font-extrabold text-white leading-none">
//                 170,000+
//               </p>
//               <p className="text-base font-medium text-gray-300 mt-3 uppercase tracking-wider">
//                 Active Clients
//               </p>
//             </div>

//             {/* Stat 3 */}
//             <div className="flex flex-col items-center">
//               <p className="text-5xl md:text-6xl font-extrabold text-white leading-none">
//                 35M+
//               </p>
//               <p className="text-base font-medium text-gray-300 mt-3 uppercase tracking-wider">
//                 Executed Orders
//               </p>
//             </div>

//             {/* Stat 4 */}
//             <div className="flex flex-col items-center">
//               <p className="text-5xl md:text-6xl font-extrabold text-white leading-none">
//                 12,000+
//               </p>
//               <p className="text-base font-medium text-gray-300 mt-3 uppercase tracking-wider">
//                 Partners
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
// <section className="relative py-20 bg-white">
//       <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
//         {/* LEFT SIDE: iPhone Mockup */}
//         <div className="flex justify-center lg:justify-start pt-4">
//           <div className="bg-gray-50 rounded-[44px] p-4 shadow-xl"> 
//             <div className="relative w-72 h-[480px] bg-white border-[12px] border-gray-900 rounded-[40px] shadow-2xl overflow-hidden flex items-center justify-center">
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-xl z-20"></div>
              
//               <Image
//                 src="/images/iphone-trading-app.png" 
//                 alt="iPhone showing trading application"
//                 layout="fill"
//                 objectFit="cover" 
//                 className="z-10 rounded-[28px]" 
//               />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE: Features and CTAs - FINAL STRUCTURE FOR ALIGNMENT */}
//         {/* We use grid-rows-2 to define the two rows explicitly and ensure height consistency */}
//         <div className="pt-16 grid grid-cols-2 grid-rows-2 gap-x-12 gap-y-16">
            
//           {/* Row 1, Column 1 */}
//           <FeatureBlock 
//             title="Regulated Broker"
//             description="Our platform is regulated by the FSC (Financial Services Commission - Mauritius)."
//           />

//           {/* Row 1, Column 2 */}
//           <FeatureBlock 
//             title="Instant Withdrawals"
//             description="Get your funds out quickly and easily with instant withdrawals."
//           />

//           {/* Row 2, Column 1 */}
//           <FeatureBlock 
//             title="Low Spreads & Zero Commissions"
//             description="Cut your trading costs with our low spreads and zero commissions."
//           />

//           {/* Row 2, Column 2 */}
//           <FeatureBlock 
//             title="Low Spreads & Zero Commissions"
//             description="Cut your trading costs with our low spreads and zero commissions."
//           />
          
//           {/* Logos and Button Row - Spans across the entire two columns */}
//           <div className="col-span-2 flex items-center justify-start gap-16 mt-4">
            
//             {/* Logos Container */}
//             <div className="flex items-center space-x-6">
//               <Image
//                 src="/images/fsc-logo.png" 
//                 alt="Financial Services Commission Mauritius Logo"
//                 width={120} 
//                 height={30} 
//                 objectFit="contain"
//               />
//               <Image
//                 src="/images/dubai-chamber-logo.png" 
//                 alt="Dubai Chamber of Commerce Logo"
//                 width={120} 
//                 height={30} 
//                 objectFit="contain"
//               />
//             </div>

//             {/* Open Live Account Button - The last element in the row */}
//             <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow hover:bg-green-600 transition uppercase text-sm whitespace-nowrap">
//               OPEN LIVE ACCOUNT
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//       <section className={styles.section3}>
//         <div className='container gradient-border mx-auto mt-[5%] rounded-md'>
//           <Markets markets={data.home_section3} />
//         </div>
//       </section>
//       <section className={styles.section4}>
//         <article className='container mx-auto mt-20'>
//           <h3 className='text-center'>{data.home_section4.title}</h3>
//           <div className="flex items-center gap-10 mt-10">
//             {
//               <TradeCard trades={data.home_section4.trade_card} />
//             }
//           </div>
//           <div className='w-full text-center'>
//             <button className='mt-20 btn-gradient-1 '>{data.home_section4.cta}</button>
//           </div>
//         </article>
//       </section>
//       <section className={styles.section5}>
//         <article className="container mt-20 mx-auto">
//           <div className="flex">
//             <div>
//               <h2>{data.home_section5.title}</h2>
//               <p className='mt-5'>{data.home_section5.description}</p>
//               <div className="flex items-start gap-10 mt-8">
//                 <Image className='bg-white p-1 rounded-md' width={150} height={150} alt={data.home_section5.qr_code.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.home_section5.qr_code.url}`} />
//                 <div className=''>
//                   <div className='rounded-md gradient-border p-2'>
//                     <div className="inner rounded-md">
//                       <div className="flex items-center px-4 gap-5 py-1">
//                         <Image width={35} height={35} alt='app store' src='/icons/appstore_icon.png' />
//                         <div>
//                           <small>Download on</small>
//                           <small className='font-bold block'>App Store</small>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className='rounded-md gradient-border p-2 mt-4'>
//                     <div className="inner rounded-md">
//                       <div className="flex items-center px-4 gap-5 py-1">
//                         <Image width={35} height={35} alt='play store' src='/icons/playstore_icon.png' />
//                         <div>
//                           <small>Download on</small>
//                           <small className='font-semibold block'>Play Store</small>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <button className='btn-gradient-1 mt-10'>{data.home_section5.cta}</button>
//             </div>
//             <div>
//               <div className="flex items-center justify-end">
//                 <Image className='mr-10' width={100} height={100} alt={data.home_section5.subimage.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.home_section5.subimage.url}`} />
//                 <div className='pl-10 border-l-2 border-l-gradient'>
//                   <h2 className='text-gradient-1'>{data.home_section5.subtitle}</h2>
//                   <small>{data.home_section5.subdescription}</small>
//                 </div>
//               </div>
//               <Image width={1200} height={1200} alt={data.home_section5.section_image.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.home_section5.section_image.url}`} />
//             </div>
//           </div>
//           <div className='flex mt-15 gap-10'>
//             {
//               data.home_section5.extras_card.map((card, i) => (
//                 <div key={i} className={`gradient-border rounded-md ${i == 0 ? 'basis-1/4' : 'basis-3/4'}`}>
//                   <div className="inner rounded-md flex items-center p-4">
//                     <Image width={250} height={250} alt={card.image.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.image.url}`} />
//                   </div>
//                 </div>
//               ))
//             }

//           </div>
//         </article>
//       </section>
//       <section className={styles.section6}>
//         <article className='container mt-20 mx-auto'>
//           <h2>{data.home_section6.title}</h2>
//           <div className="flex min-h-[20rem] h-[30rem] max-h-[30rem] gap-10 mt-10 ">
//             {
//               data.home_section6.card.map((card, i) => (
//                 <div className={`relative flex flex-col gradient-border rounded-md text-center justify-between p-4 h-full basis-1/${data.home_section6.card.length}`}>
//                   <div className="inner rounded-md flex flex-col justify-between h-full p-3">
//                     <div>
//                       <div className='h-[15rem] w-full flex justify-center items-center'>
//                         <Image width={200} height={200} alt={card.image.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.image.url}`} />
//                       </div>
//                       <h5 className='font-bold'>{card.title}</h5>
//                       <p className='mt-3'>{card.description}</p>
//                     </div>
//                     <div className="mt-auto pt-4 pb-3">
//                       <Link className='w-full text-primary' href='/'>{card.redirect_url}</Link>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             }
//           </div>
//         </article>
//       </section>
//       <section className={styles.section7}>
//         <article className="container mx-auto mt-20">
//           <div className="flex gap-10 justify-between">
//             <div className='basis-10/12'>
//               <h2>{data.home_section7.title}</h2>
//               <p className='mt-7 w-3/4'>{data.home_section7.description}</p>
//             </div>
//             <div className='basis-2/12 pl-10 border-l-2 border-l-gradient'>
//               <h2 className='text-gradient-1'>{data.home_section7.subtitle}</h2>
//               <p>{data.home_section7.subdescription}</p>
//             </div>
//           </div>
//           <div className='relative'>
//             <button className='absolute top-10 left-0 btn-gradient-1 mt-10'>{data.home_section7.cta}</button>
//             <Image width={1600} height={1600} alt={data.home_section7.background_image.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.home_section7.background_image.url}`} />
//           </div>
//           <div className='mt-10 flex w-full items-center justify-between'>
//             <h3 className='basis-1/4'>{data.home_section7.extras_title}</h3>
//             <div className='basis-2/4 flex items-center gap-10 justify-between'>
//               {
//                 data.home_section7.options.map((option) => (
//                   <div className='flex flex-col items-center text-center'>
//                     <Image width={100} height={100} alt={option.image.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${option.image.url}`} />
//                     <h6 className='mt-2'>{option.title}</h6>
//                   </div>
//                 ))
//               }
//             </div>
//           </div>
//         </article>
//       </section>
//       <section className={styles.section8}>
//         <div className="container mt-20 mx-auto">
//           <div className="flex bg-blue-800 p-5 rounded-md mx-auto justify-between">
//             <div className="">
//               <Image width={100} height={100} alt={data.home_section8?.image?.name} src={
//                 data.home_section8?.image?.url
//                   ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.home_section8?.image?.url}`
//                   : "/placeholder.png"
//               } />

//               {/* <h2>{data.home_section8.title}</h2>
//                 <p>{data.home_section8.description}</p> */}
//               <button className='btn-gradient-1 mt-5'>{data.home_section8.cta}</button>
//             </div>
//             <div className="flex basis-2/3 gap-10">
//               {
//                 data.home_section8.card.map((card) => (
//                   <div className='basis-1/3'>

//                     <h2>{card.title}</h2>
//                     <p>{card.description}</p>
//                   </div>
//                 ))
//               }
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Home