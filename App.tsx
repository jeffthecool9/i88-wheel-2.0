import React from "react";

/** ---------- CONFIG ---------- */
const WHEEL_SIZE = 600;
const OUTER_BORDER_WIDTH = 26;

type Prize = { id: string; label: string; value: string; color: string };

const PRIZES: Prize[] = [
  { id: "p0", label: "100 FREE SPINS", value: "ON SLOT", color: "rgba(255,255,255,0.06)" },
  { id: "p1", label: "i88 REWARD", value: "MYSTERY PRIZE", color: "rgba(0,0,0,0.06)" },
  { id: "p2", label: "i88 REWARD", value: "MYSTERY PRIZE", color: "rgba(255,255,255,0.06)" },
  { id: "p3", label: "i88 FORTUNE", value: "PROSPERITY", color: "rgba(0,0,0,0.06)" },
  { id: "p4", label: "i88 BONUS", value: "LUCKY DRAW", color: "rgba(255,255,255,0.06)" },
  { id: "p5", label: "i88 FORTUNE", value: "PROSPERITY", color: "rgba(0,0,0,0.06)" },
];

function SimplePointer() {
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20">
      <svg viewBox="0 0 120 120" className="w-full h-full">
        <defs>
          <linearGradient id="pointerGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#f9df9d" />
            <stop offset="60%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8a6d3b" />
          </linearGradient>
          <filter id="pointerShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
            <feOffset dx="0" dy="4" result="off" />
            <feFlood floodColor="black" floodOpacity="0.55" result="color" />
            <feComposite in="color" in2="off" operator="in" result="shadow" />
            <feMerge>
              <feMergeNode in="shadow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g filter="url(#pointerShadow)">
          <path
            d="M60 112 L88 84 L88 36 Q88 16 60 16 Q32 16 32 36 L32 84 Z"
            fill="url(#pointerGold)"
            stroke="#5c4a22"
            strokeWidth="2"
          />
          <circle cx="60" cy="40" r="4" fill="#ee1c25" />
        </g>
      </svg>
    </div>
  );
}

function FortuneWheel() {
  const segments = PRIZES.length;
  const anglePerSegment = 360 / segments;

  return (
    <div className="relative w-full max-w-[min(92vw,550px)] aspect-square flex items-center justify-center mx-auto">
      <div className="relative w-full h-full">
        <div className="absolute -top-[6%] left-1/2 -translate-x-1/2 z-50 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
          <SimplePointer />
        </div>

        <div className="w-full h-full relative">
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_120px_rgba(255,255,255,0.12)] z-20 pointer-events-none border-[2px] sm:border-[4px] border-white/10" />
          <svg viewBox={`0 0 ${WHEEL_SIZE} ${WHEEL_SIZE}`} className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="20%" stopColor="#fffacd" />
                <stop offset="50%" stopColor="#f9df9d" />
                <stop offset="80%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#433010" />
              </linearGradient>

              <radialGradient id="redLacquer" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ff4d4d" />
                <stop offset="70%" stopColor="#ee1c25" />
                <stop offset="100%" stopColor="#450a0a" />
              </radialGradient>

              <filter id="rimSpecular">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                <feSpecularLighting
                  in="blur"
                  surfaceScale="5"
                  specularConstant="1"
                  specularExponent="30"
                  lightingColor="#ffffff"
                  result="spec"
                >
                  <fePointLight x="300" y="-100" z="400" />
                </feSpecularLighting>
                <feComposite in="spec" in2="SourceAlpha" operator="in" result="specular" />
                <feComposite in="SourceGraphic" in2="specular" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
              </filter>
            </defs>

            <circle cx={WHEEL_SIZE / 2} cy={WHEEL_SIZE / 2} r={WHEEL_SIZE / 2 - 5} fill="url(#redLacquer)" />

            <g>
              {PRIZES.map((prize, i) => {
                const startAngle = i * anglePerSegment;
                const endAngle = (i + 1) * anglePerSegment;
                const outerR = WHEEL_SIZE / 2 - OUTER_BORDER_WIDTH;

                const x1 = WHEEL_SIZE / 2 + outerR * Math.cos(((startAngle - 90) * Math.PI) / 180);
                const y1 = WHEEL_SIZE / 2 + outerR * Math.sin(((startAngle - 90) * Math.PI) / 180);
                const x2 = WHEEL_SIZE / 2 + outerR * Math.cos(((endAngle - 90) * Math.PI) / 180);
                const y2 = WHEEL_SIZE / 2 + outerR * Math.sin(((endAngle - 90) * Math.PI) / 180);

                const d = `M ${WHEEL_SIZE / 2} ${WHEEL_SIZE / 2} L ${x1} ${y1} A ${outerR} ${outerR} 0 0 1 ${x2} ${y2} Z`;

                return (
                  <g key={prize.id}>
                    <path d={d} fill={prize.color} />
                    <line x1={WHEEL_SIZE / 2} y1={WHEEL_SIZE / 2} x2={x1} y2={y1} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                    <g transform={`rotate(${startAngle + anglePerSegment / 2}, ${WHEEL_SIZE / 2}, ${WHEEL_SIZE / 2})`}>
                      <text
                        x={WHEEL_SIZE / 2}
                        y={105}
                        textAnchor="middle"
                        fill="#fffacd"
                        className="cinzel font-bold text-[16px] sm:text-[18px] tracking-wider pointer-events-none"
                        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
                      >
                        {prize.label}
                      </text>
                      <text
                        x={WHEEL_SIZE / 2}
                        y={125}
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.8)"
                        className="montserrat font-bold text-[8px] sm:text-[9px] tracking-[0.2em] pointer-events-none uppercase"
                      >
                        {prize.value}
                      </text>
                    </g>
                  </g>
                );
              })}
            </g>

            <g filter="url(#rimSpecular)">
              <circle
                cx={WHEEL_SIZE / 2}
                cy={WHEEL_SIZE / 2}
                r={WHEEL_SIZE / 2 - OUTER_BORDER_WIDTH / 2}
                fill="none"
                stroke="url(#goldMetallic)"
                strokeWidth={OUTER_BORDER_WIDTH}
              />
              <circle
                cx={WHEEL_SIZE / 2}
                cy={WHEEL_SIZE / 2}
                r={WHEEL_SIZE / 2 - OUTER_BORDER_WIDTH}
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#7f1d1d] relative overflow-x-hidden flex flex-col items-center justify-start py-6 sm:py-10 md:py-20">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_#ee1c25_0%,_#b91c1c_70%,_#450a0a_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_40%,_rgba(0,0,0,0.2)_100%)] opacity-40" />
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[80%] bg-[#ef4444] rounded-full blur-[150px] opacity-20 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[70%] h-[90%] bg-[#b91c1c] rounded-full blur-[180px] opacity-15" />
        <div className="absolute top-[10%] right-[10%] w-[30%] h-[40%] bg-[#f9df9d] rounded-full blur-[120px] opacity-5" />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/pinstripe.png")' }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center">
        <header className="text-center mb-6 sm:mb-10 md:mb-16 space-y-2 sm:space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-[1px] w-6 md:w-16 bg-gradient-to-r from-transparent via-[#f9df9d] to-transparent" />
            <h2 className="cinzel text-[#f9df9d] text-[8px] sm:text-sm tracking-[0.4em] sm:tracking-[0.5em] font-bold uppercase drop-shadow-[0_0_15px_rgba(249,223,157,0.5)]">
              i88 Exclusive
            </h2>
            <div className="h-[1px] w-6 md:w-16 bg-gradient-to-l from-transparent via-[#f9df9d] to-transparent" />
          </div>

          <h1 className="cinzel text-4xl sm:text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#ffffff] via-[#f9df9d] to-[#d4af37] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)] leading-tight tracking-tight">
            PLAY WITH US
          </h1>
          <p className="montserrat text-white/90 text-[8px] sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase font-black max-w-[280px] sm:max-w-lg mx-auto leading-relaxed drop-shadow-lg">
            Immediate Credit to Your Account!
          </p>
        </header>

        <FortuneWheel />

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
