import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`border ${isOpen ? 'border-blue-300' : 'border-gray-200'} rounded-xl mb-4 overflow-hidden shadow-sm transition-all duration-300`}
    >
      {/* Accordion Header */}
      <button
        className={`flex justify-between items-center w-full text-left p-5 transition-colors ${isOpen ? 'bg-white' : 'hover:bg-gray-50'}`}
        onClick={onClick}
      >
        <span className={`text-xl font-semibold text-[#0F3D62]`}>
          {title}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-blue-600" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>

      {/* Accordion Content */}
      <div
        className={`transition-opacity duration-500 ease-in-out overflow-hidden ${isOpen ? 'opacity-100 max-h-[500px] p-5 pt-0' : 'opacity-0 max-h-0 p-0'}`}
      >
        <div className="text-gray-600 text-base leading-relaxed">{content}</div>
      </div>
    </motion.div>
  );
};

export default function FAQSection() {
  const [openItem, setOpenItem] = useState('What is trading?');

  const toggleItem = (title) => {
    setOpenItem(openItem === title ? null : title);
  };

  const faqData = [
    {
      title: 'What is trading?',
      content: (
        <>
          <p className="mb-4">
            Trading is the act of buying and selling goods, services, or financial assets (like stocks, currencies, or commodities) to make a profit.
          </p>
          <p>
            In finance, trading usually refers to the exchange of financial instruments — such as stocks, bonds, forex, or cryptocurrencies — where traders aim to earn money from changes in their prices.
          </p>
        </>
      ),
    },
    {
      title: 'What markets can I trade on with My MAA Markets?',
      content:
        'You can trade on major markets across 5 asset classes including Forex, Indices, Metals, Stocks, and Crypto. We offer over 40 currency pairs, majors, crosses, and exotics.',
    },
    {
      title: 'What makes My MAA Markets different from other trading firms?',
      content:
        'My MAA Markets distinguishes itself through highly competitive, low spreads, zero commissions, instant withdrawal processing, and regulation by the FSC (Financial Services Commission - Mauritius).',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        {/* Left Section */}
        <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
          <h2 className="text-3xl sm:text-4xl font-medium text-[#0F3D62] leading-tight common-heading">
            Frequently <br /> <span className="font-extrabold text-[#006EFF]"> Asked </span> <br />
            Questions
          </h2>

          <div className="mt-auto">
            <p className="text-base sm:text-lg text-[#0F3D62] font-semibold mb-4 max-w-sm">
              Can't Find What You Are Looking For?
            </p>

            <a
              href="#"
              className="inline-block px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition text-sm sm:text-base"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right Section - Accordion */}
        <div className="lg:col-span-2 space-y-4">
          {faqData.map((item) => (
            <AccordionItem
              key={item.title}
              title={item.title}
              content={item.content}
              isOpen={openItem === item.title}
              onClick={() => toggleItem(item.title)}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
