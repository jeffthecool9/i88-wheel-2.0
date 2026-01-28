
import React from 'react';

const HorsePointer: React.FC = () => {
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="horseGoldBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#f9df9d" />
            <stop offset="60%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8a6d3b" />
          </linearGradient>
          
          <linearGradient id="horseGoldAccent" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </linearGradient>

          <filter id="premiumDepth" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feOffset dx="0" dy="4" result="offsetBlur" />
            <feFlood floodColor="black" floodOpacity="0.6" result="offsetColor" />
            <feComposite in="offsetColor" in2="offsetBlur" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#premiumDepth)">
          {/* Main Pointer Shape - Shield/Badge Base */}
          <path 
            d="M60 110 L85 85 L85 35 Q85 15 60 15 Q35 15 35 35 L35 85 Z" 
            fill="url(#horseGoldBody)" 
            stroke="#5c4a22" 
            strokeWidth="1.5"
          />

          {/* Horse Silhouette/Details */}
          <g transform="translate(42, 32) scale(0.35)">
            {/* Horse Head Profile */}
            <path 
              d="M10 50 Q10 10 50 10 Q70 10 90 30 L100 80 L80 90 L60 60 L30 85 Z" 
              fill="#2d0a0a" 
              opacity="0.2"
            />
            {/* Mane Detail */}
            <path 
              d="M50 12 Q30 15 20 40 M55 15 Q40 20 35 45" 
              fill="none" 
              stroke="#8a6d3b" 
              strokeWidth="4" 
              strokeLinecap="round" 
            />
            {/* Eye */}
            <circle cx="65" cy="35" r="5" fill="#800000" />
          </g>

          {/* Golden Rim Highlight */}
          <path 
            d="M60 110 L85 85 L85 35 Q85 15 60 15 Q35 15 35 35 L35 85 Z" 
            fill="url(#horseGoldAccent)" 
            opacity="0.4"
          />

          {/* Center Jewel / Focus Point */}
          <circle cx="60" cy="55" r="4" fill="#ee1c25" className="animate-pulse">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
          </circle>
          
          {/* Engraved Year Label */}
          <text 
            x="60" y="80" 
            textAnchor="middle" 
            className="cinzel font-black text-[10px]" 
            fill="#5c4a22" 
            opacity="0.8"
          >2025</text>
        </g>
      </svg>
    </div>
  );
};

export default HorsePointer;
