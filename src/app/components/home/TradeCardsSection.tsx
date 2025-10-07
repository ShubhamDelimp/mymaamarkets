'use client'

import { Trade } from "@/app/[locale]/home";


export default function TradeCardsSection({ trades }: { trades: Trade[] }) {
  const CheckChange = (num: string) => {
    if (num.includes("-")) return "text-red-400";
    if (num.includes("+")) return "text-green-400";
    return "";
  };

  return (
    <div className="flex flex-wrap gap-4">
      {trades.map((trade, i) => (
        <div key={i} className="basis-1/4">
          <div className="gradient-border rounded-md">
            <div className="inner rounded-md p-4">
              <h5 className="font-semibold">{trade.symbol}</h5>
              <div className="flex items-center justify-between">
                <h6>{trade.price}</h6>
                <p className={CheckChange(trade.change_percent)}>{trade.change_percent}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
