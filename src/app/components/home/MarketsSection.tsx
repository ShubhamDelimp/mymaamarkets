'use client'
import { Market } from "@/app/[locale]/home";
import { useState } from "react";


export default function MarketsSection({ markets }: { markets: Market[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="inner rounded-md">
      <div
        className="rounded-md bg-no-repeat bg-cover p-10 bg-gray-800 bg-blend-overlay"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_URL}${markets[active].image?.url})`,
        }}
      >
        <div className="flex items-center justify-center mx-[5%]">
          {markets.map((market, i) => (
            <h6
              onClick={() => setActive(i)}
              className={`cursor-pointer mx-10 ${active === i ? "text-white" : "text-gray-400"}`}
              key={i}
            >
              {market.title}
            </h6>
          ))}
        </div>
        <div className="m-[10%] min-h-[20vh]">
          <h4 className="font-semibold">{markets[active].title}</h4>
          <p className="mt-5 lg:w-3/4 max-w-[70%]">{markets[active].description}</p>
          <button className="btn-gradient-1 mt-10">{markets[active].button_name}</button>
        </div>
      </div>
    </div>
  );
}
