// pages/index.js
import { useState } from "react";
import { useRouter } from "next/router";
import StarryTickers from "../components/StarryTickers";

export default function Home() {
  const [hyperspace, setHyperspace] = useState(false);
  const router = useRouter();

  const handleNameClick = () => {
    setHyperspace(true);

    // after 1 second of hyperspace, go to /about
    setTimeout(() => {
      router.push("/about");
    }, 1000);
  };

  return (
    <div className="relative min-h-screen text-gold font-artDeco flex flex-col items-center justify-center overflow-hidden">
      <StarryTickers hyperspace={hyperspace} />

      <h1
        onClick={handleNameClick}
        className="relative z-10 text-5xl text-white font-artDeco mb-4 z-10 cursor-pointer hover:underline hover:text-gold/80 border-4 border-gold px-4 py-2 shadow-[0_0_15px_rgba(255,215,0,0.7)] bg-black animate-pulse"
      >
        Jeremy Foxx Portfolio
      </h1>
      <p className="text-tan text-xl z-10">
        Step 4: Click my name for the Star Wars jump!
      </p>
    </div>
  );
}
