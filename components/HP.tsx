"use client";
import dynamic from "next/dynamic";
import type { NextPage } from 'next';
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from '../app/index.module.css';
import Link from "next/link";
function TVTickerInner({
  symbols = [
    { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
    { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
    { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
    { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
  ],
  colorTheme = "light",
  displayMode = "adaptive",
  isTransparent = false,
}: {
  symbols?: Array<{ proName: string; title?: string }>;
  colorTheme?: "dark" | "light";
  displayMode?: "adaptive" | "regular" | "compact";
  isTransparent?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const s = document.createElement("script");
    s.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    s.async = true;
    s.innerHTML = JSON.stringify({
      symbols,
      colorTheme,
      displayMode,
      isTransparent,
      locale: "en",
      showSymbolLogo: true,
      largeChartUrl: "",
    });
    ref.current.appendChild(s);
    return () => {
      if (ref.current) ref.current.innerHTML = "";
    };
  }, [symbols, colorTheme, displayMode, isTransparent]);

  return (
    <div ref={ref} className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget" />
    </div>
  );
}
const TVTicker = dynamic(() => Promise.resolve(TVTickerInner), { ssr: false });
function TVQuoteInner({ symbol, width = "100%", colorTheme = "light" }: { symbol: string; width?: number | string; colorTheme?: "light" | "dark" }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol,
      colorTheme,
      isTransparent: false,
      locale: "en",
      width,
    });
    ref.current.appendChild(script);
    return () => {
      if (ref.current) ref.current.innerHTML = ""; // cleanup on unmount
    };
  }, [symbol, width, colorTheme]);

  return (
    <div ref={ref} className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget" />
      {/* TradingView renders into the div above */}
    </div>
  );
}
const TVQuote = dynamic(() => Promise.resolve(TVQuoteInner), { ssr: false });
const HP:NextPage = () => {
  return (
    <div className={styles.hp}>
      <Image className={styles.isolationModeIcon} width={1920} height={736} sizes="100vw" alt="" src="/images/Isolation_Mode.png" unoptimized priority />
      <div className={styles.hpChild} />
      <div className={styles.hpItem} />
      <div className={styles.hpInner} />
      <div className={styles.groupParent}>
        <Image className={styles.groupChild} width={1006.1} height={1013.1} sizes="100vw" alt="" src="/images/1d9b7e343e74ec94e1756509295a223fc8fbd958.png" unoptimized />
        <div className={styles.groupItem} />
      </div>
      <div className={styles.rectangleDiv} />
      {/* <Image className={styles.groupIcon} width={2163} height={314} sizes="100vw" alt="" src="/images/1d9b7e343e74ec94e1756509295a223fc8fbd958.png"  unoptimized /> */}
      {/* <div className={styles.wrapperGroup1597880896Parent}>
        <div className={styles.wrapperGroup1597880896}>
          <Image className={styles.wrapperGroup1597880896Child} width={1351.2} height={1295.5} sizes="100vw" alt="" src="/images/1d9b7e343e74ec94e1756509295a223fc8fbd958.png"  unoptimized />
        </div>
        <div className={styles.groupInner} />
        <div className={styles.hpGroupChild} />
      </div> */}
      {/* <Image className={styles.hpHpChild} width={150.7} height={77.5} sizes="100vw" alt="" src="/images/1d9b7e343e74ec94e1756509295a223fc8fbd958.png"  unoptimized /> */}
      <div className={styles.educationHub}>
        <b>{`Education `}</b>
        <span className={styles.hub}>Hub</span>
      </div>
      <Image className={styles.u7947585315ProfessionalCloseIcon} width={389} height={371} sizes="100vw" alt="" src="/images/6ec05751ae71959106d606fc9a96a43fe29aeb00.png" unoptimized />
      <div className={styles.hpChild2} />
      <div className={styles.hpChild3} />
      <div className={styles.hpChild4} />
      <div className={styles.wrapperFabfab3000ExtremeClo}>
        <Image className={styles.wrapperGroup1597880896Child} width={960} height={905} sizes="100vw" alt="" src="/images/hhhhee.png" unoptimized />
      </div>
      <div className={styles.hpChild5} />
      <Image className={styles.rectangleIcon} width={280} height={250} sizes="100vw" alt="" src="/images/rectangle131.png" unoptimized />
      <div className={styles.currencyPairs}>{`40+ currency pairs – majors, crosses & exotics`}</div>
      <Image className={styles.cmcapitaldesignACloseUpShoIcon} width={1420} height={500} sizes="100vw" alt="" src="/images/eeee.png" unoptimized />
      <div className={styles.rr} />
      <div className={styles.wrapperYidianlingxiAHighTeParent}>
        <div className={styles.wrapperYidianlingxiAHighTe}>
          <Image className={styles.yidianlingxiAHighTechDigitIcon} width={1506} height={844} sizes="100vw" alt="" src="/images/yidianlingxi_A_high-tech_digital-style_Earth_its_surface_wrappe_fbe54872-2b5d-4087-a792-c36d2a472ef9 1.png" unoptimized />
        </div>
        <div className={styles.groupChild2} />
        <div className={styles.groupChild3} />
      </div>
      <div className={styles.icon} />
      <div className={styles.hpIcon} />
      <div className={styles.input}>Name</div>
      <div className={styles.icon2} />
      <div className={styles.icon3} />
      <div className={styles.hpInput}>Name</div>
      <div className={styles.en}><div
  style={{
    position: "relative",
    display: "inline-block",
    fontFamily: "Arial, sans-serif"
  }}
>
  <div
    style={{
      padding: "8px 14px",
      border: "1px solid #ddd",
      borderRadius: 6,
      cursor: "pointer",
      backgroundColor: "white",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      minWidth: 80
    }}
    // onmouseover="this.nextElementSibling.style.display='block'"
    // onmouseout="this.nextElementSibling.style.display='none'"
  >
    EN ▼
  </div>
  <div
    style={{
      display: "none",
      position: "absolute",
      top: 40,
      left: 0,
      backgroundColor: "white",
      border: "1px solid #ddd",
      borderRadius: 6,
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      zIndex: 10,
      minWidth: 100
    }}
    // onmouseover="this.style.display='block'"
    // onmouseout="this.style.display='none'"
  >
    <div
      style={{ padding: "8px 10px", cursor: "pointer" }}
      // onclick="selectLang(this)"
    >
      EN — English
    </div>
    <div
      style={{ padding: "8px 10px", cursor: "pointer" }}
      // onclick="selectLang(this)"
    >
      HI — हिन्दी
    </div>
    <div
      style={{ padding: "8px 10px", cursor: "pointer" }}
      // onclick="selectLang(this)"
    >
      FR — Français
    </div>
  </div>
</div>
</div>
      <div className={styles.contactUs}>CONTACT US</div>
      <div className={styles.regulatedByFsc}>Regulated BY FSC</div>
      <Image className={styles.vectorIcon} width={12} height={7.8} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
      <Image className={styles.hpChild6} width={22.7} height={21.5} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
      <div className={styles.signInButton}>
        <Link href={"https://cp.mymaamarkets.com/Home/Signup"} >
        <div className={styles.rectangle} />
        <div className={styles.register}>Register</div>
        </Link>
      </div>
      <div className={styles.rectangleParent}>
        <Link href={"https://cp.mymaamarkets.com/"} >
        <div className={styles.hpRectangle} />
        <div className={styles.register}>Login</div>
        </Link>
      </div>
      <div className={styles.tradingParent}>
        <div className={styles.trading}>TRADING</div>
        <div className={styles.learning}>LEARNING</div>
        <div className={styles.promotions}>PROMOTIONS</div>
        <div className={styles.partners}>PARTNERS</div>
        <div className={styles.eventsAeards}>{`EVENTS & AEARDS`}</div>
        <div className={styles.about}>ABOUT</div>
        <div className={styles.blog}>BLOG</div>
      </div>

      {/* FIX: missing leading slash */}
      <Image className={styles.hpChild7} width={280} height={51.8} sizes="100vw" alt="" src="/images/logo-full.webp" unoptimized />

      <div className={styles.seamlessAccessToContainer}>
        <p className={styles.seamlessAccess}>{`Seamless Access `}</p>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.to}>{`to `}</span>
          <b className={styles.globalMarkets}>Global Markets</b>
        </p>
        <p className={styles.seamlessAccess}>at Your Fingertips</p>
      </div>
      <div className={styles.lineParent}>
        <div className={styles.lineDiv} />
        <div className={styles.groupChild4} />
        <div className={styles.groupChild5} />
      </div>
      <div className={styles.tryDemo}>Try Demo</div>
      <div className={styles.hpChild8} />
      <div className={styles.spreadsFrom}>
        <p className={styles.toGlobalMarkets}>Spreads</p>
        <p className={styles.toGlobalMarkets}>from</p>
      </div>
      <div className={styles.depositFee}>
        <p className={styles.toGlobalMarkets}>Deposit</p>
        <p className={styles.toGlobalMarkets}>Fee</p>
      </div>
      <div className={styles.withdrawalWithin}>
        <p className={styles.toGlobalMarkets}>Withdrawal</p>
        <p className={styles.toGlobalMarkets}>within</p>
      </div>
      {/* <div className={styles.hpChild9} /> */}
      {/* <div className={styles.hpChild10} /> */}
      {/* <Image className={styles.screenshot20250910At1130} width={183} height={88} sizes="100vw" alt="" src="/images/blank.png" unoptimized /> */}
	  <div className={styles.tvWrapLeft}>
		<TVQuote symbol="NASDAQ:AAPL" />
		</div>

		<div className={styles.tvWrapRight}>
		<TVQuote symbol="FX:EURUSD" />
		</div>

      <div className={styles.div}>0.0</div>
      <div className={styles.hpDiv}>$0</div>
      <div className={styles.h}>2H</div>
      <div className={styles.hpChild11} />
      <div className={styles.investInTheContainer}>
        <p className={styles.seamlessAccess}>{`Invest in the `}</p>
        <p className={styles.bestPerformingMarkets}>
          <span>
            <span className={styles.bestPerforming}>Best Performing</span>
            <span className={styles.span}>{`  `}</span>
          </span>
          <span className={styles.span}>
            <span className={styles.hpMarkets}>Markets</span>
          </span>
        </p>
      </div>
      <div className={styles.youCanTradeContainer}>{`You can trade on major markets across 5 assets classes including `}
        <span className={styles.forex}>Forex</span>,
        <span className={styles.forex}> Indices,</span>{` `}
        <span className={styles.forex}>Metals</span>{`, `}
        <span className={styles.forex}>Stocks</span>{` and `}
        <span className={styles.forex}>Crypto</span>.
      </div>

      {/* CTA: add role + keyboard without changing your DOM */}
      <div className={styles.openLiveAccountWrapper} role="button" tabIndex={0} aria-label="Open Live Account">
        <b className={styles.openLiveAccount}>Open Live Account</b>
      </div>
      <div className={styles.openLiveAccountContainer} role="button" tabIndex={0} aria-label="Open Live Account">
        <b className={styles.openLiveAccount}>Open Live Account</b>
      </div>
      <div className={styles.openLiveAccountFrame} role="button" tabIndex={0} aria-label="Open Live Account">
        <b className={styles.openLiveAccount}>Open Live Account</b>
      </div>
      <div className={styles.registerWrapper} role="button" tabIndex={0} aria-label="Register">
        <b className={styles.openLiveAccount}>Register</b>
      </div>

      <b className={styles.shares}>Shares</b>
      <div className={styles.hpChild12} />
      <Image className={styles.hpChild13} width={280} height={250} sizes="100vw" alt="" src="/images/rectangle129.png" unoptimized />
      <div className={styles.hpCurrencyPairs}>{`40+ currency pairs – majors, crosses & exotics`}</div>
      <b className={styles.hpForex}>Forex</b>
      <Image className={styles.hpChild14} width={55} height={55} sizes="100vw" alt="" src="/images/group1597880849.png" unoptimized />
      <div className={styles.hpChild15} />
      <Image className={styles.hpChild16} width={280} height={250} sizes="100vw" alt="" src="/images/rectangle126.png" unoptimized />
      <div className={styles.currencyPairs2}>{`40+ currency pairs – majors, crosses & exotics`}</div>
      <b className={styles.hpMetals}>Metals</b>
      <Image className={styles.hpChild17} width={55} height={55} sizes="100vw" alt="" src="/images/group1597880849.png" unoptimized />
      <div className={styles.currencyPairs3}>{`40+ currency pairs – majors, crosses & exotics`}</div>
      <b className={styles.hpIndices}>Indices</b>
      <Image className={styles.hpChild18} width={55} height={55} sizes="100vw" alt="" src="/images/group1597880849.png" unoptimized />
      <Image className={styles.hpChild19} width={55} height={55} sizes="100vw" alt="" src="/images/group1597880849.png" unoptimized />
      <div className={styles.hpChild20} />
      <div className={styles.hpChild21} />
      <Image className={styles.chatgptImageSep23202501} width={337} height={337} sizes="100vw" alt="" src="/images/b111c55b96e859f7b423045e80ebc46bdf5b2001.png" unoptimized />
      <div className={styles.currencyPairs4}>{`40+ currency pairs – majors, crosses & exotics`}</div>
      <b className={styles.hpCrypto}>Crypto</b>
      <Image className={styles.hpChild22} width={55} height={55} sizes="100vw" alt="" src="/images/group1597880849.png" unoptimized />
      <div className={styles.hpChild23} />
      <Image className={styles.screenshot20250911At809} width={533} height={851} sizes="100vw" alt="" src="/images/97e4d240d3612542cf134a3a732b6e1efc02e5c4.png" unoptimized />
      <div className={styles.ourResultsAreContainer}>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.our}>{`Our `}</span>
          <span className={styles.results}>
            <span className={styles.hpResults}>Results</span>
            <b className={styles.globalMarkets}>{` `}</b>
          </span>
          <span className={styles.to}>Are Proven</span>
        </p>
        <p className={styles.seamlessAccess}>in Numbers</p>
      </div>
      <div className={styles.tradingVolumeParent}>
        <div className={styles.tradingVolume}>Trading Volume</div>
        <div className={styles.hpB}>$2,500B+</div>
        <div className={styles.hpPartners}>Partners</div>
        <div className={styles.div2}>12,000+</div>
        <div className={styles.m}>35M+</div>
        <div className={styles.executedOrders}>Executed Orders</div>
        <div className={styles.div3}>170,000+</div>
        <div className={styles.activeClients}>Active Clients</div>
      </div>
      <div className={styles.mainTitle}>
        <p className={styles.toGlobalMarkets}>
          <b>{`Regulated `}</b>
        </p>
        <p className={styles.seamlessAccess}>Broker</p>
      </div>
      <div className={styles.mainDescription}>Our platform is regulated by the FSC (Financial Services Commission - Mauritius).</div>
      <div className={styles.learnMoreParent}>
        <div className={styles.learnMore}>Learn more</div>
        <div className={styles.groupChild6} />
      </div>
      <div className={styles.hpMainTitle}>
        <p className={styles.toGlobalMarkets}>
          <b>{`Instant `}</b>
        </p>
        <p className={styles.seamlessAccess}>Withdrawals</p>
      </div>
      <div className={styles.hpMainDescription}>Get your funds out quickly and easily with instant withdrawals.</div>
      <div className={styles.learnMoreGroup}>
        <div className={styles.learnMore}>Learn more</div>
        <div className={styles.groupChild6} />
      </div>
      <div className={styles.mainTitle2}>
        <p className={styles.toGlobalMarkets}>
          <b className={styles.globalMarkets}>{`Low `}</b>
          <span className={styles.to}>{`Spreads `}</span>
        </p>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.to}>{`& `}</span>
          <b className={styles.globalMarkets}>Zero</b>
          <span className={styles.to}> Commissions</span>
        </p>
      </div>
      <div className={styles.mainTitle3}>
        <p className={styles.toGlobalMarkets}>
          <b className={styles.globalMarkets}>{`Low `}</b>
          <span className={styles.to}>{`Spreads `}</span>
        </p>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.to}>{`& `}</span>
          <b className={styles.globalMarkets}>Zero</b>
          <span className={styles.to}> Commissions</span>
        </p>
      </div>
      <div className={styles.mainDescription2}>Cut your trading costs with our low spreads and zero commissions.</div>
      <div className={styles.mainDescription3}>Cut your trading costs with our low spreads and zero commissions.</div>
      <div className={styles.learnMoreContainer}>
        <div className={styles.learnMore}>Learn more</div>
        <div className={styles.groupChild6} />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.learnMore}>Learn more</div>
        <div className={styles.groupChild6} />
      </div>
      <div className={styles.seeUpcomingEventsParent}>
        <div className={styles.seeUpcomingEvents}>See Upcoming Events</div>
        <div className={styles.groupChild10} />
      </div>

      <Image className={styles.fsclogoIcon} width={151} height={66} sizes="100vw" alt="" src="/images/bfefd8c2ac54d518134f98d960b1f8cac7d69fd2.png" unoptimized />

      {/* FIX: encode spaces in filename */}
      <Image className={styles.dccLogo1} width={138} height={58} sizes="100vw" alt="" src="/images/DCC%20logo%201.svg" unoptimized />

      <Image className={styles.hpChild24} width={187} height={93} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
      <Image className={styles.chatgptImageSep11202508} width={1206.1} height={1048.9} sizes="100vw" alt="" src="/images/rff.png" unoptimized />

      {/* FIX: encode spaces + comma in filename */}
      <Image className={styles.hpChatgptImageSep11202508} width={459.2} height={490.4} sizes="100vw" alt="" src="/images/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2008_52_57%20AM%202.png" unoptimized />

      <div className={styles.button}>
        <div className={styles.buttonbase}>
          <div className={styles.icon4} />
          <b className={styles.download}>DOWNLOAD</b>
          <div className={styles.icon4} />
        </div>
      </div>
      <div className={styles.hpButton}>
        <div className={styles.buttonbase}>
          <div className={styles.icon4} />
          <b className={styles.download}>Deposit NOW</b>
          <div className={styles.icon4} />
        </div>
      </div>
      <div className={styles.metatrader5YourContainer}>
        <p className={styles.seamlessAccess}>MetaTrader 5</p>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.to}>—</span>
          <b className={styles.hpYourWay}>Your Way</b>
        </p>
      </div>
      <div className={styles.weUnderstandThatContainer}>We understand that different clients have different needs. Therefore, we offer a wide selection of trusted,
        <span className={styles.forex}>award-winning platforms</span> and account types to choose from.
      </div>
      <div className={styles.appLogo}>
        <Image className={styles.appLogoChild} width={22.9} height={28.1} sizes="100vw" alt="" src="/images/group1597880830.png" unoptimized />
        <div className={styles.appLogoInner}>
          <div className={styles.downloadOnParent}>
            <div className={styles.downloadOn}>download on</div>
            <div className={styles.appStore}>App Store</div>
          </div>
        </div>
      </div>
      <div className={styles.hpAppLogo}>
        <Image className={styles.appLogoItem} width={25.5} height={28.8} sizes="100vw" alt="" src="/images/Group1597880828.png" unoptimized />
        <div className={styles.frameDiv}>
          <div className={styles.downloadOnParent}>
            <div className={styles.downloadOn}>Get it on</div>
            <div className={styles.appStore}>Google Play</div>
          </div>
        </div>
      </div>
      <Image className={styles.clipPathGroup} width={138} height={138} sizes="100vw" alt="" src="/images/clipp.png" unoptimized />
      <div className={styles.mobileAppParent}>
        <div className={styles.mobileApp}>
          <p className={styles.toGlobalMarkets}>{`Mobile `}</p>
          <p className={styles.toGlobalMarkets}>App</p>
        </div>
        <Image className={styles.groupChild11} width={40.5} height={45} sizes="100vw" alt="" src="/images/group1597880446.png" unoptimized />
      </div>
      <div className={styles.desktopAppParent}>
        <div className={styles.desktopApp}>
          <p className={styles.toGlobalMarkets}>{`Desktop `}</p>
          <p className={styles.toGlobalMarkets}>App</p>
        </div>
        <Image className={styles.groupChild12} width={40.5} height={45} sizes="100vw" alt="" src="/images/group1597880442.png" unoptimized />
      </div>
      <div className={styles.webPlatformParent}>
        <div className={styles.webPlatform}>
          <p className={styles.toGlobalMarkets}>{`Web `}</p>
          <p className={styles.toGlobalMarkets}>Platform</p>
        </div>
        <Image className={styles.groupChild13} width={40.5} height={45} sizes="100vw" alt="" src="/images/group1597880445.png" unoptimized />
      </div>
      <div className={styles.availableOn}>{`Available on: `}</div>
      <div className={styles.scanToDownload}>Scan to download:</div>
      <b className={styles.mainTitle4}>
        <p className={styles.toGlobalMarkets}>{`No `}</p>
        <p className={styles.toGlobalMarkets}>surprises</p>
      </b>
      <div className={styles.mainDescription4}>Clear processing times and no hidden platform fees from us.</div>
      <div className={styles.mainDescription5}>Bank transfer, major cards, and popular e-wallets.</div>
      <div className={styles.mainDescription6}>All transactions are safeguarded with secure payment gateways.</div>
      <div className={styles.fundYourAccountContainer}>
        <p className={styles.toGlobalMarkets}>Fund your account with trusted methods. Fast processing, clear times, and no hidden fees from MY MAA Markets.</p>
      </div>
      <div className={styles.easyDepositsQuickContainer}>
        <p className={styles.toGlobalMarkets}>
          <b className={styles.hpYourWay}>Easy</b>
          <span className={styles.to}> Deposits</span>
        </p>
        <p className={styles.toGlobalMarkets}>
          <b className={styles.hpYourWay}>Quick</b>
          <span className={styles.to}> Withdrawals</span>
        </p>
      </div>
      <b className={styles.mainTitle5}>
        <p className={styles.toGlobalMarkets}>Trusted</p>
        <p className={styles.toGlobalMarkets}>Methods</p>
      </b>
      <b className={styles.mainTitle6}>
        <p className={styles.toGlobalMarkets}>{`Security `}</p>
        <p className={styles.toGlobalMarkets}>First</p>
      </b>
      <Image className={styles.hpChild25} width={188} height={862} sizes="100vw" alt="" src="/images/group1597880843.png" unoptimized />
      <Image className={styles.hpChild26} width={188} height={852} sizes="100vw" alt="" src="/images/Group1597880844.png" unoptimized />
      <div className={styles.hpChild27} />
      <div className={styles.hpChild28} />
      <div className={styles.hpChild29} />
      <div className={styles.hpChild30} />
      <div className={styles.hpChild31} />
      <div className={styles.hpChild32} />
      <div className={styles.hpChild33} />
      <div className={styles.hpChild34} />
      <Image className={styles.delegatesNetworkingDuringCoIcon} width={382} height={402} sizes="100vw" alt="" src="/images/99f43f1a23563d9510e22da95c8accd130149629.jpg" unoptimized />
      <Image className={styles.speakersAtABusinessSeminarIcon} width={330} height={220} sizes="100vw" alt="" src="/images/99f43f1a23563d9510e22da95c8accd130149629.jpg" unoptimized />
      <Image className={styles.businessmenAndBusinesswomenIcon} width={330} height={220} sizes="100vw" alt="" src="/images/99f43f1a23563d9510e22da95c8accd130149629.jpg" unoptimized />
      <div className={styles.eventNameParent}>
        <b className={styles.eventName}>Event Name</b>
        <div className={styles.locationDate}>Location - Date</div>
      </div>
      <div className={styles.eventNameGroup}>
        <b className={styles.eventName}>Event Name</b>
        <div className={styles.hpLocationDate}>Location - Date</div>
      </div>
      <div className={styles.eventNameContainer}>
        <b className={styles.eventName}>Event Name</b>
        <div className={styles.locationDate2}>Location - Date</div>
      </div>
      <div className={styles.hpEventNameParent}>
        <b className={styles.eventName}>Event Name</b>
        <div className={styles.locationDate2}>Location - Date</div>
      </div>
      <div className={styles.eventNameParent2}>
        <b className={styles.eventName}>Event Name</b>
        <div className={styles.locationDate}>Location - Date</div>
      </div>
      <div className={styles.eventNameParent3}>
        <b className={styles.eventName}>Event Name</b>
        <div className={styles.locationDate}>Location - Date</div>
      </div>
      <div className={styles.eventNameParent4}>
        <b className={styles.eventName}>Event Name</b>
        <div className={styles.locationDate}>Location - Date</div>
      </div>
      <div className={styles.eventNameParent5}>
        <b className={styles.eventName}>Event Name</b>
        <div className={styles.locationDate}>Location - Date</div>
      </div>
      <Image className={styles.asianSpeakerWithCasualSuitIcon} width={330} height={220} sizes="100vw" alt="" src="/images/99f43f1a23563d9510e22da95c8accd130149629.jpg" unoptimized />
      <Image className={styles.smilingMultiethnicBusinesspeIcon} width={330} height={220} sizes="100vw" alt="" src="/images/99f43f1a23563d9510e22da95c8accd130149629.jpg" unoptimized />
      <Image className={styles.groupOfBusinesspeopleAttendIcon} width={330} height={220} sizes="100vw" alt="" src="/images/99f43f1a23563d9510e22da95c8accd130149629.jpg" unoptimized />
      <Image className={styles.hpSpeakersAtABusinessSeminarIcon} width={330} height={220} sizes="100vw" alt="" src="/images/99f43f1a23563d9510e22da95c8accd130149629.jpg" unoptimized />
      <Image className={styles.speakersAtABusinessSeminarIcon2} width={330} height={220} sizes="100vw" alt="" src="/images/99f43f1a23563d9510e22da95c8accd130149629.jpg" unoptimized />
      <Image className={styles.screenshot20250916At121} width={207} height={121.1} sizes="100vw" alt="" src="/images/trust.png" unoptimized />
      <Image className={styles.hpChild35} width={189.7} height={95.7} sizes="100vw" alt="" src="/images/Group1597880916.png" unoptimized />
      <div className={styles.nexa45321FrontFacingUltraParent}>
        <Image className={styles.nexa45321FrontFacingUltraIcon} width={1078} height={1078} sizes="100vw" alt="" src="/images/Group1597880884.png" unoptimized />
        <div className={styles.groupChild14} />
      </div>
      <div className={styles.atMyMaaMarkets}>At MY MAA MARKETS LTD, we specialize in connecting markets and facilitating trade across the globe. Our commitment to excellence and customer satisfaction sets us apart in the competitive world of international trade.</div>
      <div className={styles.globalPresenceLocalContainer}>
        <p className={styles.toGlobalMarkets}>
          <b className={styles.hpYourWay}>Global</b>
          <span className={styles.to}> Presence</span>
        </p>
        <p className={styles.toGlobalMarkets}>
          <b className={styles.hpYourWay}>Local</b>
          <span className={styles.to}> Support</span>
        </p>
      </div>
      <div className={styles.ourLatestRecognitionsContainer}>
        <span className={styles.to}>{`Our Latest `}</span>
        <b className={styles.recognitions}>Recognitions</b>
      </div>
      <div className={styles.tradingVolumeGroup}>
        <div className={styles.hpTradingVolume}>Trading Volume</div>
        <div className={styles.b2}>$2,500B+</div>
      </div>
      <div className={styles.activeClientsParent}>
        <div className={styles.hpActiveClients}>Active Clients</div>
        <div className={styles.b2}>170,000+</div>
      </div>
      <div className={styles.executedOrdersParent}>
        <div className={styles.hpExecutedOrders}>Executed Orders</div>
        <div className={styles.hpM}>35M+</div>
      </div>
      <div className={styles.partnersParent}>
        <div className={styles.partners2}>Partners</div>
        <div className={styles.b2}>12,000+</div>
      </div>
      <div className={styles.hpChild36} />
      <div className={styles.hpChild37} />
      <div className={styles.hpChild38} />
      <div className={styles.hpChild39} />

      {/* CTA near bottom */}
      <div className={styles.hpOpenLiveAccountWrapper} role="button" tabIndex={0} aria-label="Open Live Account">
        <b className={styles.openLiveAccount}>Open Live Account</b>
      </div>

      <Image className={styles.hpChild40} width={203.5} height={180.2} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
      <div className={styles.hpChild41} />
      <Image className={styles.stevevandorenAiPoweredRealIcon} width={491} height={315} sizes="100vw" alt="" src="/images/d9fc38b896fa2426e74e18063855767f68c8ef5b.png" unoptimized />
      <div className={styles.upcomingEvents}>Upcoming Events</div>
      <div className={styles.allEvents}>all Events</div>
      <b className={styles.hpUpcomingEvents}>Upcoming Events</b>
      <div className={styles.hpChild42} />
      <b className={styles.dubaiExpo}>Dubai Expo</b>
      <div className={styles.div6}>20.08</div>
      <Image className={styles.arrowIcon} width={9.7} height={10.6} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
      <div className={styles.hpChild43} />
      <b className={styles.webinar}>WEBINAR</b>
      <div className={styles.div7}>21.08</div>
      <Image className={styles.hpChild44} width={9.7} height={10.6} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
      <div className={styles.hpChild45} />
      <b className={styles.kuwaitRoadshow}>Kuwait roadshow</b>
      <div className={styles.div8}>25.08</div>
      <Image className={styles.hpChild46} width={9.7} height={10.6} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
      <b className={styles.tryFreeDemoContainer}>
        <p className={styles.toGlobalMarkets}>{`Try Free `}</p>
        <p className={styles.toGlobalMarkets}>Demo</p>
      </b>

      <Image className={styles.chatgptImageSep16202503} width={986} height={602} sizes="100vw" alt="" src="/images/uuuu.png" unoptimized />
      <div className={styles.hpChild47} />
      <div className={styles.hpChild48} />
      <div className={styles.learnToTrade}>Learn to trade the markets or test your trading strategies.</div>
      <div className={styles.hpChild49} />
      <div className={styles.hpChild50} />
      <b className={styles.seminars}>Seminars</b>
      <b className={styles.tradingCourses}>Trading Courses</b>
      <b className={styles.webinars}>Webinars</b>
      <Image className={styles.hpChild51} width={55} height={55} sizes="100vw" alt="" src="/images/group1597880911.png" unoptimized />
      <Image className={styles.hpChild52} width={55} height={55} sizes="100vw" alt="" src="/images/group1597880911.png" unoptimized />
      <Image className={styles.hpChild53} width={55} height={55} sizes="100vw" alt="" src="/images/group1597880911.png" unoptimized />

      <Image className={styles.hpScreenshot20250916At121} width={207} height={121.1} sizes="100vw" alt="" src="/images/trust.png" unoptimized />
      <Image className={styles.hpChild54} width={189.7} height={95.7} sizes="100vw" alt="" src="/images/Group1597880916.png" unoptimized />
      <div className={styles.wrapperGroup1597880917}>
        <Image className={styles.wrapperGroup1597880917Child} width={1437.9} height={1439.8} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild15} />
        <div className={styles.mainDescriptionParent}>
          <div className={styles.mainDescription7}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          <div className={styles.nameSurnameParent}>
            <b className={styles.nameSurname}>Name Surname</b>
            <div className={styles.parent}>
              <div className={styles.div9}>5.0</div>
              <Image className={styles.starIcon} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild16} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild17} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild18} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild19} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild15} />
        <div className={styles.mainDescriptionParent}>
          <div className={styles.mainDescription7}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          <div className={styles.nameSurnameParent}>
            <b className={styles.nameSurname}>Name Surname</b>
            <div className={styles.parent}>
              <div className={styles.div9}>5.0</div>
              <Image className={styles.starIcon} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild16} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild17} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild18} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild19} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.hpRectangleParent}>
        <div className={styles.groupChild15} />
        <div className={styles.mainDescriptionParent}>
          <div className={styles.mainDescription7}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          <div className={styles.nameSurnameParent}>
            <b className={styles.nameSurname}>Name Surname</b>
            <div className={styles.parent2}>
              <div className={styles.div9}>5.0</div>
              <Image className={styles.starIcon} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild16} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild17} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild18} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild19} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild15} />
        <div className={styles.mainDescriptionParent}>
          <div className={styles.mainDescription7}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          <div className={styles.nameSurnameParent}>
            <b className={styles.nameSurname}>Name Surname</b>
            <div className={styles.parent}>
              <div className={styles.div9}>5.0</div>
              <Image className={styles.starIcon} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild16} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild17} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild18} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild19} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild15} />
        <div className={styles.mainDescriptionParent}>
          <div className={styles.mainDescription7}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          <div className={styles.nameSurnameParent}>
            <b className={styles.nameSurname}>Name Surname</b>
            <div className={styles.parent2}>
              <div className={styles.div9}>5.0</div>
              <Image className={styles.starIcon} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild16} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild17} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild18} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild19} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.groupChild15} />
        <div className={styles.mainDescriptionParent}>
          <div className={styles.mainDescription7}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          <div className={styles.nameSurnameParent}>
            <b className={styles.nameSurname}>Name Surname</b>
            <div className={styles.parent}>
              <div className={styles.div9}>5.0</div>
              <Image className={styles.starIcon} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild16} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild17} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild18} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
              <Image className={styles.groupChild19} width={27.6} height={26.7} sizes="100vw" alt="" src="/images/Star1.svg" unoptimized />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frequentlyAskedQuestionsContainer}>
        <p className={styles.seamlessAccess}>Frequently</p>
        <p className={styles.bestPerformingMarkets}>
          <b>Asked</b>
        </p>
        <p className={styles.seamlessAccess}>Questions</p>
      </div>
      <div className={styles.accordionItem}>
        <div className={styles.accordionTitle}>
          <div className={styles.whatIsTrading}>What is trading?</div>
          <div className={styles.chevronUp}>
            <Image className={styles.icon8} width={10} height={5} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
          </div>
        </div>
        <div className={styles.accordionContent}>
          <div className={styles.body}>
            <p className={styles.toGlobalMarkets}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
            <p className={styles.toGlobalMarkets}>&nbsp;</p>
            <p className={styles.toGlobalMarkets}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
      <b className={styles.cantFindWhat}>Can’t Find What You Are Looking For?</b>
      <div className={styles.hpAccordionItem}>
        <div className={styles.hpAccordionTitle}>
          <div className={styles.whatIsTrading}>What markets can I trade on with My MAA Markets?</div>
          <div className={styles.chevronUp}>
            <Image className={styles.icon8} width={10} height={5} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
          </div>
        </div>
      </div>
      <div className={styles.accordionItem2}>
        <div className={styles.hpAccordionTitle}>
          <div className={styles.whatIsTrading}>{`What makes My MAA Markets different from other trading ﬁrms? `}</div>
          <div className={styles.chevronUp}>
            <Image className={styles.icon8} width={10} height={5} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
          </div>
        </div>
      </div>
      <div className={styles.hpChild55} />
      <div className={styles.joinOurCommunityContainer}>
        <span className={styles.to}>{`Join Our `}</span>
        <b className={styles.recognitions}>Community</b>
      </div>
      <div className={styles.stayInThe}>Stay in the know about offers and promotions</div>
      <div className={styles.rectangleParent5}>
        <div className={styles.groupChild50} />
        <div className={styles.rectangleParent6}>
          <div className={styles.groupChild51} />
          <div className={styles.subscribe}>Subscribe</div>
          <div className={styles.enterYourEmail}>Enter your email</div>
        </div>
      </div>
      <div className={styles.tradingGroup}>
        <div className={styles.hpTrading}>TRADING</div>
        <div className={styles.tradingInstruments}>Trading Instruments</div>
        <div className={styles.forex2}>Forex</div>
        <div className={styles.commodities}>Commodities</div>
        <div className={styles.metals2}>Metals</div>
        <div className={styles.indices2}>Indices</div>
        <div className={styles.crypto2}>Crypto</div>
        <div className={styles.tradingPlatformsParent}>
          <div className={styles.tradingPlatforms}>Trading Platforms</div>
          <div className={styles.whoIsA}>Meta Trader 5</div>
          <div className={styles.desktopTrader}>Desktop Trader</div>
          <div className={styles.mobileTrader}>Mobile Trader</div>
        </div>
      </div>
      <div className={styles.partnersGroup}>
        <div className={styles.partners3}>PARTNERS</div>
        <div className={styles.accounts}>Accounts</div>
        <div className={styles.accountTypes}>Account Types</div>
        <div className={styles.standardAccounts}>Standard Accounts</div>
        <div className={styles.corporateAccounts}>Corporate Accounts</div>
        <div className={styles.swapFreeAccounts}>Swap Free Accounts</div>
        <div className={styles.fixApi}>FIX API</div>
        <div className={styles.accountsComparison}>Accounts Comparison</div>
      </div>
      <div className={styles.promotionsParent}>
        <div className={styles.hpPromotions}>PROMOTIONS</div>
        <div className={styles.latestPromotions}>Latest Promotions</div>
        <div className={styles.welcomeBonus}>Welcome Bonus</div>
      </div>
      <div className={styles.aboutParent}>
        <div className={styles.accounts}>ABOUT</div>
        <div className={styles.accountTypes}>About Us</div>
        <div className={styles.legal}>Legal</div>
        <div className={styles.standardAccounts}>Why MY MAA MARKETS</div>
        <div className={styles.legalDocuments}>Legal Documents</div>
        <div className={styles.corporateAccounts}>Blog</div>
        <div className={styles.license}>License</div>
        <div className={styles.swapFreeAccounts}>Careers</div>
        <div className={styles.faqs}>FAQs</div>
        <div className={styles.protectionOfFunds}>Protection of Funds</div>
      </div>
      <div className={styles.tradingConditionsParent}>
        <div className={styles.tradingPlatforms}>Trading Conditions</div>
        <div className={styles.whoIsA}>Who is a Professional Client</div>
        <div className={styles.desktopTrader}>Execution Policy</div>
        <div className={styles.mobileTrader}>Spreads, Commissions</div>
        <div className={styles.marketHours}>Market Hours</div>
      </div>
      <Image className={styles.lineIcon} width={1931} height={1} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
      <Image className={styles.hpChild56} width={1931} height={1} sizes="100vw" alt="" src="/images/blank.png" unoptimized />

      {/* FIX: missing leading slash */}
      <Image className={styles.hpChild57} width={310.8} height={63.9} sizes="100vw" alt="" src="/images/logo-full.webp" unoptimized />

      <div className={styles.appLogo2}>
        <Image className={styles.appLogoChild} width={22.9} height={28.1} sizes="100vw" alt="" src="/images/group1597880830.png" unoptimized />
        <div className={styles.appLogoInner}>
          <div className={styles.downloadOnParent}>
            <div className={styles.downloadOn}>download on</div>
            <div className={styles.appStore}>App Store</div>
          </div>
        </div>
      </div>
      <div className={styles.appLogo3}>
        <Image className={styles.appLogoItem} width={25.5} height={28.8} sizes="100vw" alt="" src="/images/Group1597880828.png" unoptimized />
        <div className={styles.frameDiv}>
          <div className={styles.downloadOnParent}>
            <div className={styles.downloadOn}>Get it on</div>
            <div className={styles.appStore}>Google Play</div>
          </div>
        </div>
      </div>
      <Image className={styles.appLogoIcon} width={59} height={59} sizes="100vw" alt="" src="/images/blank.png" unoptimized />
      <div className={styles.hpHpInner}>
        <div className={styles.trustScore48200ReviewsParent}>
          <div className={styles.trustScore48Container}>
            <span className={styles.trustScore}>{`Trust score `}</span>
            <span className={styles.span4}>4.8</span>
            <span className={styles.trustScore}>{` | `}</span>
            <span className={styles.span4}>200</span>
            <span className={styles.trustScore}> reviews</span>
          </div>
          <div className={styles.wikifx}>WikiFX</div>
        </div>
      </div>
      <div className={styles.seeWhatOurContainer}>
        <p className={styles.seamlessAccess}>See What Our</p>
        <p className={styles.bestPerformingMarkets}>
          <b>Clients</b>
          <span className={styles.say}> Say</span>
        </p>
      </div>
      <div className={styles.hpChild58} />
      <div className={styles.hpChild59} />
      <div className={styles.getInTouchParent}>
        <div className={styles.getInTouch}>Get in Touch</div>
        <div className={styles.groupChild52} />
      </div>
      <div className={styles.openLiveAccountWrapper2} role="button" tabIndex={0} aria-label="Open Live Account">
        <b className={styles.openLiveAccount}>Open Live Account</b>
      </div>
      <Image className={styles.hpIsolationModeIcon} width={1920} height={602} sizes="100vw" alt="" src="/images/Isolation_Mode.png" unoptimized />
      <div className={styles.regulatedByFscGloballyContainer}>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.regulatedByFscGlobally}>Regulated BY FSCGlobally Leading Multi-Asset Broker.Your trusted partner in global trade for a secure and efficient trading experience. Unmatched Reliability, Advanced Security, and Exceptional Support for a Superior Trading Experience</span>
        </p>
        <p className={styles.toGlobalMarkets}>
          <b className={styles.regulatedByFscGlobally}>&nbsp;</b>
        </p>
        <p className={styles.toGlobalMarkets}>
          <b className={styles.regulatedByFscGlobally}>Disclaimer</b>
        </p>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.theInformationProvided}>The information provided on this website is for general information purposes only. While we strive to provide accurate and up-to-date information, we make no warranties or representations about the accuracy, completeness, or reliability of the information on this website. Any reliance you place on such information is strictly at your own risk.</span>
        </p>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.theInformationProvided}>We do not accept any liability for any financial losses or damages arising directly or indirectly from the use of the information on this website. It is your responsibility to verify the information before acting upon it.</span>
        </p>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.theInformationProvided}>&nbsp;</span>
        </p>
        <p className={styles.toGlobalMarkets}>
          <b className={styles.regulatedByFscGlobally}>Risk Disclosure</b>
        </p>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.theInformationProvided}>Investing in financial markets carries a high level of risk, and you should only consider trading if you understand the risks involved. Before making any trading decisions, you should carefully consider your investment objectives, risk tolerance, and financial situation.</span>
        </p>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.theInformationProvided}>By accessing or using this website, you acknowledge and accept the inherent risks involved in trading and investing, and you agree to hold MY MAA MARKETS LTD harmless for any losses that may occur as a result of your trading activities.</span>
        </p>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.theInformationProvided}>&nbsp;</span>
        </p>
        <p className={styles.toGlobalMarkets}>
          <b className={styles.regulatedByFscGlobally}>Restricted Countries</b>
        </p>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.trustScore}>MY MAA MARKETS LTD does not provide services to the following countries: General Restrictions:- Australia, USA, Russia</span>
        </p>
        <p className={styles.toGlobalMarkets}>
          <span className={styles.trustScore}>High ML/FT Risk Countries: Due to ongoing and substantial risks related to money laundering and the financing of terrorism (ML/FT), we do not offer accounts to residents of the following countries:- Afghanistan, Angola, Bahamas, Botswana, Myanmar, Côte d’Ivoire (Ivory Coast), Crimea and Sevastopol, Cuba, Democratic People’s Republic of Korea (DPRK), Democratic Republic of Congo, Liberia, Ghana, Iran, Iraq, Mongolia, North Korea, Panama, Somalia, Sudan, Syria, Trinidad and Tobago, Yemen, Zimbabwe, Note: The above list applies exclusively to the services provided by MY MAA MARKETS LTD. For any further clarifications, please visit our website </span>
          <a className={styles.wwwmymaamarketscom} href="https://www.mymaamarkets.com/" target="_blank" rel="noreferrer">
            <span className={styles.trustScore}>
              <span className={styles.forex}>www.mymaamarkets.com</span>
            </span>
          </a>
          <span className={styles.trustScore}> or contact our support team.
          </span>
        </p>
      </div>

      <Image className={styles.mariiakapYoungBeardedManWIcon} width={391} height={371} sizes="100vw" alt="" src="/images/e41bcad11ff07eebabf4ba8dc25b65a3d3667049.png" unoptimized />
      <div className={styles.hpChild60} />
      <b className={styles.hpWebinars}>Webinars</b>
      <Image className={styles.hpChild61} width={55} height={55} sizes="100vw" alt="" src="/images/group1597880911.png" unoptimized />
      <Image className={styles.hpChild62} width={55} height={55} sizes="100vw" alt="" src="/images/group1597880911.png" unoptimized />
      {/* <div className={styles.groupContainer}> */}
        <div className={styles.tvTicker}>
			<TVTicker symbols={[
				{ proName: "FX:EURUSD", title: "EUR/USD" },
				{ proName: "OANDA:XAUUSD", title: "Gold" },
				{ proName: "NASDAQ:AAPL", title: "Apple" },
				{ proName: "BINANCE:BTCUSDT", title: "BTC" },
			]}/>
			</div>
      {/* </div> */}

      {/* FIX: encode spaces + comma in filename */}
      <div className={styles.chatgptImageSep23202503Parent}>
        <Image className={styles.chatgptImageSep23202503} width={227} height={227} sizes="100vw" alt="" src="/images/ChatGPT%20Image%20Sep%2023%2C%202025%2C%2003_43_51%20PM%202.png" unoptimized />
        <Image className={styles.hpChatgptImageSep23202503} width={227} height={227} sizes="100vw" alt="" src="/images/ChatGPT%20Image%20Sep%2023%2C%202025%2C%2003_43_51%20PM%202.png" unoptimized />
      </div>

      {/* FIX: encode spaces in filenames */}
      <Image className={styles.hpChild63} width={51.3} height={51.3} sizes="100vw" alt="" src="/images/Group1597881022.svg" unoptimized />
      <Image className={styles.hpChild64} width={51.3} height={51.3} sizes="100vw" alt="" src="/images/Group%201597881021.png" unoptimized />
      <Image className={styles.hpChild65} width={51.3} height={51.3} sizes="100vw" alt="" src="/images/Group%201597881025.png" unoptimized />
      <Image className={styles.hpChild66} width={51.3} height={51.3} sizes="100vw" alt="" src="/images/Group%201597881023.svg" unoptimized />
      <Image className={styles.hpChild67} width={51.1} height={51.1} sizes="100vw" alt="" src="/images/Group%201597881024.svg" unoptimized />
    </div>
  );
};

export default HP;
