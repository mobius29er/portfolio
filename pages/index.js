import StarryTickers from "../components/StarryTickers";

export default function Home() {
  return (
    <div className="relative min-h-screen text-gold font-artDeco flex flex-col items-center justify-center overflow-hidden">
      {/* Starry background at z-[-1] */}
      <StarryTickers />

      {/* Foreground content */}
      <h1 className="text-5xl mb-4 z-10">
        Jeremy Foxx Portfolio
      </h1>
      <p className="text-tan text-xl z-10">
        Step 2: Starry Tickers are in the background!
      </p>
    </div>
  );
}
