
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  velocity: number;
  rotation: number;
  rotationSpeed: number;
  drift: number;
  shape: 'circle' | 'square' | 'rect';
  delay: number;
}

const COLORS = [
  'linear-gradient(135deg, #f9df9d 0%, #d4af37 50%, #8a6d3b 100%)', // Shiny Gold
  'linear-gradient(135deg, #ffffff 0%, #f9df9d 50%, #d4af37 100%)', // Bright Gold
  'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',             // Crimson
  'linear-gradient(135deg, #ee1c25 0%, #7f1d1d 100%)',             // Deep Red
  'linear-gradient(135deg, #fffacd 0%, #f9df9d 100%)'              // Pale Gold
];

const Confetti: React.FC<{ active: boolean }> = ({ active }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (active) {
      const newParticles: Particle[] = Array.from({ length: 120 }).map((_, i) => ({
        id: i,
        x: 40 + Math.random() * 20, // Start near center horizontal
        y: 35 + Math.random() * 20, // Start near wheel center
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.random() * 16 + 10, // Significantly bigger (10px to 26px)
        angle: Math.random() * 360,
        velocity: Math.random() * 8 + 4, // Slower burst (was 15-25)
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 15 - 7.5,
        drift: Math.random() * 30 - 15, // Horizontal drift factor
        shape: Math.random() > 0.6 ? 'circle' : Math.random() > 0.3 ? 'square' : 'rect',
        delay: Math.random() * 0.2,
      }));
      setParticles(newParticles);
      
      // Clear particles after animation (increased duration)
      const timer = setTimeout(() => setParticles([]), 7000);
      return () => clearTimeout(timer);
    }
  }, [active]);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none z-[60] overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.shape === 'rect' ? `${p.size * 1.5}px` : `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            borderRadius: p.shape === 'circle' ? '50%' : '2px',
            boxShadow: `0 4px 10px rgba(0,0,0,0.3)`,
            opacity: 0,
            animation: `confetti-fall-${p.id} 6s cubic-bezier(0.2, 0, 0.3, 1) forwards`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      <style>{`
        ${particles
          .map(
            (p) => `
          @keyframes confetti-fall-${p.id} {
            0% {
              transform: translate(-50%, -50%) rotate(${p.rotation}deg) scale(0);
              opacity: 0;
            }
            5% {
              opacity: 1;
              transform: translate(calc(-50% + ${Math.cos(p.angle * Math.PI / 180) * p.velocity}vw), calc(-50% + ${Math.sin(p.angle * Math.PI / 180) * p.velocity}vh)) rotate(${p.rotation + 45}deg) scale(1.2);
            }
            20% {
              transform: translate(calc(-50% + ${Math.cos(p.angle * Math.PI / 180) * p.velocity * 1.5}vw), calc(-50% + ${Math.sin(p.angle * Math.PI / 180) * p.velocity * 1.5}vh)) rotate(${p.rotation + 180}deg) scale(1);
            }
            100% {
              transform: translate(calc(-50% + ${p.drift + (Math.sin(p.id) * 10)}vw), 110vh) rotate(${p.rotation + 1440}deg) scale(0.8);
              opacity: 0;
            }
          }
        `
          )
          .join('')}
      `}</style>
    </div>
  );
};

export default Confetti;
