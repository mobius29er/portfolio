// /pages/index.js
import StarryTickers from "../components/StarryTickers";
import TickerChart from "../components/TickerChart";
import { useState } from "react";

export default function Home() {
  const [hoveredSymbol, setHoveredSymbol] = useState(null);
  const tickers = ["AAPL", "TSLA", "GOOGL"];

  return (
    <div className="relative min-h-screen text-gold font-artDeco flex flex-col items-center justify-center overflow-hidden">
      <StarryTickers />

      <h1 className="text-5xl mb-4 z-10">Jeremy Foxx Portfolio</h1>
      <p className="text-tan text-xl z-10">
        Step 3: Hover over a ticker to see its chart
      </p>

      <div className="z-10 flex gap-4 mt-6">
        {tickers.map((symbol) => (
          <div
            key={symbol}
            onMouseEnter={() => setHoveredSymbol(symbol)}
            onMouseLeave={() => setHoveredSymbol(null)}
            className="cursor-pointer bg-black/50 px-4 py-2 rounded hover:bg-black/80"
          >
            {symbol}
          </div>
        ))}
      </div>

      {hoveredSymbol && (
        <div className="absolute top-48 z-20">
          <TickerChart symbol={hoveredSymbol} />
        </div>
      )}
    </div>
  );
}
