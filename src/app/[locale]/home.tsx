'use client'
import React, { useState } from 'react'
import { HomepageData } from '../types/homepage'
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './home.module.css';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import { ArrowUpRight } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import MarketsSection from '../components/home/MarketsSection';
import TradeCardsSection from '../components/home/TradeCardsSection';
import SectionTwo from '../components/home/SectionTwo';
import HomeSectionTwo from '../components/home/HomeSectionTwo';
import HomeSectionThree from '../components/home/HomeSectionThree';
import HomeSectionFive from '../components/home/HomeSectionFive';
import GlobalPresenceSection from '../components/home/GlobalPresenceSection';
import FAQSection from '../components/home/FAQSection';
import TradingViewWidget from '../components/home/TradingViewWidget';
import HomeSectionFour from '../components/home/HomeSectionFour';
import HomeSectionSeven from '../components/home/HomeSectionSeven';
import HomeSectionNine from '../components/home/HomeSectionNine';
import HomeSectionTen from '../components/home/HomeSectionTen';
import HomeSectionSix from '../components/home/HomeSectionSix';



export type Market = HomepageData["data"]["home_section3"][number];
export type Trade = HomepageData["data"]["home_section4"]['trade_card'][number]

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


const Home = ({ data }: HomepageData) => {
  // const { locale } = useParams()







  return (
    <>
      {console.log("home_section_three-->>>", data)}
      <HeroSection hero_section={data.hero_section} />
      <HomeSectionTwo/>
      {/* <HomeSectionTwo HomeSectionTwo={data.HomeSectionTwo} /> */}
      <TradingViewWidget />
      {/* <HomeSectionThree home_section_three={data.home_section_three} /> */}
      <HomeSectionFour />
      <HomeSectionThree />
      <HomeSectionFive />
      <HomeSectionSix />
      <HomeSectionSeven />
      <GlobalPresenceSection />
      <HomeSectionNine />
      <HomeSectionTen />
      <FAQSection />
      {/* <MarketsSection markets={data.home_section3} /> */}
      {/* <TradeCardsSection trades={data.home_section4.trade_card} /> */}
      {/* <SectionTwo home_section2={data.home_section2} /> */}




    </>
  )
}

export default Home





      // <section className={styles.section3}>
      //   {/* <div className='container gradient-border mx-auto mt-[5%] rounded-md'>
      //     <Markets markets={data.home_section3} />
      //   </div> */}
      // </section>
      // <section className={styles.section4}>
      //   <article className='container mx-auto mt-20'>
      //     <h3 className='text-center'>{data.home_section4.title}</h3>
      //     <div className="flex items-center gap-10 mt-10">
      //       {/* {
      //         <TradeCard trades={data.home_section4.trade_card} />
      //       } */}
      //     </div>
      //     <div className='w-full text-center'>
      //       <button className='mt-20 btn-gradient-1 '>{data.home_section4.cta}</button>
      //     </div>
      //   </article>
      // </section>
      // <section className={styles.section5}>
      //   <article className="container mt-20 mx-auto">
      //     <div className="flex">
      //       <div>
      //         <h2>{data.home_section5.title}</h2>
      //         <p className='mt-5'>{data.home_section5.description}</p>
      //         <div className="flex items-start gap-10 mt-8">
      //           <Image className='bg-white p-1 rounded-md' width={150} height={150} alt={data.home_section5.qr_code.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.home_section5.qr_code.url}`} />
      //           <div className=''>
      //             <div className='rounded-md gradient-border p-2'>
      //               <div className="inner rounded-md">
      //                 <div className="flex items-center px-4 gap-5 py-1">
      //                   <Image width={35} height={35} alt='app store' src='/icons/appstore_icon.png' />
      //                   <div>
      //                     <small>Download on</small>
      //                     <small className='font-bold block'>App Store</small>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //             <div className='rounded-md gradient-border p-2 mt-4'>
      //               <div className="inner rounded-md">
      //                 <div className="flex items-center px-4 gap-5 py-1">
      //                   <Image width={35} height={35} alt='play store' src='/icons/playstore_icon.png' />
      //                   <div>
      //                     <small>Download on</small>
      //                     <small className='font-semibold block'>Play Store</small>
      //                   </div>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //         <button className='btn-gradient-1 mt-10'>{data.home_section5.cta}</button>
      //       </div>
      //       <div>
      //         <div className="flex items-center justify-end">
      //           <Image className='mr-10' width={100} height={100} alt={data.home_section5.subimage.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.home_section5.subimage.url}`} />
      //           <div className='pl-10 border-l-2 border-l-gradient'>
      //             <h2 className='text-gradient-1'>{data.home_section5.subtitle}</h2>
      //             <small>{data.home_section5.subdescription}</small>
      //           </div>
      //         </div>
      //         <Image width={1200} height={1200} alt={data.home_section5.section_image.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.home_section5.section_image.url}`} />
      //       </div>
      //     </div>
      //     <div className='flex mt-15 gap-10'>
      //       {
      //         data.home_section5.extras_card.map((card, i) => (
      //           <div key={i} className={`gradient-border rounded-md ${i == 0 ? 'basis-1/4' : 'basis-3/4'}`}>
      //             <div className="inner rounded-md flex items-center p-4">
      //               <Image width={250} height={250} alt={card.image.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.image.url}`} />
      //             </div>
      //           </div>
      //         ))
      //       }

      //     </div>
      //   </article>
      // </section>
      // <section className={styles.section6}>
      //   <article className='container mt-20 mx-auto'>
      //     <h2>{data.home_section6.title}</h2>
      //     <div className="flex min-h-[20rem] h-[30rem] max-h-[30rem] gap-10 mt-10 ">
      //       {
      //         data.home_section6.card.map((card, i) => (
      //           <div className={`relative flex flex-col gradient-border rounded-md text-center justify-between p-4 h-full basis-1/${data.home_section6.card.length}`}>
      //             <div className="inner rounded-md flex flex-col justify-between h-full p-3">
      //               <div>
      //                 <div className='h-[15rem] w-full flex justify-center items-center'>
      //                   <Image width={200} height={200} alt={card.image.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${card.image.url}`} />
      //                 </div>
      //                 <h5 className='font-bold'>{card.title}</h5>
      //                 <p className='mt-3'>{card.description}</p>
      //               </div>
      //               <div className="mt-auto pt-4 pb-3">
      //                 <Link className='w-full text-primary' href='/'>{card.redirect_url}</Link>
      //               </div>
      //             </div>
      //           </div>
      //         ))
      //       }
      //     </div>
      //   </article>
      // </section>
      // <section className={styles.section7}>
      //   <article className="container mx-auto mt-20">
      //     <div className="flex gap-10 justify-between">
      //       <div className='basis-10/12'>
      //         <h2>{data.home_section7.title}</h2>
      //         <p className='mt-7 w-3/4'>{data.home_section7.description}</p>
      //       </div>
      //       <div className='basis-2/12 pl-10 border-l-2 border-l-gradient'>
      //         <h2 className='text-gradient-1'>{data.home_section7.subtitle}</h2>
      //         <p>{data.home_section7.subdescription}</p>
      //       </div>
      //     </div>
      //     <div className='relative'>
      //       <button className='absolute top-10 left-0 btn-gradient-1 mt-10'>{data.home_section7.cta}</button>
      //       <Image width={1600} height={1600} alt={data.home_section7.background_image.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${data.home_section7.background_image.url}`} />
      //     </div>
      //     <div className='mt-10 flex w-full items-center justify-between'>
      //       <h3 className='basis-1/4'>{data.home_section7.extras_title}</h3>
      //       <div className='basis-2/4 flex items-center gap-10 justify-between'>
      //         {
      //           data.home_section7.options.map((option) => (
      //             <div className='flex flex-col items-center text-center'>
      //               <Image width={100} height={100} alt={option.image.name} src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${option.image.url}`} />
      //               <h6 className='mt-2'>{option.title}</h6>
      //             </div>
      //           ))
      //         }
      //       </div>
      //     </div>
      //   </article>
      // </section>
      // <section className={styles.section8}>
      //   <div className="container mt-20 mx-auto">
      //     <div className="flex bg-blue-800 p-5 rounded-md mx-auto justify-between">
      //       <div className="">
      //         <Image width={100} height={100} alt={data.home_section8?.image?.name} src={
      //           data.home_section8?.image?.url
      //             ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.home_section8?.image?.url}`
      //             : "/placeholder.png"
      //         } />

      //         {/* <h2>{data.home_section8.title}</h2>
      //           <p>{data.home_section8.description}</p> */}
      //         <button className='btn-gradient-1 mt-5'>{data.home_section8.cta}</button>
      //       </div>
      //       <div className="flex basis-2/3 gap-10">
      //         {
      //           data.home_section8.card.map((card) => (
      //             <div className='basis-1/3'>

      //               <h2>{card.title}</h2>
      //               <p>{card.description}</p>
      //             </div>
      //           ))
      //         }
      //       </div>
      //     </div>
      //   </div>
      // </section>