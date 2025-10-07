import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#295177] text-white pt-16 pb-0">
      {/* Top */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10 justify-between pb-16">
        {/* Left: Community */}
        <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
          <span className="font-outfit font-medium text-3xl sm:text-4xl leading-snug">
            Join Our <strong className="text-[#3fa9f5]">Community</strong>
          </span>

          <div className="flex justify-center md:justify-start flex-wrap gap-3 mt-2">
            <a href="#"><Image src="/images/Group1597881022.svg" alt="YouTube" width={45} height={45} unoptimized /></a>
            <a href="#"><Image src="/images/Group%201597881023.svg" alt="X" width={45} height={45} unoptimized /></a>
            <a href="#"><Image src="/images/Group%201597881024.svg" alt="Instagram" width={45} height={45} unoptimized /></a>
            <a href="#"><Image src="/images/Group%201597881025.png" alt="Facebook" width={45} height={45} unoptimized /></a>
            <a href="#"><Image src="/images/Group%201597881021.png" alt="LinkedIn" width={45} height={45} unoptimized /></a>
          </div>
        </div>

        {/* Right: Newsletter */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-4">
          <span className="text-[18px] sm:text-[20px] font-medium text-center md:text-right">
            Stay in the know about offers and promotions
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-[300px] md:w-[369px] h-[45px] text-[16px] px-4 rounded-full border border-white text-white placeholder-white bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full sm:w-auto px-8 py-2 text-[16px] font-bold bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Middle: Links */}
      <div className="container mx-auto px-4 mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        {/* Trading */}
        <div>
          <div className="font-inter font-bold text-[16px] md:text-[18px] uppercase mb-2 text-[#B0BCC9]">TRADING</div>
          <div className="font-inter font-medium text-[16px] md:text-[18px] mb-1">Trading Instruments</div>
          <ul className="font-inter font-normal text-[14px] md:text-[16px] leading-[2]">
            <li>Forex</li>
            <li>Commodities</li>
            <li>Metals</li>
            <li>Indices</li>
            <li>Crypto</li>
          </ul>

          <div className="pt-4 font-inter font-medium text-[16px] md:text-[18px]">Trading Platforms</div>
          <ul className="font-inter font-normal text-[14px] md:text-[16px] leading-[2]">
            <li>Meta Trader 5</li>
            <li>Desktop Trader</li>
            <li>Mobile Trader</li>
          </ul>
        </div>

        {/* Trading Conditions */}
        <div>
          <div className="font-inter font-medium text-[16px] md:text-[18px] pt-4 md:pt-6">Trading Conditions</div>
          <ul className="font-inter font-normal text-[14px] md:text-[16px] leading-[2]">
            <li>Who is a Professional Client</li>
            <li>Execution Policy</li>
            <li>Spreads, Commissions</li>
            <li>Market Hours</li>
          </ul>
        </div>

        {/* Accounts */}
        <div>
          <div className="font-inter font-semibold text-[16px] md:text-[18px] uppercase mb-2 text-[#B0BCC9]">ACCOUNTS</div>
          <div className="font-inter font-medium text-[16px] md:text-[18px] mb-1">Account Types</div>
          <ul className="font-inter font-normal text-[14px] md:text-[16px] leading-[2]">
            <li>Standard Accounts</li>
            <li>Corporate Accounts</li>
            <li>Swap Free Accounts</li>
            <li>FIX API</li>
            <li>Accounts Comparison</li>
          </ul>
          <div className="text-[#fff] font-inter font-semibold text-[16px] md:text-[18px] uppercase pt-6">PARTNERS</div>
        </div>

        {/* Promotions */}
        <div>
          <div className="font-inter font-semibold text-[16px] md:text-[18px] uppercase mb-2 text-[#B0BCC9]">PROMOTIONS</div>
          <div className="font-inter font-medium text-[16px] md:text-[18px] mb-1">Latest Promotions</div>
          <ul className="font-inter font-normal text-[14px] md:text-[16px] leading-[2]">
            <li>Welcome Bonus</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <div className="font-inter font-semibold text-[16px] md:text-[18px] uppercase mb-2 text-[#B0BCC9]">ABOUT</div>
          <div className="font-inter font-medium text-[16px] md:text-[18px] mb-1">About Us</div>
          <ul className="font-inter font-normal text-[14px] md:text-[16px] leading-[2]">
            <li>Why MY MAA MARKETS</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>FAQs</li>
          </ul>
          <div className="font-inter font-medium text-[16px] md:text-[18px] pt-4 mb-1">Legal</div>
          <ul className="font-inter font-normal text-[14px] md:text-[16px] leading-[2]">
            <li>Legal Documents</li>
            <li>License</li>
            <li>Protection of Funds</li>
          </ul>
        </div>
      </div>

      {/* App Download & Logo */}
      <div className="container mx-auto px-4 mt-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#3a6a99] pt-8">
        <div className="flex items-center justify-center md:justify-start">
          <Image src="/images/logo-full.png" alt="Logo" width={220} height={50} unoptimized />
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="#"><Image src="/images/AppLogo.png" alt="App Store" width={150} height={50} unoptimized /></a>
          <a href="#"><Image src="/images/AppLogo-1.png" alt="Google Play" width={150} height={50} unoptimized /></a>
          <a href="#"><Image src="/images/AppLogo2.png" alt="QR Code" width={55} height={55} unoptimized /></a>
        </div>
      </div>

      {/* Bottom: Disclaimer */}
      <div className="w-full bg-[#25496a] mt-8 pt-10 pb-10 px-4 text-gray-200">
        <div className="container mx-auto flex flex-col gap-6 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] font-inter">
          <div>
            <span className="font-bold block mb-1">Regulated BY FSC</span>
            Globally Leading Multi-Asset Broker. Your trusted partner in global trade for a secure and efficient trading experience.
          </div>

          <div>
            <span className="font-bold block mb-1">Disclaimer</span>
            The information provided on this website is for general information purposes only...
          </div>

          <div>
            <span className="font-bold block mb-1">Risk Disclosure</span>
            Investing in financial markets carries a high level of risk...
          </div>

          <div>
            <span className="font-bold block mb-1">Restricted Countries</span>
            <span className="font-bold">MY MAA MARKETS LTD</span> does not provide services to certain countries.
          </div>
        </div>
      </div>
    </footer>
  );
}
