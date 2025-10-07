
const DisclaimerSection = () => (
    // Uses a slightly darker blue background to differentiate it from the main footer section
    <div className="bg-[#173a55] text-white py-10">
        <div className="container mx-auto px-6 text-sm text-gray-400 space-y-6 leading-relaxed">
            
            {/* Regulatory Statement */}
            <div className="text-xs">
                <p className="font-bold text-gray-200 mb-1">Regulated by FSC</p>
                <p>
                    Globally Leading Multi-Asset Broker: Your trusted partner in global trade for a secure and efficient trading experience. Unmatched Reliability, Advanced Security, and Exceptional Support 
                    for a Superior Trading Experience
                </p>
            </div>

            {/* Disclaimer */}
            <div>
                <p className="font-bold text-gray-200 mb-1">Disclaimer</p>
                <p>
                    The information provided on this website is for general information purposes only. While we strive to provide accurate and up-to-date information, we make no warranties or representations 
                    about the accuracy, completeness, or reliability of the information on this website. Any reliance you place on such information is strictly at your own risk. 
                </p>
                <p className="mt-2">
                    We do not accept any liability for any financial losses or damages arising directly or indirectly from the use of the information on this website. It is your responsibility to verify the information 
                    before acting upon it.
                </p>
            </div>

            {/* Risk Disclosure */}
            <div>
                <p className="font-bold text-gray-200 mb-1">Risk Disclosure</p>
                <p>
                    Investing in financial markets carries a high level of risk, and you should only consider trading if you understand the risks involved. Before making any trading decisions, you should carefully 
                    consider your investment objectives, risk tolerance, and financial situation.
                </p>
                <p className="mt-2">
                    By accessing or using this website, you acknowledge and accept the inherent risks involved in trading and investing, and you agree to hold MY MAA MARKETS LTD harmless for any losses 
                    that may occur as a result of your trading activities.
                </p>
            </div>
            
            {/* Restricted Countries */}
            <div>
                <p className="font-bold text-gray-200 mb-1">Restricted Countries</p>
                <p>
                    MY MAA MARKETS LTD does not provide services to the following countries: General Restrictions - **Australia, USA, Russia**.
                </p>
                <p className="mt-2">
                    High ML/FT Risk Countries: Due to ongoing and substantial risks related to money laundering and the financing of terrorism (ML/FT), we do not offer accounts to residents of the following 
                    countries: **Afghanistan, Angola, Bahamas, Botswana, Myanmar, Côte d'Ivoire (Ivory Coast), Crimea and Sevastopol, Cuba, Democratic People's Republic of Korea (DPRK), Democratic 
                    Republic of Congo, Liberia, Ghana, Iran, Iraq, Mongolia, North Korea, Panama, Somalia, Sudan, Syria, Trinidad and Tobago, Yemen, Zimbabwe, Niue**. The above list applies exclusively to the 
                    services provided by MY MAA MARKETS LTD. For any further clarifications, please visit our website www.mymaamarkets.com or contact our support team.
                </p>
            </div>
        </div>
    </div>
);

export default DisclaimerSection;