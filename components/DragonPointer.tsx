
import React from 'react';

const DragonPointer: React.FC = () => {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      {/* 
        This is a stylized SVG representing a premium golden dragon crest. 
        It uses multiple gradients to simulate PBR metal materials.
      */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="dragonGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fffacd" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8a6d3b" />
          </linearGradient>
          <filter id="dragonShadow">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.8" />
          </filter>
        </defs>
        
        {/* Simplified Dragon Head Pointer Shape */}
        <g filter="url(#dragonShadow)">
            {/* The "Spike" of the pointer */}
            <path d="M50 95 L65 70 L35 70 Z" fill="url(#dragonGold)" stroke="#5c4a22" strokeWidth="0.5" />
            
            {/* Decorative Dragon Body / Head Base */}
            <path d="M30 70 Q10 70 10 40 Q10 10 50 10 Q90 10 90 40 Q90 70 70 70 L50 60 Z" fill="url(#dragonGold)" stroke="#5c4a22" strokeWidth="1" />
            
            {/* Symbolic Eye */}
            <circle cx="50" cy="35" r="5" fill="#800000" stroke="#f9df9d" strokeWidth="1" />
            
            {/* Intricate Scales Pattern (Simplified) */}
            <path d="M25 45 Q35 40 45 45 M55 45 Q65 40 75 45 M35 55 Q50 50 65 55" fill="none" stroke="#5c4a22" strokeWidth="0.5" opacity="0.5" />
            
            {/* Beard/Mane Detail */}
            <path d="M40 10 Q40 0 30 5 M60 10 Q60 0 70 5" fill="none" stroke="url(#dragonGold)" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Highlight Bloom */}
        <circle cx="50" cy="30" r="20" fill="url(#dragonGold)" opacity="0.1" filter="blur(8px)" />
      </svg>
    </div>
  );
};

export default DragonPointer;
