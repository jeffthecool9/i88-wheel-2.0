
import React from 'react';

const SimplePointer: React.FC = () => {
  return (
    <div className="relative w-12 h-16 flex items-center justify-center">
      <svg viewBox="0 0 60 80" className="w-full h-full">
        <defs>
          <linearGradient id="pointerGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#f9df9d" />
            <stop offset="60%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8a6d3b" />
          </linearGradient>
          <filter id="pointerShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.6" />
          </filter>
        </defs>
        <g filter="url(#pointerShadow)">
          {/* Main Pointer Body */}
          <path 
            d="M30 75 L55 5 L5 5 Z" 
            fill="url(#pointerGold)" 
            stroke="#5c4a22" 
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Decorative Pivot / Jewel */}
          <circle cx="30" cy="20" r="5" fill="#ee1c25" className="animate-pulse" />
          <circle cx="30" cy="20" r="2" fill="#ff9999" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export default SimplePointer;
