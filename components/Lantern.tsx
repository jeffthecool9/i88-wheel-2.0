import React from 'react';

interface LanternProps {
  x: string;
  y: string;
  size: number;
  delay: number;
  depth: number; // 0 to 1, for blur and scale
}

const Lantern: React.FC<LanternProps> = ({ x, y, size, delay, depth }) => {
  const scale = 0.4 + depth * 0.9;
  const blur = (1 - depth) * 3;
  const opacity = 0.5 + depth * 0.5;
  const uniqueId = `v6-lantern-${x.replace(/[^a-z0-9]/gi, '')}-${y.replace(/[^a-z0-9]/gi, '')}-${delay}`;

  return (
    <div
      className="absolute pointer-events-none select-none"
      style={{
        left: x,
        top: y,
        width: size * scale,
        height: size * scale * 1.6,
        filter: `blur(${blur}px)`,
        opacity: opacity,
        zIndex: Math.floor(depth * 20),
        animation: `physics-float ${18 + delay * 4}s ease-in-out infinite alternate ${delay}s`,
      }}
    >
      <svg viewBox="0 0 120 180" className="w-full h-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]">
        <defs>
          {/* Advanced Silk Material - Deep Crimson to Vibrant Red */}
          <linearGradient id={`silkBody-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#450a0a" />
            <stop offset="25%" stopColor="#991b1b" />
            <stop offset="50%" stopColor="#ef4444" />
            <stop offset="75%" stopColor="#991b1b" />
            <stop offset="100%" stopColor="#450a0a" />
          </linearGradient>

          {/* Ultra-Realistic Gold Gradient for Caps */}
          <linearGradient id={`goldChrome-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#433010" />
            <stop offset="20%" stopColor="#a67c37" />
            <stop offset="40%" stopColor="#f9df9d" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f9df9d" />
            <stop offset="80%" stopColor="#8a6d3b" />
            <stop offset="100%" stopColor="#2a1e08" />
          </linearGradient>

          {/* PBR Specification Filter for Gold Metal */}
          <filter id={`metalPBR-${uniqueId}`}>
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur" />
            <feSpecularLighting in="blur" surfaceScale="8" specularConstant="1.2" specularExponent="40" lightingColor="#ffffff" result="spec">
              <fePointLight x="-50" y="-50" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceAlpha" operator="in" result="highlights" />
            <feComposite in="SourceGraphic" in2="highlights" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
          </filter>

          <clipPath id={`clipBody-${uniqueId}`}>
            <ellipse cx="60" cy="85" rx="50" ry="58" />
          </clipPath>

          {/* Internal Vibrant Red Core Gradient - "Hot Red" Filament Effect */}
          <radialGradient id={`redCore-${uniqueId}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff9999" />
            <stop offset="30%" stopColor="#ff1a1a" />
            <stop offset="70%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="rgba(185, 28, 28, 0)" />
          </radialGradient>
        </defs>

        {/* Support Wire */}
        <rect x="59.5" y="0" width="1" height="25" fill="#433010" />

        {/* Top Metallic Cap */}
        <g filter={`url(#metalPBR-${uniqueId})`}>
          <rect x="35" y="25" width="50" height="12" rx="3" fill={`url(#goldChrome-${uniqueId})`} />
          <rect x="40" y="22" width="40" height="4" rx="1" fill={`url(#goldChrome-${uniqueId})`} />
        </g>

        {/* Main Lantern Body */}
        <g>
          {/* Base Silk Layer */}
          <ellipse cx="60" cy="85" rx="50" ry="58" fill={`url(#silkBody-${uniqueId})`} />
          
          {/* Internal Light Engine - Intense Red Radiance */}
          <g clipPath={`url(#clipBody-${uniqueId})`}>
            {/* Soft Ambient Red Radiance */}
            <circle cx="60" cy="85" r="55" fill="rgba(239, 68, 68, 0.5)" filter="blur(35px)" />
            
            {/* The Breathing Core Bulb - Hot Red Glow */}
            <circle 
              cx="60" 
              cy="85" 
              r="48" 
              fill={`url(#redCore-${uniqueId})`} 
              className="animate-breathe-red" 
              style={{ animationDelay: `${delay}s` }}
            />

            {/* Internal Highlight for Silk Sheen */}
            <ellipse cx="60" cy="55" rx="35" ry="20" fill="rgba(255,100,100,0.15)" filter="blur(12px)" />
          </g>

          {/* Silk Ribbing - More Contrast against Red */}
          <g opacity="0.25">
             <ellipse cx="60" cy="85" rx="15" ry="58" fill="none" stroke="#000" strokeWidth="0.8" />
             <ellipse cx="60" cy="85" rx="35" ry="57" fill="none" stroke="#000" strokeWidth="0.5" />
             <line x1="60" y1="27" x2="60" y2="143" stroke="#000" strokeWidth="1" />
          </g>

          {/* Traditional Symbol - Embossed Look */}
          <text 
            x="60" y="99" 
            textAnchor="middle" 
            className="cinzel font-black text-[28px] select-none" 
            fill="rgba(0,0,0,0.4)"
          >福</text>
          <text 
            x="60" y="98" 
            textAnchor="middle" 
            className="cinzel font-black text-[28px] select-none" 
            fill="#f9df9d" 
            opacity="0.6"
          >福</text>
        </g>

        {/* Bottom Metallic Cap */}
        <g filter={`url(#metalPBR-${uniqueId})`}>
          <rect x="35" y="133" width="50" height="12" rx="3" fill={`url(#goldChrome-${uniqueId})`} />
          <rect x="42" y="145" width="36" height="6" rx="1" fill={`url(#goldChrome-${uniqueId})`} />
        </g>

        {/* High-Fidelity Tassels */}
        <g opacity="0.9">
          {[...Array(12)].map((_, i) => {
            const h = 25 + Math.random() * 15;
            const xPos = 40 + i * 3.6;
            const tasselDuration = 4.5 + Math.random() * 2;
            const tasselDelay = delay + (i * 0.12);
            return (
              <g key={i} style={{ animation: `tassel-physics ${tasselDuration}s ease-in-out infinite alternate ${tasselDelay}s`, transformOrigin: `${xPos}px 145px` }}>
                <line 
                  x1={xPos} y1="145" 
                  x2={xPos} y2={145 + h} 
                  stroke="#d4af37" 
                  strokeWidth="0.8"
                />
                <circle cx={xPos} cy={145 + h} r="0.8" fill="#f9df9d" />
              </g>
            );
          })}
        </g>
      </svg>

      <style>{`
        @keyframes physics-float {
          0% { transform: translate(0, 0) rotate(-0.3deg); }
          50% { transform: translate(6px, -30px) rotate(0.6deg); }
          100% { transform: translate(-4px, -45px) rotate(-1.2deg); }
        }
        @keyframes tassel-physics {
          0% { transform: rotate(-3.5deg) translateY(0px); }
          100% { transform: rotate(3.5deg) translateY(1.2px); }
        }
        .animate-breathe-red {
          animation: breathe-red-radiance 4.5s ease-in-out infinite alternate;
        }
        @keyframes breathe-red-radiance {
          0% { opacity: 0.5; transform: scale(0.92); filter: brightness(1) saturate(1); }
          100% { opacity: 1; transform: scale(1.08); filter: brightness(1.4) saturate(1.3); }
        }
      `}</style>
    </div>
  );
};

export default Lantern;