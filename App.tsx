import React from "react";
import WheelSection from "./components/WheelSection";

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#7f1d1d] relative overflow-x-hidden flex flex-col items-center justify-start py-6 sm:py-10 md:py-20">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_#ee1c25_0%,_#b91c1c_70%,_#450a0a_100%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_40%,_rgba(0,0,0,0.2)_100%)] opacity-40"></div>
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[80%] bg-[#ef4444] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[70%] h-[90%] bg-[#b91c1c] rounded-full blur-[180px] opacity-15"></div>
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[40%] bg-[#f9df9d] rounded-full blur-[120px] opacity-5"></div>
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstripe.png")' }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center">
        <header className="text-center mb-6 sm:mb-10 md:mb-16 space-y-2 sm:space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-[1px] w-6 md:w-16 bg-gradient-to-r from-transparent via-[#f9df9d] to-transparent"></div>
            <h2 className="cinzel text-[#f9df9d] text-[8px] sm:text-sm tracking-[0.4em] sm:tracking-[0.5em] font-bold uppercase drop-shadow-[0_0_15px_rgba(249,223,157,0.5)]">
              i88 Exclusive
            </h2>
            <div className="h-[1px] w-6 md:w-16 bg-gradient-to-l from-transparent via-[#f9df9d] to-transparent"></div>
          </div>

          <h1 className="cinzel text-4xl sm:text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] via-[#f9df9d] to-[#d4af37] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] leading-tight tracking-tight">
            PLAY WITH US
          </h1>

          <p className="montserrat text-white/90 text-[8px] sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase font-black max-w-[280px] sm:max-w-lg mx-auto leading-relaxed drop-shadow-lg">
            Immediate Credit to Your Account!
          </p>
        </header>

        <WheelSection />

        <footer className="mt-12 sm:mt-20 md:mt-32 text-center py-6 sm:py-10">
          <p className="cinzel text-[8px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] text-[#f9df9d]/80 uppercase font-bold drop-shadow-md">
            Terms & Conditions Apply • i88 Global Entertainment Group
          </p>
        </footer>
      </div>
    </main>
  );
};

export default App;
