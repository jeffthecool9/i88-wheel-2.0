
import React, { useState, useCallback } from 'react';
import FortuneWheel from './FortuneWheel';
import { SpinState } from '../types';
import RealisticCoin from './RealisticCoin';
import Confetti from './Confetti';
import { MAX_SPINS } from '../constants';

const WheelSection: React.FC = () => {
  const [spinState, setSpinState] = useState<SpinState>(SpinState.IDLE);
  const [winningPrize, setWinningPrize] = useState<string | null>(null);
  const [spinsUsed, setSpinsUsed] = useState(0);

  const handleSpinComplete = useCallback((label: string) => {
    setSpinState(SpinState.FINISHED);
    setWinningPrize(label);
  }, []);

  const handleSpinRequest = useCallback(() => {
    if (spinState === SpinState.SPINNING || spinsUsed >= MAX_SPINS) return;
    
    setSpinState(SpinState.SPINNING);
    setWinningPrize(null);
    setSpinsUsed(prev => prev + 1);
  }, [spinState, spinsUsed]);

  const isLimitReached = spinsUsed >= MAX_SPINS && spinState !== SpinState.SPINNING;

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[450px] md:min-h-[700px] px-2">
      {/* Celebration Confetti */}
      <Confetti active={spinState === SpinState.FINISHED} />

      {/* Floating Coins */}
      <div className="hidden md:block">
        <RealisticCoin delay={0} x="-38%" y="15%" size={45} rotation={45} blur={0.5} />
        <RealisticCoin delay={2} x="42%" y="-25%" size={60} rotation={-15} blur={1.5} />
        <RealisticCoin delay={4} x="-48%" y="-18%" size={38} rotation={80} blur={2.5} />
        <RealisticCoin delay={1} x="35%" y="30%" size={50} rotation={120} blur={0.5} />
      </div>
      
      <div className="relative group [perspective:1000px] w-full flex flex-col items-center justify-center">
        <FortuneWheel 
          isSpinning={spinState === SpinState.SPINNING} 
          onComplete={handleSpinComplete} 
          onSpinRequest={handleSpinRequest}
          forceWinIndex={0} 
          isLimitReached={isLimitReached}
        />
        
        {/* Win Notification - Red Focused Box */}
        <div className={`mt-6 md:mt-12 transition-all duration-1000 ease-out z-50 flex flex-col items-center gap-4 md:gap-10 w-full max-w-[95vw] md:max-w-2xl ${spinState === SpinState.FINISHED ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95 pointer-events-none absolute'}`}>
            <div className="bg-gradient-to-b from-[#ee1c25] to-[#7f1d1d] border-4 border-[#f9df9d] md:border-8 border-double px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] text-center relative overflow-hidden animate-bounce-slow w-full sm:w-auto">
                <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>
                <h3 className="cinzel text-[#f9df9d] text-2xl md:text-5xl font-black tracking-[0.1em] md:tracking-[0.2em] mb-1 drop-shadow-[0_2px_15px_rgba(0,0,0,0.4)]">You Won 100 FREE SPINS!</h3>
                <p className="montserrat text-white text-[12px] md:text-xl font-black tracking-widest uppercase drop-shadow-lg">Congratulations!</p>
            </div>

            {/* Premium Gold CTA Button */}
            <a 
              href="https://dyna.mb8-offer3.com/my?dv=mb8worldclassbonus&culture=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative px-6 py-4 md:px-16 md:py-6 transition-all duration-500 rounded-full flex items-center justify-center overflow-hidden hover:scale-105 active:scale-95 shadow-[0_20px_60px_rgba(0,0,0,0.6)] w-full sm:w-auto min-w-[260px] md:min-w-[320px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8a6d3b] via-[#f9df9d] to-[#8a6d3b]"></div>
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-30deg] animate-shimmer-perpetual"></div>
              <span className="relative z-10 cinzel text-[#2d0a0a] text-sm md:text-2xl font-black tracking-[0.2em] text-center whitespace-nowrap">
                CLAIM YOUR PROSPERITY
              </span>
            </a>
        </div>
      </div>

      {/* Status Indicators */}
      <div className={`mt-6 md:mt-10 z-20 transition-all duration-500 ${spinState === SpinState.FINISHED ? 'opacity-0 scale-90 pointer-events-none absolute' : 'opacity-100'}`}>
         {isLimitReached ? (
           <p className="cinzel text-[#f9df9d] text-xs md:text-xl tracking-widest font-bold text-center drop-shadow-md">PROSPERITY GRANTED</p>
         ) : (
           <p className="cinzel text-[#f9df9d] text-[10px] md:text-lg tracking-[0.3em] font-bold animate-pulse text-center drop-shadow-md">
              {spinState === SpinState.SPINNING ? 'DIVINING PROSPERITY...' : 'TAP THE ANGPOW TO SPIN'}
           </p>
         )}
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer-perpetual {
          0% { left: -150%; }
          100% { left: 250%; }
        }
      `}</style>
    </div>
  );
};

export default WheelSection;
