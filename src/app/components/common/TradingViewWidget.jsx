import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container1 = useRef();  // For the first widget
  const container2 = useRef();  // For the second widget

  useEffect(() => {
    // Create the first script for FX:EURUSD
    const script1 = document.createElement("script");
    script1.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script1.type = "text/javascript";
    script1.async = true;
    script1.innerHTML = `
      {
        "symbol": "FX:EURUSD",
        "colorTheme": "light",
        "isTransparent": false,
        "locale": "en",
        "width": "100%",
        "height": "80px"
      }`;

    // Create the second script for BITSTAMP:BTCUSD
    const script2 = document.createElement("script");
    script2.src = "https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js";
    script2.type = "text/javascript";
    script2.async = true;
    script2.innerHTML = `
      {
        "symbol": "BITSTAMP:BTCUSD",
        "colorTheme": "light",
        "isTransparent": false,
        "locale": "en",
        "width": "100%",
        "height": "80px"
      }`;

    // Append the scripts to the respective containers
    container1.current.appendChild(script1);
    container2.current.appendChild(script2);
  }, []);

  return (
    <div className="tradingview-widget-container">
      {/* First widget container with unique class */}
      <div className="tradingview-widget-container__widget-1" ref={container1}></div>

      {/* Second widget container with unique class */}
      <div className="tradingview-widget-container__widget-2" ref={container2}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
