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
        className="text-5xl mb-4 z-10 cursor-pointer hover:text-gold/80 transition"
      >
        Jeremy Foxx Portfolio
      </h1>
      <p className="text-tan text-xl z-10">
        Step 4: Click my name for the Star Wars jump!
      </p>
    </div>
  );
}
