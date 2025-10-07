// "use client";
// import React from "react";
// import {
//     Youtube,
//     Twitter,
//     Instagram,
//     Facebook,
//     Linkedin,
//     Mail,
//     Globe,
// } from "lucide-react";
// import DisclaimerSection from "./DisclaimerSection";
// import Image from "next/image";
// import Link from "next/link";

// const navData = {
//     TRADING: ["Forex", "Commodities", "Metals", "Indices", "Crypto"],
//     TRADING_PLATFORMS: ["MetaTrader 5", "Desktop Trader", "Mobile Trader"],
//     TRADING_CONDITIONS: [
//         "Who Is a Professional Client",
//         "Execution Policy",
//         "Spreads, Commissions",
//         "Market Hours",
//     ],
//     ACCOUNTS: [
//         "Account Types",
//         "Standard Accounts",
//         "Corporate Accounts",
//         "Swap Free Accounts",
//         "FIX API",
//         "Accounts Comparison",
//     ],
//     PROMOTIONS: ["Latest Promotions", "Welcome Bonus"],
//     PARTNERS: ["Lorem", "Forem"],
//     ABOUT: ["About Us", "Why MY MAA MARKETS", "Blog", "Careers", "FAQs"],
//     LEGAL: ["Legal Documents", "License", "Protection of Funds"],
// };

// const NavColumn = ({ title, links }) => (
//     <div className="mb-6 sm:mb-8 lg:mb-0">
//         <h4 className="text-sm sm:text-base font-bold text-white uppercase mb-3 sm:mb-4 tracking-wider">
//             {title}
//         </h4>
//         <ul className="space-y-2">
//             {links.map((link, index) => (
//                 <li key={index}>
//                     <a
//                         href="#"
//                         className="text-xs sm:text-sm text-gray-400 hover:text-white transition"
//                     >
//                         {link}
//                     </a>
//                 </li>
//             ))}
//         </ul>
//     </div>
// );

// export default function FooterSection() {
//     return (
//         <footer className="bg-[#1b4365] text-white">
//             <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
//                 {/* --- Top Section --- */}
//                 <div className="footer-sec flex flex-col lg:flex-row justify-between border-b border-gray-700 pb-8 sm:pb-10 mb-10 space-y-6 lg:space-y-0">
//                     {/* Left: Social */}
//                     <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0">
//                         <h3 className="text-lg sm:text-xl font-semibold lg:mr-10 whitespace-nowrap">
//                             Join Our <span className="text-blue-400">Community</span>
//                         </h3>
//                         <div className="flex space-x-3">
//                             {[Youtube, Twitter, Instagram, Facebook, Linkedin].map(
//                                 (Icon, index) => (
//                                     <a
//                                         key={index}
//                                         href="#"
//                                         className="p-2 border border-white/50 rounded-full hover:border-blue-400 transition"
//                                     >
//                                         <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//                                     </a>
//                                 )
//                             )}
//                         </div>
//                     </div>

//                     {/* Right: Subscription */}
//                     <div className="footer-form flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
//                         <p className="text-sm sm:text-base font-medium whitespace-nowrap">
//                             Stay in the know about offers and promotions
//                         </p>
//                         <form className="flex flex-col md:flex-row sm:flex-row sm:space-x-2 w-full sm:w-auto">
//                             <input
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 className="p-2 sm:p-3 flex-1 sm:w-64 bg-transparent border border-gray-500 rounded text-sm text-white focus:border-blue-500 focus:outline-none placeholder-gray-400"
//                             />
//                             <button
//                                 type="submit"
//                                 className="mt-2 sm:mt-0 px-4 sm:px-5 py-2 sm:py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition whitespace-nowrap text-xs sm:text-sm"
//                             >
//                                 Subscribe
//                             </button>
//                         </form>
//                     </div>
//                 </div>

//                 {/* --- Middle Section --- */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 sm:gap-x-8 gap-y-10 sm:gap-y-12">
//                     <div className="col-span-1">
//                         <NavColumn title="TRADING" links={navData.TRADING} />

//                     </div>
//                     <div className="col-span-1">

//                         <NavColumn
//                             title="TRADING PLATFORMS"
//                             links={navData.TRADING_PLATFORMS}
//                         />
//                     </div>
//                     <div className="col-span-1">
//                         <NavColumn
//                             title="TRADING CONDITIONS"
//                             links={navData.TRADING_CONDITIONS}
//                         />
//                     </div>
//                     <div className="col-span-1">
//                         <NavColumn title="ACCOUNTS" links={navData.ACCOUNTS} />
//                     </div>
//                     <div className="col-span-1">
//                         <NavColumn title="PROMOTIONS" links={navData.PROMOTIONS} />
//                     </div>
//                     <div className="col-span-1">
//                         <NavColumn
//                             title="PARTNERS"
//                             links={navData.PARTNERS}
//                         />

//                     </div>
//                     <div className="col-span-1">
//                         <NavColumn title="ABOUT" links={navData.ABOUT} />

//                     </div>
//                     <div className="col-span-1">

//                         <NavColumn title="LEGAL" links={navData.LEGAL} />
//                     </div>
//                 </div>


//             </div>


//             {/* --- Bottom Section --- */}
//             <div className="flex flex-col lg:flex-row justify-between items-center py-6 px-8 bg-[#08263f] border-t border-gray-700 space-y-6 lg:space-y-0">
//                 {/* Logo */}
//                 <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
//                 <Link href='/'>
//                             <Image width={150} height={150} alt='logo' src='/images/logo-full.png' priority className='h-10 w-auto' />
//                           </Link>
//                 </div>

//                 {/* Downloads */}
//                 <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
//                     <a
//                         href="#"
//                         className="border border-gray-500 rounded-lg px-2 py-1 flex items-center hover:border-white transition"
//                     >
//                         <div className="flex flex-col text-left px-1">
//                             <span className="text-[9px] sm:text-[10px] text-gray-400 leading-none">
//                                 Download on the
//                             </span>
//                             <span className="text-xs sm:text-sm font-semibold leading-tight">
//                                 App Store
//                             </span>
//                         </div>
//                     </a>

//                     <a
//                         href="#"
//                         className="border border-gray-500 rounded-lg px-2 py-1 flex items-center hover:border-white transition"
//                     >
//                         <div className="flex flex-col text-left px-1">
//                             <span className="text-[9px] sm:text-[10px] text-gray-400 leading-none">
//                                 GET IT ON
//                             </span>
//                             <span className="text-xs sm:text-sm font-semibold leading-tight">
//                                 Google Play
//                             </span>
//                         </div>
//                     </a>

//                     <div className="w-8 h-8 border border-gray-500 rounded-lg flex items-center justify-center">
//                         <Globe className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
//                     </div>
//                 </div>
//             </div>
//             <DisclaimerSection />
//         </footer>
//     );
// }

import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#295177] text-white pt-[90px] pb-0">
      {/* Top */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10 md:gap-0 justify-between pb-[80px]">
        {/* Left: Community */}
        <div className="flex-1 flex flex-col gap-6">
          <div>
            <span className="font-outfit font-medium text-[40px] leading-[125%] tracking-[-0.25%]">Join Our <strong className="text-[#3fa9f5]">Community</strong></span>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="#"><Image src="/images/Group1597881022.svg" alt="YouTube" width={51} height={51} unoptimized /></a>
            <a href="#"><Image src="/images/Group%201597881023.svg" alt="X" width={51} height={51} unoptimized /></a>
            <a href="#"><Image src="/images/Group%201597881024.svg" alt="Instagram" width={51} height={51} unoptimized /></a>
            <a href="#"><Image src="/images/Group%201597881025.png" alt="Facebook" width={51} height={51} unoptimized /></a>
            <a href="#"><Image src="/images/Group%201597881021.png" alt="LinkedIn" width={51} height={51} unoptimized /></a>
          </div>
        </div>
        {/* Right: Newsletter */}
        <div className="flex-1 flex flex-col gap-6 items-end">
          <span className="text-[20px] font-medium font-[Outfit] mb-2 mx-auto">Stay in the know about offers and promotions</span>
          <div className="flex items-center gap-3">
  {/* Email Input */}
  <input
    type="email"
    placeholder="Enter your email"
    className="w-[369px] h-[48px] text-[18px] px-[20px] py-[27px] flex-1 px-4 py-2 rounded-full border border-white text-white placeholder-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

  {/* Subscribe Button */}
  <button className="px-[40px] py-[16px] text-[18px] font-bold bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors">
    Subscribe
  </button>
</div>
        </div>
      </div>
      {/* Middle: Links */}
      <div className="container mx-auto px-4 mt-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        {/* Trading */}
        <div>
          <div className="font-inter font-bold text-[18px] leading-[100%] tracking-[0px] uppercase mb-2 text-[#B0BCC9]">TRADING</div>
          <div className="py-[10px] mb-1 font-inter font-medium text-[18px] leading-[100%]">Trading Instruments</div>
          <ul className="mb-2 font-inter font-normal text-[16px] leading-[2] tracking-[0px]">
            <li>Forex</li>
            <li>Commodities</li>
            <li>Metals</li>
            <li>Indices</li>
            <li>Crypto</li>
          </ul>
          <div className="pt-[25px] py-[10px] mb-1 font-inter font-medium text-[18px] leading-[100%]">Trading Platforms</div>
          <ul className="mb-2 font-inter font-normal text-[16px] leading-[2] tracking-[0px]">
            <li>Meta Trader 5</li>
            <li>Desktop Trader</li>
            <li>Mobile Trader</li>
          </ul>
        </div>
        {/* Trading Conditions */}
        <div>
          <div className="pt-[25px] py-[10px] mb-1 font-inter font-medium text-[18px] leading-[100%]">Trading Conditions</div>
          <ul className="mb-2 font-inter font-normal text-[16px] leading-[2] tracking-[0px]">
            <li>Who is a Professional Client</li>
            <li>Execution Policy</li>
            <li>Spreads, Commissions</li>
            <li>Market Hours</li>
          </ul>
        </div>
        {/* Accounts */}
        <div>
          <div className="font-inter font-semibold text-[18px] leading-[100%] tracking-[0px] uppercase mb-2 text-[#B0BCC9]">ACCOUNTS</div>
          <div className="mb-1 py-[10px] mb-1 font-inter font-medium text-[18px] leading-[100%]">Account Types</div>
          <ul className="mb-2 font-inter font-normal text-[16px] leading-[2] tracking-[0px]">
            <li>Standard Accounts</li>
            <li>Corporate Accounts</li>
            <li>Swap Free Accounts</li>
            <li>FIX API</li>
            <li>Accounts Comparison</li>
          </ul>
          <div className="text-[#fff] font-inter font-semibold text-[18px] leading-[100%] tracking-[0px] uppercase pt-[40px]">PARTNERS</div>
        </div>
        {/* Promotions */}
        <div>
          <div className="font-inter font-semibold text-[18px] leading-[100%] tracking-[0px] uppercase mb-2 text-[#B0BCC9]">PROMOTIONS</div>
          <div class="mb-1 py-[10px] mb-1 font-inter font-medium text-[18px] leading-[100%]">Latest Promotions</div>
          <ul className="mb-2 font-inter font-normal text-[16px] leading-[2] tracking-[0px]">
            <li>Welcome Bonus</li>
          </ul>
        </div>
        {/* About */}
        <div>
          <div className="font-inter font-semibold text-[18px] leading-[100%] tracking-[0px] uppercase mb-2 text-[#B0BCC9]">ABOUT</div>
          <div class="mb-1 py-[10px] mb-1 font-inter font-medium text-[18px] leading-[100%]">About Us</div>
          <ul className="mb-2 font-inter font-normal text-[16px] leading-[2] tracking-[0px]">
            <li>Why MY MAA MARKETS</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>FAQs</li>
          </ul>
          <div class="mb-1 pt-[25px] py-[10px] mb-1 font-inter font-medium text-[18px] leading-[100%]">Legal</div>
          <ul className="mb-2 font-inter font-normal text-[16px] leading-[2] tracking-[0px]">
            <li>Legal Documents</li>
            <li>License</li>
            <li>Protection of Funds</li>
          </ul>
        </div>
      </div>
      {/* App Download & Logo */}
      <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#3a6a99] pt-8">
        <div className="flex items-center gap-4">
          <Image src="/images/logo-full.png" alt="Logo" width={310} height={60} unoptimized />
        </div>
        <div className="flex gap-4">
          <a href="#"><Image src="/images/AppLogo.png" alt="App Store" width={180} height={59} unoptimized /></a>
          <a href="#"><Image src="/images/AppLogo-1.png" alt="Google Play" width={180} height={59} unoptimized /></a>
          <a href="#"><Image src="/images/AppLogo2.png" alt="QR Code" width={59} height={59} unoptimized /></a>
        </div>
      </div>
      {/* Bottom: Disclaimer */}
      <div className="w-full bg-[#25496a] mt-8 pt-[60px] pb-[60px] px-4 text-gray-200">
  <div className="container mx-auto flex flex-col gap-6 text-[16px] leading-[130%] font-inter tracking-[0%]">

    <div>
      <span className="font-bold block mb-2">Regulated BY FSC</span>
      Globally Leading Multi-Asset Broker. Your trusted partner in global trade for a secure and efficient trading experience. 
      Unmatched Reliability, Advanced Security, and Exceptional Support for a Superior Trading Experience.
    </div>

    <div>
      <span className="font-bold block mb-2">Disclaimer</span>
      The information provided on this website is for general information purposes only. While we strive to provide accurate and up-to-date information, 
      we make no warranties or representations about the accuracy, completeness, or reliability of the information on this website. 
      Any reliance you place on such information is strictly at your own risk.<br />
      We do not accept any liability for any financial losses or damages arising directly or indirectly from the use of the information on this website. 
      It is your responsibility to verify the information before acting upon it.
    </div>

    <div>
      <span className="font-bold block mb-2">Risk Disclosure</span>
      Investing in financial markets carries a high level of risk, and you should only consider trading if you understand the risks involved. 
      Before making any trading decisions, you should carefully consider your investment objectives, risk tolerance, and financial situation.<br />
      By accessing or using this website, you acknowledge and accept the inherent risks involved in trading and investing, and you agree to hold 
      MY MAA MARKETS LTD harmless for any losses that may occur as a result of your trading activities.
    </div>

    <div>
      <span className="font-bold block mb-2">Restricted Countries</span>
      <span className="font-bold">MY MAA MARKETS LTD</span> does not provide services to the following countries: 
      General Restrictions: Australia, USA, Russia.<br />
      High ML/FT Risk Countries: Due to ongoing and substantial risk levels regarding combating and the financing of terrorism (ML/FT), 
      we do not offer accounts to residents of the following countries – Afghanistan, Angola, Bahamas, Botswana, Myanmar, Côte d'Ivoire (Ivory Coast), 
      Crimea and Sevastopol, Cuba, Democratic People's Republic of Korea (DPRK), Democratic Republic of Congo, Liberia, Ghana, Iran, Iraq, Mongolia, 
      North Korea, Somalia, Sudan, Syria, Trinidad and Tobago, Yemen, Zimbabwe.<br />
      Note: The above list applies exclusively to the services provided by MY MAA MARKETS LTD. 
      For any further clarifications, please visit 
      <a href="https://www.mymaamarkets.com" className="underline text-[#3fa9f5]"> www.mymaamarkets.com</a> 
      or contact our support team.
    </div>

  </div>
</div>
    </footer>
  );
}