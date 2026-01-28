
import React from 'react';

interface RealisticCoinProps {
  x: string;
  y: string;
  size: number;
  rotation: number;
  delay: number;
  blur: number;
}

const RealisticCoin: React.FC<RealisticCoinProps> = ({ x, y, size, rotation, delay, blur }) => {
  return (
    <div 
      className="absolute pointer-events-none z-0"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}), calc(-50% + ${y})) rotate(${rotation}deg)`,
        width: size,
        height: size,
        animation: `float ${7 + Math.random() * 5}s ease-in-out infinite alternate ${delay}s`,
        filter: `blur(${blur}px)`,
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]">
        <defs>
          <linearGradient id="coinGoldPremium" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffacd" />
            <stop offset="40%" stopColor="#f9df9d" />
            <stop offset="60%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8a6d3b" />
          </linearGradient>
          <radialGradient id="coinGlow" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        
        {/* Thick Edge */}
        <circle cx="54" cy="54" r="45" fill="#5c4a22" />
        
        {/* Main Coin Face */}
        <circle cx="50" cy="50" r="45" fill="url(#coinGoldPremium)" stroke="#8a6d3b" strokeWidth="1.5" />
        
        {/* Traditional Square Hole */}
        <rect x="36" y="36" width="28" height="28" fill="#2d0a0a" stroke="#8a6d3b" strokeWidth="2" rx="2" />
        
        {/* Embossed Characters */}
        <g opacity="0.6" fill="#8a6d3b" className="cinzel font-bold text-[8px] tracking-widest">
            <text x="50" y="25" textAnchor="middle">i88</text>
            <text x="50" y="85" textAnchor="middle">i88</text>
            <text x="25" y="55" textAnchor="middle" transform="rotate(-90, 25, 55)">福</text>
            <text x="75" y="55" textAnchor="middle" transform="rotate(90, 75, 55)">福</text>
        </g>

        {/* Lighting Glint */}
        <circle cx="50" cy="50" r="45" fill="url(#coinGlow)" />
      </svg>

      <style>{`
        @keyframes float {
          0% { transform: translate(calc(-50% + ${x}), calc(-50% + ${y})) rotate(${rotation}deg); }
          100% { transform: translate(calc(-50% + ${x}), calc(-50% + ${y} + 25px)) rotate(${rotation + 20}deg); }
        }
      `}</style>
    </div>
  );
};

export default RealisticCoin;
