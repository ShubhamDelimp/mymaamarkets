import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';
 
const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div
            className={`border ${isOpen ? 'border-blue-300' : 'border-gray-200'
                } rounded-xl mb-4 overflow-hidden shadow-sm transition-all duration-300`}
        >
            {/* Accordion Header */}
            <button
                className={`flex justify-between items-center w-full text-left p-5 transition-colors ${isOpen ? 'bg-white' : 'hover:bg-gray-50'
                    }`}
                onClick={onClick}
            >
                <span
                    className={`text-lg font-semibold ${isOpen ? 'text-gray-900' : 'text-gray-800'
                        }`}
                >
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
                className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 p-5 pt-0'
                    }`}
                style={{ padding: isOpen ? '20px' : '0 20px' }}
            >
                <div className="text-gray-600 text-base leading-relaxed">{content}</div>
            </div>
        </div>
    );
};
 
export default function FAQSection() {
    const [openItem, setOpenItem] = useState('What is trading?'); // ✅ Default: all closed
 
    const toggleItem = (title) => {
        setOpenItem(openItem === title ? null : title);
    };
 
    const faqData = [
        {
            title: 'What is trading?',
            content: (
                <>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
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
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
               
                <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                        Frequently
                    </h2>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-6 leading-tight">
                        Asked Questions
                    </h2>
 
                    <p className="text-base sm:text-lg text-gray-700 mb-4 max-w-sm">
                        Can't Find What You Are Looking For?
                    </p>
 
                    <a
                        href="#"
                        className="inline-block px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition text-sm sm:text-base"
                    >
                        Get in Touch
                    </a>
                </div>
 
 
                {/* Right: Accordion Items */}
                <div className="lg:col-span-2">
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
            </div>
        </section>
    );
}
 